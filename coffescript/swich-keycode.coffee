code = ((if e.keyCode then e.keyCode else e.which))
switch code
  when 27
    alert "ESC"
  when 13
    alert "ENTER"