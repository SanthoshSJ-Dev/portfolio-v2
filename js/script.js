var app = function () {
	var body;
	var menu;
	var menuItems;

	var init = function init() {
		body = document.querySelector('body');
		menu = document.querySelector('.menu-icon');
		menuItems = document.querySelectorAll('.nav__list-item');
		applyListeners();
	};

	var applyListeners = function applyListeners() {
		menu.addEventListener('click', function () {
			return toggleClass(body, 'nav-active');
		});
	};

	var toggleClass = function toggleClass(element, stringClass) {
		if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
		else element.classList.add(stringClass);
	};

	init();
}();

const bigBall = document.querySelector('.cursor_ball--big');
const smallBall = document.querySelector('.cursor_ball--small');
const hoverables = document.querySelectorAll('.hoverables');
const social = document.querySelectorAll('.icon_bg')

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < hoverables.length; i++) {
	hoverables[i].addEventListener('mouseenter', onMouseHover);
	hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
	gsap.to(bigBall, .4, {
		x: e.pageX - 15,
		y: e.pageY - 15
	});
	gsap.to(smallBall, .1, {
		x: e.pageX - 5,
		y: e.pageY - 7
	});
}

// Hover an element
function onMouseHover() {
	gsap.to(bigBall, .3, {
		scale: 4
	});
}

function onMouseHoverOut() {
	gsap.to(bigBall, .3, {
		scale: 1
	});
}

