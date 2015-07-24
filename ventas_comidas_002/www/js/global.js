var GLOBAL = (function () {
	var my = {}
    
    var IPADDRESS="127.0.0.1";
    var PORT="9095";
    
	my.IPADDRESS = function () {
		return IPADDRESS;
	};
    my.PORT = function () {
		return PORT;
	};
    my.URL=function(){
    
        return "http://"+IPADDRESS+":"+PORT;
    }
	return my;
}());