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

(defn rand-spins [p]
  (def a (make-grid 10 10))
  (doseq [x (range 10) y (range 10) ]
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

;;; draw stuff on canvas
(defn render [ctx grid]
  (doseq [x (range 10) y (range 10)]
    (set! (.-fillStyle ctx) "blue")
    (if (aget grid x y)
      (.fillRect ctx
                 (* 10 x) (* 10 y) 10 10))))

(defn make-ticker [step]
  (let [t (atom 0)
        d (atom 1)]
    (fn []
      (when (or (> @t 1)
                (< @t 0))
        (swap! d * -1))
      (swap! t + (* step @d)))))

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  (swap! app-state update-in [:__figwheel_counter] inc)
)

(def ctx (.getContext (gdom/getElement "ising-canvas") "2d"))
(render ctx (rand-spins 0.5))

