
$(document).ready(function() {

	var user = makeid();
    if (user != "" && user != null) {
       setCookie("userid", user, 50);
  	}

// setCookie(); 

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 50; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

});
