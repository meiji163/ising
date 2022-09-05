(ns ^:figwheel-hooks ising.core
  (:require
   [goog.dom :as gdom]))

(println "This text is printed from src/ising/core.cljs. YOOOOO Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))

(defn get-app-element []
  (gdom/getElement "app"))

;;; 2D Ising model
(defn make-grid [w h]
  (make-array js/Boolean w h))

(defn rand-spin [p]
  (let [r (rand 1.0)]
    (if (< r p) true 'nil)))

(defn rand-spins [p w h]
  (def a (make-grid w h))
  (doseq [x (range w) y (range h)]
    (aset a x y (rand-spin p)))
  a)

(defn neighbors [grid x y]
  (let [w (.-length grid)
        h (.-length (aget grid 0))]
    (for [dx [-1 0 1] dy [-1 0 1]]
      (vector
       (mod (+ dx x) w)
       (mod (+ dy y) h)))))

(defn get-coord [grid & [x y] p]
  (if (aget grid x y) 1 -1))

(defn local-field [grid H x y]
  (+ H
     (reduce + (map (partial get-coord grid)
                     (neighbors grid x y)))))

(defn spin-prob [grid beta H x y]
  "Probability that (x,y) is spin +1"
  (let [l (local-field grid H x y)
        e (* -2.0 beta l)]
    (/ 1.0
       (+ 1 (. js/Math exp e)))))

(defn energy [grid H]
  (let [coupling (fn [[x y] xy]
                   (* 0.5
                      (get-coord grid xy)
                      (local-field grid H x y)))
        ;;
        w (.-length grid)
        h (.-length (aget grid 0))
        coords (for [x (range w) y (range h)] [x y])]
    (+ (reduce + (map coupling coords))
       (reduce + (map get coords)))
    ))

(defn spin-update [grid beta H x y]
  (let [p (spin-prob grid beta H x y)]
    (aset grid x y (rand-spin p))))


(defn gibbs-update [grid beta H x y]
  "Update coord with Gibbs sampling method"
  (let [b (aget grid x y)
        s (if b 1 -1)
        l (local-field grid H x y)
        deltaE (* 2.0 s l)
        acceptP (if (> deltaE 0.0)
                  (. js/Math exp (* (- beta) deltaE))
                  1.0)
        r (rand 1.0)]
    (if (rand-spin acceptP)
      (aset grid x y (not b)))))


;; global vars
(def running (atom nil))
(def beta (atom 0.3))
(def H (atom 1.0))

;; draw on canvas
(def wpx 100)
(def hpx 100)
(def px-size 3)

(def spins (rand-spins 0.3 wpx hpx)) ;;rectangular grid of spins

(def ctx (.getContext (gdom/getElement "ising-canvas") "2d"))
(set! (.-fillStyle ctx) "blue")

(defn draw-coord [ctx grid p]
  (let [[x y] p]
    (if (aget grid x y)
      (.fillRect ctx
                 (* px-size x) (* px-size y) px-size px-size)
      (.clearRect ctx
                  (* px-size x) (* px-size y) px-size px-size))))

(defn draw-grid [ctx grid coords]
  (let [w (.-length grid)
        h (.-length (aget grid 0))]
    (. ctx (save))
    (doall
     (map (partial draw-coord ctx grid) coords)))
  (. ctx (restore)))

(defn rand-update [beta H grid]
  (let [x (rand-int wpx)
        y (rand-int hpx)]
    ;;(spin-update grid beta H x y)
    (gibbs-update grid beta H x y)
    [x y]))

(defn rand-updateN [beta H grid n]
  (defn helper [updated n]
    (if (> n 0)
      (let [p (rand-update beta H grid)]
        (recur (conj updated p) (- n 1)))
      updated))
  (helper '() n))

(defn update! []
  (when @running
    (let [updates (rand-updateN @beta @H spins 40)]
      (js/setTimeout #(draw-grid ctx spins updates) 150)))
  (. js/window (requestAnimationFrame update!)))

(defn stop! []
  (reset! running false))

(defn init! []
  (reset! running true)
  (draw-grid ctx spins
             (for [x (range wpx) y (range hpx)] [x y])))

(defn ^:export start! []
  (init!)
  (. js/window (requestAnimationFrame update!)))

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  ;;(draw-grid ctx spins)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;(swap! app-state update-in [:__figwheel_counter] inc)
)
