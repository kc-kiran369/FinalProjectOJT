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
		document.getElementById('wallpaper').src = "imgs/images/mobile2.png";
	}
	else{
		document.getElementById('wallpaper').src = "imgs/images/laptop1.png";
	}
	toggles = !toggles;
}