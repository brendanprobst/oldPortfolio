function learnMoreScroll() {
	const element = document.getElementById("legendary-groups");
	element.scrollIntoView(true);
}
var window_height = window.innerHeight;
const midScreen = window.innerHeight / 2;
var fixed = false;
var doc_height;
var header_height;
var sticky_height;
var sticky_container_top;
var sticky_bottom;
function getDistanceTopDoc(elem) {
	// Set our distance placeholder
	var distance = 0;
	// Loop up the DOM
	if (elem.offsetParent) {
		do {
			distance += elem.offsetTop;
			elem = elem.offsetParent;
		} while (elem);
	}
	// Return our distance
	return distance;
}
function getDistanceTopWindow(element) {
	return getDistanceTopDoc(element) - $(window).scrollTop();
}
function isInViewport(element) {
	let distToTopElement = getDistanceTopWindow(element);
	if (distToTopElement < midScreen) {
		return true;
	}
	return false;
}
function renderProductImages() {
	const section1 = document.getElementById("section1");
	const section2 = document.getElementById("section2");
	const section3 = document.getElementById("section3");
	const phone = document.getElementById("phone");
	if (isInViewport(section1)) {
		phone.classList = [];
		phone.classList.add("section1");
	}
	if (isInViewport(section2)) {
		phone.classList = [];
		phone.classList.add("section2");
	}
	if (isInViewport(section3)) {
		phone.classList = [];
		phone.classList.add("section3");
	}
}
function handleSticky() {
	//defines container and sticky elements
	const stickyContainer = document.querySelector(".sticky-container");
	const sticky = document.querySelector(".sticky");
	//get scroll
	let scroll = $(window).scrollTop();

	let scroll_bottom = scroll + window_height;
	//get's top and bottom of scrolling div
	sticky_container_top = getDistanceTopDoc(stickyContainer);
	sticky_height = stickyContainer.offsetHeight;
	sticky_bottom = sticky_container_top + sticky_height;

	if (sticky_container_top > scroll) {
		//if the top of the container is below the top of the screen
		//set's sticky to absolute and moved it to top of container
		sticky.classList.add("top");
		sticky.classList.remove("bottom");
	}
	if (!fixed) {
		//if the sticky is fixed
		if (sticky_container_top < scroll) {
			//and the top is at the top of the screen
			fixed = true;
			console.log("y00000");
			sticky.classList.add("fixed");
		}
	}
	if (fixed) {
		//if not fixed
		if (sticky_container_top > scroll) {
			//and below the bottom
			fixed = false;
			sticky.classList.remove("fixed");
		}
	}
	if (scroll_bottom > sticky_bottom) {
		fixed = false;
		sticky.classList.remove("fixed");
		sticky.classList.add("bottom");
	}
}

window.addEventListener("scroll", handleSticky);
window.addEventListener("scroll", getDistanceTopWindow);
window.addEventListener("scroll", renderProductImages);
