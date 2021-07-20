var name = "none";

// function for opening signup menus
function openmenu(){
	name = localStorage.getItem("name");

	if(name=="none" || name==" "){
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

	if( signin.style.display != "inline"){
		if(sign.style.display == "inline")
		{
			sign.style.display = "none"
		}else{
			sign.style.display ="inline"
		}
	}
	else{
		signin.style.display = "none"
	}
}

//function for display <name> has signed in
function hasSignedin(){
	var hasSignVar = document.querySelector(".hasSigned");
	var displayText = name +" has signed in";
	document.querySelector(".hasSignText").innerHTML = displayText;
	if(name!=" ")
	{
		if(hasSignVar.style.display == "inline")
		{
			hasSignVar.style.display = "none"
		}else{
			hasSignVar.style.display ="inline"
		}
	}
}


//delete signup info
//actually changes value to none
function deleteInfo() {

	localStorage.setItem("name" , "none");
	localStorage.setItem("Fname" ,"none");
	localStorage.setItem("Lname" ,"none");
	localStorage.setItem("email" ,"none");
	localStorage.setItem("password" ,"none");

	document.querySelector(".hasSigned").style.display = "none"
	document.querySelector(".signup").style.display = "inline"
}


//sign up
function signup(){

	//get data from signup input field when submit is pressed
	var Fname = document.getElementById('Fname').value;
	var Lname = document.getElementById('Lname').value;
	var email = document.getElementById('Femail').value;
	var password = document.getElementById('Fpass').value;
	name = Fname+" "+Lname;

	if(name!=" ")
	{
		// set storage
		localStorage.setItem("name" , name);
		localStorage.setItem("Fname" , Fname);
		localStorage.setItem("Lname" , Lname);
		localStorage.setItem("email" , email);
		localStorage.setItem("password" , password);
		document.querySelector(".signup").style.display = "none"
		// document.querySelector(".hasSigned").style.display = "inline"
		openmenu();
	}
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





//for credit card information

function view_purchase_section() {
	alert("yup its working");
}