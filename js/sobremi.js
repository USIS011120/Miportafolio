async function cargarSobreMi(language) {
    try {
        const response = await fetch('data/sobremi.json');
        const data = await response.json();

        const content = data[language];
        const sectionSobreMi = document.getElementById('sobre-mi');
        sectionSobreMi.innerHTML = '';

        const herramientasContainer = document.createElement('div');
        herramientasContainer.className = 'flex justify-evenly space-x-8 py-8';

        content.herramientas.forEach((herramienta, index) => {
            const herramientaDiv = document.createElement('div');
            herramientaDiv.className = 'bg-blue-500 text-black border-2 border-black p-4 rounded cursor-pointer hover:text-white hover:bg-blue-600 flex flex-col items-center justify-between h-40 w-40';
            herramientaDiv.setAttribute('data-aos', 'fade-up');
            herramientaDiv.setAttribute('data-aos-duration', '800');
        
            const herramientaIcono = document.createElement('img');
            herramientaIcono.src = herramienta.icono;
            herramientaIcono.alt = herramienta.nombre;
            herramientaIcono.className = 'h-24 w-24 object-contain';
        
            const herramientaNombre = document.createElement('h3');
            herramientaNombre.className = 'font-bold translatable text-center mt-2';
            herramientaNombre.innerText = herramienta.nombre;
            herramientaNombre.setAttribute('data-en', data['en'].herramientas[index].nombre);
            herramientaNombre.setAttribute('data-es', data['es'].herramientas[index].nombre);
        
            herramientaDiv.appendChild(herramientaIcono);
            herramientaDiv.appendChild(herramientaNombre);
            herramientasContainer.appendChild(herramientaDiv);
        });
        

        const presentacionContainer = document.createElement('div');
        presentacionContainer.className = 'w-full bg-gray-100 flex flex-col md:flex-row px-6 md:px-24 py-16 md:py-32 space-y-10 md:space-y-0 md:space-x-10';
        presentacionContainer.setAttribute('data-aos', 'fade-right');
        presentacionContainer.setAttribute('data-aos-duration', '1000');

        const imgContainer = document.createElement('div');
        imgContainer.className = 'flex items-center flex.col justify-center md:w-2/5';

        const imgElement = document.createElement('img');
        imgElement.src = 'img/profile/front.png';
        imgElement.alt = 'Flor Mabel Ariza Rodríguez';
        imgElement.className = 'w-4/5 md:w-full rounded-lg';

        imgContainer.appendChild(imgElement);

        const textContainer = document.createElement('div');
        textContainer.className = 'px-4 md:w-3/5';

        const tituloElement = document.createElement('h3');
        tituloElement.className = 'text-sm font-bold mb-4 text-blue-500 uppercase text-center md:text-left translatable';
        tituloElement.innerText = content.titulo;
        tituloElement.setAttribute('data-en', data['en'].titulo);
        tituloElement.setAttribute('data-es', data['es'].titulo);

        const subtituloElement = document.createElement('h2');
        subtituloElement.className = 'text-3xl md:text-4xl font-bold mb-4 text-center md:text-left translatable';
        subtituloElement.innerText = content.subtitulo;
        subtituloElement.setAttribute('data-en', data['en'].subtitulo);
        subtituloElement.setAttribute('data-es', data['es'].subtitulo);

        const descripcionElement = document.createElement('p');
        descripcionElement.className = 'text-lg md:text-xl mb-4 text-center md:text-left translatable';
        descripcionElement.innerText = content.descripcion;
        descripcionElement.setAttribute('data-en', data['en'].descripcion);
        descripcionElement.setAttribute('data-es', data['es'].descripcion);

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'flex justify-center md:justify-start space-x-4';

        const buttonElement = document.createElement('button');
        buttonElement.className = 'action bg-blue-500 text-white px-4 py-2 rounded translatable';
        buttonElement.innerText = content.boton;
        buttonElement.setAttribute('data-en', data['en'].boton);
        buttonElement.setAttribute('data-es', data['es'].boton);

        buttonContainer.appendChild(buttonElement);

        textContainer.appendChild(tituloElement);
        textContainer.appendChild(subtituloElement);
        textContainer.appendChild(descripcionElement);
        textContainer.appendChild(buttonContainer);

        presentacionContainer.appendChild(imgContainer);
        presentacionContainer.appendChild(textContainer);

        const habilidadesContainer = document.createElement('div');
        habilidadesContainer.className = 'bg-blue-500 border-box py-28 px-4';

        const habilidadesGrid = document.createElement('div');
        habilidadesGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8';

        content.habilidades.forEach((habilidad, index_habilidad) => {
            const habilidadDiv = document.createElement('div');
            habilidadDiv.className = 'bg-gray-200 p-6 rounded-lg shadow-lg hover:scale-105 ease-in duration-150';
            habilidadDiv.setAttribute('data-aos', 'zoom-in');
            habilidadDiv.setAttribute('data-aos-duration', '900');

            const habilidadIcono = document.createElement('img');
            habilidadIcono.src = habilidad.icono;
            habilidadIcono.alt = habilidad.titulo;
            habilidadIcono.className = 'w-16 h-16 m-auto my-2';

            const habilidadTitulo = document.createElement('h3');
            habilidadTitulo.className = 'text-2xl font-bold mb-4 translatable';
            habilidadTitulo.innerText = habilidad.titulo;
            habilidadTitulo.setAttribute('data-en', data['en'].habilidades[index_habilidad].titulo);
            habilidadTitulo.setAttribute('data-es', data['es'].habilidades[index_habilidad].titulo);

            const habilidadList = document.createElement('ul');
            habilidadList.className = 'list-disc list-inside';

            habilidad.items.forEach((item, index_item) => {
                const listItem = document.createElement('li');
                listItem.className = 'text-base translatable';
                listItem.innerText = item;

                listItem.setAttribute('data-en', data['en'].habilidades[index_habilidad].items[index_item]);
                listItem.setAttribute('data-es', data['es'].habilidades[index_habilidad].items[index_item]);
                habilidadList.appendChild(listItem);
            });

            habilidadDiv.appendChild(habilidadIcono);
            habilidadDiv.appendChild(habilidadTitulo);
            habilidadDiv.appendChild(habilidadList);
            habilidadesGrid.appendChild(habilidadDiv);
        });

        habilidadesContainer.appendChild(habilidadesGrid);

        sectionSobreMi.appendChild(herramientasContainer);
        sectionSobreMi.appendChild(presentacionContainer);
        sectionSobreMi.appendChild(habilidadesContainer);

    } catch (error) {
        console.error('Error loading About Me section:', error);
    }
}