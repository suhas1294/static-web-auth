window.onpaint = checkIfAuthenticated();
function getCookie(name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
}
function checkIfAuthenticated()
{
	var path = window.location.pathname;
	var condition1 = (getCookie("username") == undefined);
	var condition2 = (path == "/index.html");
	if (condition1 && !condition2){
		window.open('index.html', '_self');
	}
}