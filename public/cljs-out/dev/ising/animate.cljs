(ns ^:figwheel-hooks ising.animate
  (:require
   [ising.core :as core]
   [goog.dom :as gdom]))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))
(defn get-app-element []
  (gdom/getElement "app"))

;;; canvas dimensions
(def wpx 250)
(def hpx 250)
(def px-size 2)

(defn rand-update [beta H grid]
  (let [x (rand-int wpx)
        y (rand-int hpx)]
    ;;(spin-update grid beta H x y)
    (core/gibbs-update grid beta H x y)
    [x y]))

(defn rand-updateN [beta H grid n]
  "Update random coord n times. Returns coords"
  (defn helper [updated n]
    (if (> n 0)
      (let [p (rand-update beta H grid)]
        (recur (conj updated p) (- n 1)))
      updated))
  (helper '() n))


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


;;; global vars
(def running (atom nil))
(def beta (atom 0.5)) ; inverse temperature
(def H (atom 0.0)) ; magnetic field strength
(def spins (core/rand-spins 0.5 wpx hpx)) ;grid of spins

(def ising-ctx (.getContext (gdom/getElement "ising-canvas") "2d"))
(set! (.-fillStyle ising-ctx) "blue")

(defn update! []
  (when @running
    (let [updates (rand-updateN @beta @H spins 300)]
      (js/setTimeout #(draw-grid ising-ctx spins updates) 8)
        (. js/window (requestAnimationFrame update!)))))

(defn get-input [id]
  (js/parseFloat (.-value (gdom/getElement id))))

(defn set-H [] (swap! H #(get-input "H")))
(defn set-beta [] (swap! beta #(get-input "beta")))

(defn stop! []
  (reset! running false))

(defn init! []
  (.addEventListener (gdom/getElement "H") "input" set-H)
  (.addEventListener (gdom/getElement "beta") "input" set-beta)
  (reset! running true)
  (draw-grid ising-ctx spins
             (for [x (range wpx) y (range hpx)] [x y])))

(defn ^:export start []
  (init!)
  (. js/window (requestAnimationFrame update!)))

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  ;;(draw-grid ctx spins)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
                                        ;(swap! app-state update-in [:__figwheel_counter] inc)
)
