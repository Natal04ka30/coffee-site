"use strict";

function ready() {
	if (document.querySelector('#form')) {
		//justValidate JS
		const validation = new JustValidate('.form', {
			errorLabelStyle: {
				color: '#fa0a16',
			},

		});

		validation.addField('#formName', [
			{
				rule: 'minLength',
				value: 3,
				errorMessage: "Имя должно соержать не менее 3 символов",
			},
			{
				rule: 'maxLength',
				value: 30,
				errorMessage: "Имя должно соержать не более 30 символов"
			},
			{
				rule: 'required',
				value: true,
				errorMessage: "Имя обязательно"
			}
		])
			.addField('#formEmail', [
				{
					rule: 'required',
					value: true,
					errorMessage: "Введите email"
				},
				{
					rule: 'customRegexp',
					value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					errorMessage: "Введите корректный email"
				}
			])

			.addField('#formAgreement', [
				{
					rule: 'required',
					value: true,
					errorMessage: "Согласитесь с обработкой персональных данных"
				}
			]).onSuccess((e) => {

				e.preventDefault();

				if (document.getElementById('er')) {
					document.getElementById('er').remove();
				};

				let formData = new FormData(e.target);

				let xhr = new XMLHttpRequest();

				xhr.open('POST', 'mail.php', true);
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.send(formData);

				let success;

				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {

							console.log(formData);
							setTimeout(() => {
								if (success) {
									success.remove();
								}
							}, 5000);

						}
					}
				};

				if (!success) {
					document.querySelector('.form__button').insertAdjacentHTML('beforebegin', '<div class="success">Форма отправлена</div>');
					success = document.querySelector('.success');
				};

				e.target.reset();
				document.querySelectorAll('.form-disabled').forEach(i => {
					i.setAttribute("disabled", "disabled");
					setTimeout(() => {

						i.removeAttribute("disabled");

					}, 6000);
				});

			});
	}
}
ready();

/*
let formData = new FormData(e.target);
				console.log(formData);
				let xhr = new XMLHttpRequest();

				let success;

				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {

							console.log(formData);

							setTimeout(() => {
								if (success) {
									success.remove();
								}
							}, 5000);

						}
					}
				};

				xhr.open('POST', 'contact.php', true);

				xhr.send(formData);

				if (!success) {
					document.querySelector('.form__button').insertAdjacentHTML('beforebegin', '<div class="success">Форма отправлена</div>');
					success = document.querySelector('.success');
				};

				e.target.reset();

				document.querySelectorAll('.form-disabled').forEach(i => {
					i.setAttribute("disabled", "disabled");
					setTimeout(() => {

						i.removeAttribute("disabled");

					}, 6000);
				});
*/