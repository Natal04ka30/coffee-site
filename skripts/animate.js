"use strict";

let mm = gsap.matchMedia();

mm.add("(min-width: 767px)", () => {

	if (document.querySelector(".header-animate")) {
		gsap.fromTo(
			".header-animate", {
			opacity: 0,
			y: -50
		},
			{
				opacity: 1,
				y: 0,
				duration: 1
			}
		)
	};

	gsap.registerPlugin(ScrollTrigger);

	if (document.querySelector(".image-animate")) {
		gsap.from(".image-animate", {
			duration: 1,
			y: 300,
			opacity: 0,
		})
	};

	if (document.querySelector(".first-animate")) {
		gsap.from(".first-animate", {
			duration: 1,
			x: 200,
			opacity: 0,
			stagger: 0.5,
		})
	};
	if (document.querySelector(".about__contain")) {
		gsap.from(
			".contain-animate", {
			scrollTrigger: {
				trigger: ".about__contain",
				start: "top 60%",
			},
			opacity: 0,
			y: 150,
			duration: 1,
		})
		gsap.from(
			".images__img", {
			scrollTrigger: {
				trigger: ".about__contain",
				start: "top 80%",
			},
			opacity: 0,
			duration: 1,
			delay: 1
		})
		gsap.from(
			".btn-animate", {
			scrollTrigger: {
				trigger: ".about__contain",
				start: "top 80%",
			},
			x: -100,
			opacity: 0,
			duration: 1,
			delay: 1.5
		})
	};

	if (document.querySelector(".service__menu")) {
		gsap.from(
			".menu__article", {
			scrollTrigger: {
				trigger: ".service__menu",
				start: "top 90%",
			},
			opacity: 0,
			duration: 0.5,
			delay: 0.5,
			stagger: 0.5,
		})
	};
	if (document.querySelector(".products__block")) {
		gsap.from(
			".products__block", {
			scrollTrigger: {
				trigger: ".products__block",
				start: "top 80%",
			},
			opacity: 0,
			duration: 1,
			delay: 0.5
		})
		gsap.from(
			".items__item", {
			scrollTrigger: {
				trigger: ".products__items",
			},
			opacity: 0,
			y: 100,
			duration: 0.5,
			delay: 0.5,
			stagger: 0.5,
		})
	};
	if (document.querySelector(".blog-all")) {
		gsap.from(
			".blog__box", {
			scrollTrigger: {
				trigger: ".blog__wrapper",

			},
			opacity: 0,
			x: 1000,
			duration: 2,
			delay: 0.5,
		})
	};

	//ABOUT Page
	if (document.querySelector(".about__contain-single")) {
		gsap.from(
			".contain-animate", {
			scrollTrigger: {
				trigger: ".about__contain-single",
				start: "top 60%",
			},
			opacity: 0,
			y: 150,
			duration: 1,
		})
		gsap.from(
			".images__img", {
			scrollTrigger: {
				trigger: ".about__contain-single",
				start: "top 80%",
			},
			opacity: 0,
			duration: 1,
			delay: 1
		})
	};
	if (document.querySelector(".history__inform")) {
		gsap.from(
			".inform__item", {
			scrollTrigger: {
				trigger: ".history__inform",
				start: "top 80%",
			},
			opacity: 0,
			y: 100,
			duration: 0.5,
			delay: 0.5,
			stagger: 0.5,
		})
	};

	if (document.querySelector(".company__wrapper")) {
		gsap.from(
			".company__name", {
			scrollTrigger: {
				trigger: ".company__wrapper",
				start: "top 80%",
			},
			opacity: 0,
			x: -200,
			duration: 0.5,
			delay: 0.5,
		})
		gsap.from(
			".company__content", {
			scrollTrigger: {
				trigger: ".company__wrapper",
				start: "top 80%",
			},
			opacity: 0,
			x: 200,
			duration: 0.5,
			delay: 0.5,
		})
	};

	//STORY Page
	if (document.querySelector(".story__box")) {
		gsap.from(
			".story__box", {
			opacity: 0,
			yPercent: 100,
			duration: 1,
			delay: 0.5,
			stagger: 0.5,
		})
	};

	//BLOG Page

	if (document.querySelector(".blog-single")) {
		gsap.from(
			".blog__title", {
			opacity: 0,
			x: 100,
			duration: 1,
		})
		gsap.from(
			".blog__trend", {
			opacity: 0,
			x: 100,
			duration: 1,
			delay: 0.5,
		})
		gsap.from(
			".blog__all", {
			opacity: 0,
			x: -100,
			duration: 1,
			delay: 0.5,
		})
	};
	if (document.querySelector(".articles")) {
		gsap.from(
			".articles__name", {
			scrollTrigger: {
				trigger: ".articles",
				start: "top 80%",
			},
			opacity: 0,
			x: 100,
			duration: 1,
			delay: 0.5,
		})
		gsap.from(
			".articles__item", {
			scrollTrigger: {
				trigger: ".articles__box",
				start: "top 80%",
			},
			opacity: 0,
			duration: 0.5,
			delay: 0.5,
			stagger: 0.5,
		})
	};

	//CONTACT Page

	if (document.querySelector(".contact")) {
		gsap.from(
			".contact__connect", {
			opacity: 0,
			x: 100,
			duration: 1,
		})
		gsap.from(
			".contact__images", {
			opacity: 0,
			x: 100,
			duration: 1,
			delay: 0.5,
		})

	};
});
