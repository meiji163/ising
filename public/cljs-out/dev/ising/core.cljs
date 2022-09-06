(ns ^:figwheel-hooks ising.core)

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
  "neighbors with periodic boundary conditions"
  (let [w (.-length grid)
        h (.-length (aget grid 0))]
    (for [dx [-1 0 1] dy [-1 0 1]
          :when (or (not= dx 0) (not= dy 0))]
      (vector (mod (+ dx x) w)
              (mod (+ dy y) h)))))

(defn get-coord [grid p]
  (let [[x y] p]
    (if (aget grid x y) 1 -1)))

(defn local-field [grid H x y]
  (+ H
     (reduce + (map (partial get-coord grid)
                     (neighbors grid x y)))))

(defn coupling [grid H p]
  (* 0.5
     (get-coord grid p)
     (local-field grid H (first p) (second p))))

(defn spin-prob [grid beta H x y]
  "Probability that (x,y) is spin +1"
  (let [l (local-field grid H x y)
        e (* -2.0 beta l)]
    (/ 1.0
       (+ 1 (. js/Math exp e)))))

(defn energy [grid H]
  "The total energy of the spin state"
  (let [w (.-length grid)
        h (.-length (aget grid 0))
        coords (for [x (range w) y (range h)] [x y])
        f (partial coupling grid H)
        g (partial get-coord grid)]
    (+ (reduce + (map f coords))
       (reduce + (map g coords)))
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
                  1.0)]
    (if (rand-spin acceptP)
      (aset grid x y (not b)))))
