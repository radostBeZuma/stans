document.addEventListener("DOMContentLoaded", () => {
	const block = 'header';

	const burger = document.querySelector(`.${block}__burger`);

	if (burger) {

		burger.addEventListener('click', () => {
			const rightMenu = document.querySelector(`.${block}__container-menu-n-btn`);

			burger.classList.toggle('_is-active');
			rightMenu.classList.toggle('_is-visible');

		});
	}


	const subMenuItems = document.querySelectorAll(`.${block}__menu-item--submenu`);
	let activeEl;

	subMenuItems.forEach(element => {

		element.addEventListener('click', () => {
			if (activeEl == element) {
				activeEl.classList.remove('_is-visible');
				activeEl = null;
				return;
			}

			if (activeEl) {
				activeEl.classList.remove('_is-visible');
				activeEl = null;
			}

			if (window.innerWidth < 1280) {
				element.classList.add('_is-visible');

				activeEl = element;
			}
		});

	});

});