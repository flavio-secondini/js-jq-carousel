// acquisisco le sezioni di html su cui mi serve interagire
var rightArrow = $(".next i.fa-angle-right")
var leftArrow = $(".prev i.fa-angle-left")
var firstDot = $(".nav i.fa-circle.first")
var lastDot = $(".nav i.fa-circle.last")
var first = $("img.first")
var last = $("img.last")

// se clicco sulla freccia destra muovo la classe .active da un fratello all'altro dall'alto verso il basso. Arrivato all'ultimo fratello, la sposto di nuovo sul primo
rightArrow.click(function() {
  scorriDestra()
})

// stessi comandi della freccia destra, ma al contrario. Se il primo fratello ha classe .active, la sposto sull'ultimo, altrimenti la sposto dal basso verso l'alto
leftArrow.click(function() {
  scorriSinistra()
})

// stesse funzionalità delle icone, ma assegnate alle frecce sulla tastiera
$(document.documentElement).keydown(function (e){

  // freccia destra della tastiera
  if (e.keyCode == 39) {
    scorriDestra()
  }

  // freccia sinistra della tastiera
  if (e.keyCode == 37) {
    scorriSinistra()
  }

})

// FUNZIONI

function scorriDestra() {
  // definisco la variabile active all'interno della funzione perchè dovrà essere cercata ad ogni click
  var active = $("img.active")
  var activeDot = $(".nav i.fa-circle.active")
  if (last.hasClass("active")) {
    last.removeClass("active")
    first.addClass("active")
    lastDot.removeClass("active")
    firstDot.addClass("active")
  } else {
    active.removeClass("active").next().addClass("active")
    activeDot.removeClass("active").next().addClass("active")
  }
}

function scorriSinistra() {
  var active = $("img.active")
  var activeDot = $(".nav i.fa-circle.active")
  if (first.hasClass("active")) {
    first.removeClass("active")
    last.addClass("active")
    firstDot.removeClass("active")
    lastDot.addClass("active")
  }
  else {
    active.removeClass("active").prev().addClass("active")
    activeDot.removeClass("active").prev().addClass("active")
  }
}
