var name = "none";

// function for opening signup menus
function openmenu(){
	name = localStorage.getItem("name");

	if(name=="none"){
			toggle();
	}
	else{
		hasSignedin();
	}
}


//function for toggling between signup and login section 
function toggle() {

	var sign = document.querySelector(".signup");
	var signin = document.querySelector(".signin");

	if( signin.style.display != "inline" ){
		if(sign.style.display == "inline")
		{
			sign.style.display = "none"
		}else{
			sign.style.display ="inline"
		}
	}
}

//function for display <name> has signed in
function hasSignedin(){
	var hasSignVar = document.querySelector(".hasSigned");
	var displayText = name +" has signed in";
	document.querySelector(".hasSignText").innerHTML = displayText;

	if(hasSignVar.style.display == "inline")
	{
		hasSignVar.style.display = "none"
	}else{
		hasSignVar.style.display ="inline"
	}
}


// //delete signup info
// function deleteInfo() {

// 	// localStorage.removeItem("name");
// 	// localStorage.removeItem("Fname");
// 	// localStorage.removeItem("Lname");
// 	// localStorage.removeItem("password");
// 	// localStorage.removeItem("email");

// 	document.querySelector(".hasSigned").style.display = "none"
// 	document.querySelector(".signup").style.display = "inline"
// }


//sign up
function signup(){

	//get data from signup input field when submit is pressed
	var Fname = document.getElementById('Fname').value;
	var Lname = document.getElementById('Lname').value;
	var email = document.getElementById('Femail').value;
	var password = document.getElementById('Fpass').value;
	name = Fname+" "+Lname;

	// set storage
	localStorage.setItem("name" , name);
	localStorage.setItem("Fname" , Fname);
	localStorage.setItem("Lname" , Lname);
	localStorage.setItem("email" , email);
	localStorage.setItem("password" , password);
	document.querySelector(".signup").style.display = "none"
}

// function for hiding signup section 
function hideSign(){
	var sign = document.querySelector(".signup");
	var signin = document.querySelector(".signin");
	if( sign.style.display == "inline")
	{
		sign.style.display = "none"
		signin.style.display ="inline"
	}else{
		sign.style.display = "inline"
		signin.style.display ="none"
	}	
}




// function for changing image of front page
var toggles = true;
function changeImg(){
	if(toggles === true){
		document.getElementById('wallpaper').src = "imgs/images/mobile3.png";
	}
	else{
		document.getElementById('wallpaper').src = "imgs/images/laptop1.png";
	}
	toggles = !toggles;
}