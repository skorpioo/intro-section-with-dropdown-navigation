const menuBtn = document.querySelector(".menu-button");
const sideNav = document.querySelector("nav");
const closeBtn = document.querySelector(".close-button");
const bodyOverlay = document.querySelector(".menu-overlay");
const dropdownLink = document.querySelector("[data-dropdown-link]");
const dropdownMenu = document.querySelector("[data-dropdown-menu]");

menuBtn.addEventListener("click", function () {
	sideNav.classList.add("open");
	bodyOverlay.classList.add("enabled");
});

closeBtn.addEventListener("click", function () {
	sideNav.classList.remove("open");
	bodyOverlay.classList.remove("enabled");
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDown1() {
	document.getElementById("dropdown-1").classList.toggle("show");
}

function dropDown2() {
	document.getElementById("dropdown-2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
// 	if (!event.target.matches(".main-nav__link")) {
// 		var dropdowns = document.getElementsByClassName("main-nav__dropdown");
// 		var i;
// 		for (i = 0; i < dropdowns.length; i++) {
// 			var openDropdown = dropdowns[i];
// 			if (openDropdown.classList.contains("show")) {
// 				openDropdown.classList.remove("show");
// 			}
// 		}
// 	}
// };
