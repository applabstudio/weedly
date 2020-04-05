const TypeEffect = function() {

	new TypeIt("#tit-type", {
        speed: 100,
        loop: true
      })
      .type("Erba Light", {
        delay: 100
      })
      .pause(500)
      .delete(10, {
        delay: 300
      })
      .type("Hash Light", {
        delay: 100
      })
      .pause(500)
      .delete(10, {
        delay: 300
      })
      .type("Cibo", {
        delay: 100
      })
      .pause(500)
      .delete(5, {
        delay: 300
      })
      .type("Bevande", {
        delay: 100
      })
      .pause(500)
      .delete(8, {
        delay: 300
      })
      .type("Accessori", {
        delay: 100
      })
      .pause(500)
      .delete(10, {
        delay: 300
      })
      .type("Semi", {
        delay: 100
      })
      .pause(500)
      .delete(5, {
        delay: 100
      })
      .type("Tessuti", {
        delay: 100
      })
      .pause(500)
      .delete(8, {
        delay: 100
      })
      .type("Cosmetici", {
        delay: 100
      })
      .pause(500)
      .delete(10, {
        delay: 100
      })
      .go()
}


  
export default { init: TypeEffect };