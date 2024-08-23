async function cargarTestimonios(language) {
    try {
        const response = await fetch('data/testimonios.json');
        const data = await response.json();
        
        const content = data[language];
        const sectionTestimonios = document.getElementById('testimonios');

        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'relative container mx-auto bg-gray-900 text-white py-8 px-4 rounded-lg';

        const swiperContainer = document.createElement('div');
        swiperContainer.className = 'swiper-container';
        
        const swiperWrapper = document.createElement('div');
        swiperWrapper.className = 'swiper-wrapper';

        content.forEach((testimonio, index) => {
            const swiperSlide = document.createElement('div');
            swiperSlide.className = 'swiper-slide flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg';
            swiperSlide.setAttribute('data-index', index);

            const imgElement = document.createElement('img');
            imgElement.src = testimonio.imagen;
            imgElement.alt = testimonio.nombre;
            imgElement.className = 'w-24 h-24 rounded-full mb-4 border-4 border-gray-700';

            const nameElement = document.createElement('p');
            nameElement.className = 'text-lg font-bold mb-2';
            nameElement.innerText = testimonio.nombre;

            const profesionElement = document.createElement('p');
            profesionElement.className = 'text-sm mb-4 translatable';
            profesionElement.innerText = testimonio.profesion;
            profesionElement.setAttribute('data-en', data['en'][index].profesion);
            profesionElement.setAttribute('data-es', data['es'][index].profesion);

            const starsContainer = document.createElement('div');
            starsContainer.className = 'flex mb-4';
            for (let i = 0; i < 5; i++) {
                const star = document.createElement('span');
                star.className = i < testimonio.calificacion ? 'text-yellow-400' : 'text-gray-500';
                star.innerText = '★';
                starsContainer.appendChild(star);
            }

            const comentarioElement = document.createElement('p');
            comentarioElement.className = 'italic translatable';
            comentarioElement.innerHTML = `&ldquo;${testimonio.comentario}&rdquo;`;
            comentarioElement.setAttribute('data-en', data['en'][index].comentario);
            comentarioElement.setAttribute('data-es', data['es'][index].comentario);

            swiperSlide.appendChild(imgElement);
            swiperSlide.appendChild(nameElement);
            swiperSlide.appendChild(profesionElement);
            swiperSlide.appendChild(starsContainer);
            swiperSlide.appendChild(comentarioElement);

            swiperWrapper.appendChild(swiperSlide);
        });

        swiperContainer.appendChild(swiperWrapper);
        carouselContainer.appendChild(swiperContainer);
        sectionTestimonios.appendChild(carouselContainer);

        new Swiper(swiperContainer, {
            loop: true,
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 30,
            effect: "flip",
            navigation: {
                nextEl: '#nextTestimonio',
                prevEl: '#prevTestimonio',
            },
        });

    } catch (error) {
        console.error('Error al cargar los datos de los testimonios:', error);
    }
}