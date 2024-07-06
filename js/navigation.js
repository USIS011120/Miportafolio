document.addEventListener('DOMContentLoaded', function() {
	const sections = document.querySelectorAll('section');
	const navLinks = document.querySelectorAll('.nav-link');
    const actions = document.querySelectorAll('.action');

    let goTo = (target) => {
        const targetSection = document.getElementById(target);

        window.scrollTo({
            top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth'
        });
    }

	navLinks.forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			const targetId = this.getAttribute('href').substring(1);
            goTo(targetId)
		});
	});

	actions.forEach(btn => {
		btn.addEventListener('click', function(e) {
			const targetId = this.dataset.target.substring(1);
			goTo(targetId)
		});
	});

	window.addEventListener('scroll', function() {
		let current = '';
		sections.forEach(section => {
			const sectionTop = section.offsetTop - document.querySelector('header').offsetHeight;
			if (pageYOffset >= sectionTop - 10) {
				current = section.getAttribute('id');
			}
		});
		navLinks.forEach(link => {
			link.classList.remove('border-b-2', 'border-blue-500');
			if (link.getAttribute('href').substring(1) === current) {
				link.classList.add('border-b-2', 'border-blue-500');
			}
		});
	});
});
