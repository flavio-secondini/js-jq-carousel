// acquisisco le sezioni di html su cui mi serve interagire
var rightArrow = $(".next i.fa-angle-right")
var leftArrow = $(".prev i.fa-angle-left")
var first = $("img.first")
var last = $("img.last")

// se clicco sulla freccia destra muovo la classe .active da un fratello all'altro dall'alto verso il basso. Arrivato all'ultimo fratello, la sposto di nuovo sul primo
rightArrow.click(function() {
  if (last.hasClass("active")) {
    last.removeClass("active")
    first.addClass("active")
  } else {
    $("img.active").removeClass("active").next().addClass("active")
  }
})

// stessi comandi della freccia destra, ma al contrario. Se il primo fratello ha classe .active, la sposto sull'ultimo, altrimenti la sposto dal basso verso l'alto
leftArrow.click(function() {
  if (first.hasClass("active")) {
    first.removeClass("active")
    last.addClass("active")
  }
  else {
    $("img.active").removeClass("active").prev().addClass("active")
  }
})

// stesse funzionalità delle icone, ma assegnate alle frecce sulla tastiera
$(document.documentElement).keydown(function (e){
  // freccia destra della tastiera
  if (e.keyCode == 39) {
    if (last.hasClass("active")) {
      last.removeClass("active")
      first.addClass("active")
    } else {
      $("img.active").removeClass("active").next().addClass("active")
    }
  }

  // freccia sinistra della tastiera
  if (e.keyCode == 37) {
    if (first.hasClass("active")) {
      first.removeClass("active")
      last.addClass("active")
    }
    else {
      $("img.active").removeClass("active").prev().addClass("active")
    }
  }

})
