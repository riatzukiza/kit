(async-shell-command "sibilant" "*Sibilant*")

(process-send-string "*Sibilant*" "(console.log \"hi\")")
(process-send-string "*Sibilant*" "\n")

(buffer-string)
;; (defvar basename file-name-nondirectory)
;; (defvar dirname file-name-directory)
(defmacro open-with ())
(defun open-named-eshell (path)
  (interactive )
  (helm-find-files path)
  (eshell)
  (rename-buffer name ))


(defun open-named-eshell (path)
  (open-with eshell "Fcwd" path))
(defun )

(open-named-eshell "foobar")
