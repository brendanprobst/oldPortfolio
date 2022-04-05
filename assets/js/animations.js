$(document).ready(function () {
	$(window).on("load", function () {
		const fadeSlides = document.querySelectorAll(".fade-slide-in");

		const appearOptions = { threshold: 0.25, rootMargin: "0px 0px -50px 0px" };
		const appearOnScroll = new IntersectionObserver(function (
			entries,
			appearOnScroll
		) {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				} else {
					entry.target.classList.add("appear");
					appearOnScroll.unobserve(entry.target);
				}
			});
		},
		appearOptions);

		fadeSlides.forEach((fadeSlide) => {
			appearOnScroll.observe(fadeSlide);
		});
		const fadeSlidesNoMargin = document.querySelectorAll(
			".fade-slide-in-no-margin"
		);

		const appearOnScrollNoMargin = new IntersectionObserver(function (
			entries,
			appearOnScrollNoMargin
		) {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				} else {
					entry.target.classList.add("appear");
					appearOnScrollNoMargin.unobserve(entry.target);
				}
			});
		});

		fadeSlidesNoMargin.forEach((fadeSlide) => {
			appearOnScrollNoMargin.observe(fadeSlide);
		});
		const typedTextSpan = document.querySelector(".typed-text");
		const textArray = [
			"School",
			"Community",
			"Club",
			"Company",
			"Organization",
			"Union",
		];
		const typingDelay = 200;
		const erasingDelay = 100;
		const newTextDelay = 2000;
		let textArrayIndex = 0;
		let charIndex = 0;

		function type() {
			if (charIndex < textArray[textArrayIndex].length) {
				typedTextSpan.textContent +=
					textArray[textArrayIndex].charAt(charIndex);
				charIndex++;
				setTimeout(type, typingDelay);
			} else {
				setTimeout(erase, newTextDelay);
			}
		}
		function erase() {
			if (charIndex > 0) {
				typedTextSpan.textContent = textArray[textArrayIndex].substring(
					0,
					charIndex - 1
				);
				charIndex--;
				setTimeout(erase, erasingDelay);
			} else {
				textArrayIndex++;
				if (textArrayIndex >= textArray.length) {
					textArrayIndex = 0;
				}
				setTimeout(type, typingDelay + 1100);
			}
		}
		document.addEventListener("DOMContentLoaded", function () {
			setTimeout(type, newTextDelay + 250);
		});
		type();
	});
});
// function fade() {
// 	var animation_height = $(window).innerHeight() * 0.25;
// 	var ratio = Math.round((1 / animation_height) * 10000) / 10000;

// 	$(".fade").each(function () {
// 		var objectTop = $(this).offset().top;
// 		var windowBottom = $(window).scrollTop() + $(window).innerHeight();

// 		if (objectTop < windowBottom) {
// 			if (objectTop < windowBottom - animation_height) {
// 				// $(this).html("fully visible");
// 				$(this).css({
// 					transition: "opacity 0.75s linear",
// 					opacity: 1,
// 				});
// 				// $(this).css({
// 				// 	transition: translateY(window.innerHeight()),
// 				// });
// 			} else {
// 				$(this).css({
// 					transition: "opacity 0.25s linear",
// 					opacity: (windowBottom - objectTop) * ratio,
// 				});
// 			}
// 		} else {
// 			$(this).css("opacity", 0);
// 		}
// 	});
// }
// $(".fade").css("opacity", 0);
// fade();

// SPLASH SCREEN

// let intro = document.querySelector(".intro");
// let load = document.querySelector(".load-header");
// let loadSpan = document.querySelectorAll(".load");
// let loadLogo = document.querySelectorAll(".loadLogo");

// window.addEventListener("DOMContentLoaded", () => {
// 	setTimeout(() => {
// 		loadSpan.forEach((span, idx) => {
// 			setTimeout(() => {
// 				span.classList.add("active");
// 			}, (idx + 1) * 100);
// 		});
// 		setTimeout(() => {
// 			loadSpan.forEach((span, idx) => {
// 				setTimeout(() => {
// 					span.classList.remove("active");
// 					span.classList.add("fade");
// 				}, (idx + 1) * 100);
// 			});
// 		}, 2000);
// 		setTimeout(() => {
// 			intro.style.top = "-100vh";
// 		}, 2300);
// 	});
// });

// var TxtType = function (el, toRotate, period) {
// 	this.toRotate = toRotate;
// 	this.el = el;
// 	this.loopNum = 0;
// 	this.period = parseInt(period, 10) || 2000;
// 	this.txt = "";
// 	this.tick();
// 	this.isDeleting = false;
// };

// TxtType.prototype.tick = function () {
// 	var i = this.loopNum % this.toRotate.length;
// 	var fullTxt = this.toRotate[i];

// 	if (this.isDeleting) {
// 		this.txt = fullTxt.substring(0, this.txt.length - 1);
// 	} else {
// 		this.txt = fullTxt.substring(0, this.txt.length + 1);
// 	}

// 	this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

// 	var that = this;
// 	var delta = 200 - Math.random() * 100;

// 	if (this.isDeleting) {
// 		delta /= 2;
// 	}

// 	if (!this.isDeleting && this.txt === fullTxt) {
// 		delta = this.period;
// 		this.isDeleting = true;
// 	} else if (this.isDeleting && this.txt === "") {
// 		this.isDeleting = false;
// 		this.loopNum++;
// 		delta = 500;
// 	}

// 	setTimeout(function () {
// 		that.tick();
// 	}, delta);
// };

// window.onload = function () {
// 	var elements = document.getElementsByClassName("typewrite");
// 	for (var i = 0; i < elements.length; i++) {
// 		var toRotate = elements[i].getAttribute("data-type");
// 		var period = elements[i].getAttribute("data-period");
// 		if (toRotate) {
// 		}
// 	}
// 	// INJECT CSS
// 	var css = document.createElement("style");
// 	css.type = "text/css";
// 	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
// 	document.body.appendChild(css);
// };

// 1
