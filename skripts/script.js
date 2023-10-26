"use strict";
window.onload = function () {
	//Burger
	if (document.querySelector('.header__burger')) {
		const burger = document.querySelector('.header__burger');
		const nav = document.querySelector('.nav');
		const body = document.querySelector('body');

		burger.addEventListener('click', (e) => {

			burger.classList.toggle('active');
			nav.classList.toggle('active');

			body.classList.toggle('lock');
		});

		nav.addEventListener('click', (e) => {

			burger.classList.remove('active');
			nav.classList.remove('active');
			body.classList.remove('lock');
		});

	};
	//scroll to top
	//показать to top
	if (document.querySelector('.scroll')) {

		const scroll = document.querySelector('.scroll');

		window.addEventListener('scroll', function () {

			scroll.classList.toggle('active', window.scrollY > 500);
		});
		//клиk по to top
		scroll.addEventListener('click', (e) => {
			e.preventDefault();
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		});
	};
	//VIDEO youtube
	if (document.querySelector('.video__btn')) {

		const videoBtn = document.querySelector('.video__btn');
		const modalWindow = document.querySelector('.modal__window');
		const modalWindowClose = document.querySelector('.modal__window-close');


		videoBtn.addEventListener('click', (e) => {
			const iframe = '<iframe src="https://www.youtube.com/embed/epMDcqKoQys?si=GtIgnB3TG75TAWuO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
			modalWindow.classList.add('active');
			modalWindow.insertAdjacentHTML('afterBegin', iframe);

		});

		modalWindowClose.addEventListener('click', (e) => {

			modalWindow.classList.remove('active');

			document.querySelector('.modal__window iframe').remove();
		});
	};
	//lazy loading
	//подгрузка карты
	//подгрузка картинок
	if (document.querySelector('[data-src]')) {

		let obseverImg = new IntersectionObserver((entries, obsever) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.src = entry.target.dataset.src;
					obsever.unobserve(entry.target);
				}
			})
		}, {
			rootMargin: '100px 0px 100px 0px',
		});
		document.querySelectorAll('[data-src]').forEach(image => obseverImg.observe(image));
	};

	//Hover header

	const currentLocation = location.href;
	let itemsLink = document.querySelectorAll('.nav__link');
	const menuLenght = itemsLink.length;

	for (let i = 0; i < menuLenght; i++) {

		if (itemsLink[i].href === currentLocation) {

			itemsLink[i].parentNode.classList.add('active');

		}
	}


};