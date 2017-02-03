
$(document).ready(function() {

checkCookie();

function checkCookie() {
    var user=getCookie("userid");
    if (user != "") {
        alert("Welcome again.. " + "You are done with this survey...");
		$("textarea").attr("disabled", "disabled");
		$("input").attr("disabled", "disabled");
		$(":submit").attr("disabled", "disabled");
    } else {
       alert("Welcome For the First Time.. " + "You are allowed to do this survey...");
       
    }
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


});
