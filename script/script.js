var name = "none";


// function for opening signup menus
function openmenu(){
	name = localStorage.getItem("name");

	//open signup section if name is none(default) or null
	if(name=="none" || name==" " || name === "null"){
			toggle();
	}
	//else enable user has signed in
	else{
		hasSignedin();
	}
}


//function for toggling between signup and login section 
function toggle() {

	//get signup section for entering info
	var sign = document.querySelector(".signup");
	
	if(sign.style.display == "inline")
	{
		sign.style.display = "none"
	}else{
		sign.style.display ="inline"
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
		}
		else{
			hasSignVar.style.display ="inline"
		}
	}
}


//delete signup info
// changes value to none
function resetInfo() {

	//set all info to none
	localStorage.setItem("name" , "none");
	localStorage.setItem("Fname" ,"none");
	localStorage.setItem("Lname" ,"none");
	localStorage.setItem("email" ,"none");
	localStorage.setItem("password" ,"none");

	//popup signup section and disable user has signed in window
	document.querySelector(".hasSigned").style.display = "none"
	document.querySelector(".signup").style.display = "inline"
}

function deleteInfo() {

	//set all info to none
	localStorage.removeItem("name");
	localStorage.removeItem("Fname");
	localStorage.removeItem("Lname");
	localStorage.removeItem("email");
	localStorage.removeItem("password");
	alert("Information Successfully Deleted");
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
		hasSignedin();	
	}
}


// function for changing image of front page
var toggles = true;
function changeImg(){

	if(toggles === true){
		document.getElementById('wallpaper').src = "imgs/images/mobile1.jpg";
	}
	else{
		document.getElementById('wallpaper').src = "imgs/images/laptop1.jpg";
	}
	toggles = !toggles;
}


function hide_cookie_section() {
	document.querySelector(".cookieT").style.display = "none"
}


//for credit card information
function close_view_purchase_section() {
	document.querySelector(".purchase-section").classList.remove("active");
}



function view_purchase_section() {
	
	var temp = document.querySelector(".purchase-section");
	var cr = document.querySelector(".Cnum").value;
	var add = document.querySelector(".address").value;

	if(cr.length != 0 && add.length != 0)
	{
		if(temp.style.transform != "scale(1)")
		{
			temp.classList.add("active");
		}
	}
	// temp.classList.add('active');
}
function goToHome() {
	window.location.href = '../index.html';
}


function show(index){
	var temp = document.querySelectorAll(".ans");
	var temp2 = temp[index];
	if(temp2.style.display == "inline")
	{
		temp2.style.display = "none"
	}
	else{
		temp2.style.display = "inline"
	}
}


function open_received_msg() {
	document.querySelector(".received").style.transform = "translateX(0%)"
}
function close_received_msg() {
	document.querySelector(".received").style.transform = "translateX(100%)"
}