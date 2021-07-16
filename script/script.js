function toggle() {
	var sign = document.querySelector(".signup");

	if( sign.style.display == "inline")
	{
		sign.style.display = "none"
	}else{
		sign.style.display ="inline"
	}
}


var toggles = true;
function changeImg(){
	var currentImage = document.getElementById('wallpaper').src;

	if(toggles === true){
		document.getElementById('wallpaper').src = "imgs/images/mobile1.png";
	}
	else{
		document.getElementById('wallpaper').src = "imgs/images/laptop1.png";
	}
	toggles = !toggles;
}