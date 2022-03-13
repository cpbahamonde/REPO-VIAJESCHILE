

// SECCION "header-navbar" - CAMBIO COLOR CON TRANSICION
// fuente: [ https://es.stackoverflow.com/q/95528 ]

$(function (){
      $(window).scroll(function(){
         if ($(this).scrollTop() > 458) {
          $('.navscroll').addClass("transicc");
         } else {
          $(".navscroll").removeClass("transicc");
         }
      });
  });

$(function (){
      $(window).scroll(function(){
         if ($(this).scrollTop() > 470) {
          $('.navscroll').addClass("bnegra");
         } else {
          $(".navscroll").removeClass("bnegra");
         }
      });
  });

// SECCION "main-QSomos" - Click en Iconos --> OCULTA/MUESTRA TEXTO
    $(document).ready(function () {
        $(".icon-title").click(function () {
            $(".qsomos-txt").toggle();
        });
    });

// SECCION "main-Destacados" - Click en Fotos --> OCULTA/MUESTRA TEXTO  
    $(document).ready(function () {
        $(".card-img").click(function () {
            $(".card-text").toggle();
        });
    });
    
// SECCION "main-Contacto" - BOTON "Enviar" --> ENVIA MENSAJE POR PANTALLA
    function MsjEnv() { alert("El mensaje fue enviado correctamente..."); }
    $(document).ready(function () {
        $("#enviarMsj").tooltip({ placement: "bottom" });
    });

// TODO EL SITIO - ENLACES SE ABREN EN OTRA VENTANA 
// fuente: [ https://html.com/attributes/a-target/ ]

    jQuery(document.links).filter(function () {
        return this.hostname != window.location.hostname;
    }).attr('target', '_blank');

// TODO EL SITIO - SMOOTH SCROLL

    $(document).ready(function () {
        $("a").click( function() { 
            var gato = this.hash
            $("html, body").animate(
                { scrollTop: $(gato).offset().top - 40 }, 800
            )
        })
    });


//  AREA PRUEBAS
 /*

$(document).scroll(function (e) {
    const y = $("html").scrollTop();
    if (y > 390) $(".navscroll").addClass("bnegra")
    else $(".navscroll").removeClass("bnegra")
});

*/
