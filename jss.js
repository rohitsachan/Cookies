var vpm_widget_config = {
    project_id: "[project_id]",
    additional_data: {
	'first_name': '[first_name]',
	'Age': '[Age]',
	'NPS': '[NPS]'
    },
    settings: {
	locale: "en_GB"
    },
    disable_next_button: function() {
	// Insert disable 'Next' button function appropriate to your survey platform here
    },
    enable_next_button: function() {
	// Insert enable 'Next' button function appropriate to your survey platform here
    }
};
!function(a,b,c,d){function e(){var a=b.createElement(c);a.type="text/javascript",a.async=!0,a.src=d;var e=b.getElementsByTagName(c)[0];e.parentNode.insertBefore(a,e)}a.attachEvent?a.attachEvent("onload",e):a.addEventListener("load",e,!1)}(window,document,"script","https://capture.voxpopme.net/main.js");

document.addEventListener("DOMContentLoaded", function(event) {
    // Replace your_NextButton below with the appropriate function to disable 'Next' button in your survey platform 
document.getElementById("your_NextButton").style.display = "none";
    // Replace your_checkbox is your survey platform's class for selection a checkbox 
    var checkbox = document.getElementsByClassName("your_checkbox")[0];
    checkbox.onchange = function(){
        if (checkbox.checked){
            // Insert enable 'Next' button function appropriate to your survey platform here
        } else {
            // Insert disable 'Next' button function appropriate to your survey platform here
        }
    }
});
