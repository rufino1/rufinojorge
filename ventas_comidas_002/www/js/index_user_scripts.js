(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
       $(".button.backButton").html("ATRAS");//$.ui.popup('Hi there');
     $("body").append('<a id="idconfirmar" href="#pageconfirmar"  class="style-31"></a>'); 
   
     LOGIN.crearEnlaces(); 
     PEDIDO.crearEnlaces();
     
   $(document).on("click", "#idLogin", function(evt)
    {
        LOGIN.onClickLogin();
    });
    $(document).on("click", "#idaceptar", function(evt)
    {
            $("#idconfirmar").click(); 
    });
       $(document).on("click", "#idregistrar", function(evt)
    {
        $("#idregistrarse").click(); 

    });
    
     
    }
    
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
