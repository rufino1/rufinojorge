var GLOBAL_PEDIDO = (function () {
	var my = {}
    
    var ID=null;
    var PEDIDO=null;
    var IDENTIFICADOR=null;
    
    my.setPedido = function (pedido) {
		PEDIDO=pedido;
	};
    my.setId=function(id){
        ID=id;
    };
    my.getId=function(){
        return ID;
    };
    my.setIdentificador=function(identificador){
        IDENTIFICADOR=identificador;
    };
    my.getIdentificador=function(){
        return IDENTIFICADOR;
    };
	return my;
}());