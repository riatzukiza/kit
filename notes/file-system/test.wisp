(defn foo [x] (console.log "hi"))
(defmacro foobar [x]
          (foo)
          `(console.log ~x))
(foobar "also hi")