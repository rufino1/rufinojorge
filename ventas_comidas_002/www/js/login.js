var LOGIN = (function () {
	var my = {}
    
    /////////////////////////////////////////////////////////////////////////////////////
    /**
    *   Nos permite logearnos en el sistema
    *
    *   @param {String} usuario
    *   @param {String} contrasenia
    *   @param {String} perfil
    *   @param {Function} callback
    */
    function Login(usuario,contrasenia,callback){
        
        var param={};
        param.usuario=usuario;
        param.contrasenia=contrasenia;
        UTILS.ajaxGenericStatus(param,"getLogin",callback);
    
    }
    
    my.crearEnlaces=function(){
      //Enlaces Page Login
        $("body").append('<a id="idpedido" href="#pagepedido"  class="style-31"></a>');
        $("body").append('<a id="idconfirmar" href="#pageconfirmar"  class="style-31"></a>');        

    };
	 /* Evento onClickLogin*/
	// ../imagenes/comida.png
	my.onClickLogin= function () {        
        var usuario=$("#idusuario").val();
        var contrasenia=$("#idcontrasenia").val();
        
        Login(usuario,contrasenia,function(data){
            
                if(data.status===1){
                         navigator.notification.confirm(
                        'INGRESASTE',  // message
                        function(){
                            $("#idpedido").click();
                        },         // callback
                        'Mensaje',            // title
                        'Aceptar'                  // buttonName
                    );
                    
                }
                if(data.status===0){
                    
                     navigator.notification.confirm(
                        'Acceso denegado',  // message
                        function(){},         // callback
                        'Mensaje',            // title
                        'Aceptar'                  // buttonName
                    );
                    
                }    
        
        });
        
       
	};/////////////////////////////////////////////////////////////////////////////////

	return my;
}());

