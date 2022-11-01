const menuBtn = document.querySelector('.menu-button')
const sideNav = document.querySelector('nav')
const closeBtn = document.querySelector('.close-button')
const bodyOverlay = document.querySelector('.menu-overlay')
const dropdownLink = document.querySelector('[data-dropdown-link]')
const dropdownMenu = document.querySelector('[data-dropdown-menu]')
const rotateArrowA = document.querySelector('.arrow-a')
const rotateArrowB = document.querySelector('.arrow-b')

menuBtn.addEventListener('click', function () {
	sideNav.classList.add('open')
	bodyOverlay.classList.add('enabled')
})

closeBtn.addEventListener('click', function () {
	sideNav.classList.remove('open')
	bodyOverlay.classList.remove('enabled')
})

function dropDown1() {
	document.getElementById('dropdown-1').classList.toggle('show')
	document.getElementById('dropdown-2').classList.remove('show')
	rotateArrowA.classList.toggle('rotate')
}

function dropDown2() {
	document.getElementById('dropdown-2').classList.toggle('show')
	document.getElementById('dropdown-1').classList.remove('show')
	rotateArrowB.classList.toggle('rotate')
}

window.addEventListener('click', function (e) {
	if (
		!sideNav.contains(e.target) &&
		!closeBtn.contains(e.target) &&
		!menuBtn.contains(e.target) &&
		!dropdownMenu.contains(e.target)
	) {
		sideNav.classList.remove('open')
		bodyOverlay.classList.remove('enabled')
		document.getElementById('dropdown-2').classList.remove('show')
		document.getElementById('dropdown-1').classList.remove('show')
		rotateArrowA.classList.remove('rotate')
		rotateArrowB.classList.remove('rotate')
	}
})
