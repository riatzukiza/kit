(async-shell-command "sibilant" "*Sibilant*")

(process-send-string "*Sibilant*" "(console.log \"hi\")")
(process-send-string "*Sibilant*" "\n")

(buffer-string)
;; (defvar basename file-name-nondirectory)
;; (defvar dirname file-name-directory)
(defun open-named-eshell (name)
  (eshell)
  (rename-buffer name ))

(open-named-eshell "foobar")
