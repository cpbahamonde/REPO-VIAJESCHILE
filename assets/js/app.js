
// SMOOTH SCROLL

    $(document).ready(function () {
        $("a").click( function() { 
            var gato = this.hash
            $("html, body").animate(
                {
                        scrollTop: $(gato).offset().top - 40
                    }, 800
            )
        })
    });


// BOTON "Enviar" --> ENVIA MENSAJE POR PANTALLA
    function MsjEnv() { alert("El mensaje fue enviado correctamente..."); }
    $(document).ready(function () {
        $("#enviarMsj").tooltip({ placement: "bottom" });
    });

// OCULTA/MUESTRA TEXTO EN SECCION QSomos
    $(document).ready(function () {
        $(".icon-title").click(function () {
            $(".qsomos-txt").toggle();
        });
    });

// OCULTA/MUESTRA TEXTO EN SECCION Destacados
    $(document).ready(function () {
        $(".card-img").click(function () {
            $(".card-text").toggle();
        });
    });

 // ENLACES DE TODO EL SITIO WEB SE ABREN EN OTRA VENTANA [fuente: https://html.com/attributes/a-target/ ]
    jQuery(document.links).filter(function () {
        return this.hostname != window.location.hostname;
    }).attr('target', '_blank');


// NAVBAR CAMBIO COLOR


$(document).scroll(function(e) {
    const y = $("html").scrollTop();
    if (y > 300) $("nav").addClass("nav-black")
    else $(nav).removeClass("nav-black")
})




/*


// fuente:  https://es.stackoverflow.com/questions/95528/navbar-scroll-que-cambie-de-color-al-pasar-de-secci%C3%B3n

$(function (){
      $(window).scroll(function(){
         if ($(this).scrollTop() > 100) {
          $('.navscroll').addClass("bnegra");
         } else {
          $(".navscroll").removeClass("bnegra");
         }
      });
  });

$(function (){
      $(window).scroll(function(){
         if ($(this).scrollTop() > 100) {
          $('.navscroll').addClass("azul");
         } else {
          $(".navscroll").removeClass("azul");
         }
      });
  });

$(document).scroll(function(e) {
    const y = $("html").scrollTop();
    if (y > 300) $("nav").addClass("nav-black")
    else $(nav).removeClass("nav-black")
})
*/
