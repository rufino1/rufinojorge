(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
       $(".button.backButton").html("ATRAS");//$.ui.popup('Hi there');
     
     
     LOGIN.crearEnlaces(); 
     /*PEDIDO.crearEnlaces();*/
     
   $(document).on("click", "#idLogin", function(evt)
    {
        LOGIN.onClickLogin();
    });
   /* $(document).on("click", "#idEscogerAlumno", function(evt)
    {
       PEDIDO.onClickEscogerAlumno();
    
    });*/
   
     
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
