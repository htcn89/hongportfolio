window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin")
	form.onsubmit = checkLogin;
}

function checkLogin(){
	
	const query = window.location.search;
	const urlParams = new URLSearchParams(query);
	const username = urlParams.get('username');
	const password = urlParams.get('password');

	var user = document.forms["myLogin"]["username"];
	var pass = document.forms["myLogin"]["password"];

	if(user.value != username || pass.value != password)
	{
		alert("Wrong username or password");
		return false;
	}

	alert("Login successfully!");
}

			