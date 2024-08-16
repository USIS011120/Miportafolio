// document.addEventListener("DOMContentLoaded", function () {
//     let language = 'es';

//     function loadMenu() {
//         fetch('./data/menu.json')
//             .then(response => response.json())
//             .then(data => {
//                 const menuItems = document.querySelectorAll('nav a');

//                 menuItems.forEach(menuItem => {
//                     const key = menuItem.getAttribute('href').substring(1);
//                     if (data.secciones[key]) {
//                         menuItem.textContent = data.secciones[key][language];
//                     }
//                 });

//                 document.getElementById('language-button').textContent = data.otros.idioma[language];
//             })
//             .catch(error => console.error('Error al cargar el menú:', error));
//     }

//     document.getElementById('language-button').addEventListener('click', function () {
//         language = language === 'es' ? 'en' : 'es';
//         loadMenu();
//     });

//     loadMenu();
// });
let currentLanguage = 'es';

document.addEventListener('DOMContentLoaded', () => {
    loadContent();
});

function loadContent() {
    fetch('data/sections.json')
    .then(response => response.json())
    .then(data => {
        renderNavbar(data.sections);
        renderSections(data.sections);
    });
}

function renderNavbar(sections) {
    const navbar = document.getElementById('main-nav');
    navbar.innerHTML = '';
    sections.forEach(section => {
        if (!section.active) {
            document.getElementById(section.id)?.remove();
        } else {
            const navItem = document.createElement('a');
            navItem.href = `#${section.id}`;
            navItem.classList = 'nav-link text-gray-700 hover:text-gray-900';
            navItem.textContent = section.name[currentLanguage];
            navbar.appendChild(navItem);
        }
    });
}

function renderSections(sections) {
    section = sections[0];
    console.log(section.id);
    
    // sections.forEach(section => {
        const content = document.getElementById(section.id);
        console.log(content);
        content.innerHTML = '';
        // fetch(`data/${section.id}.json`)
        fetch(`data/inicio.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const sectionData = data[currentLanguage];
            const sectionElement = document.getElementById(section.id);
            sectionElement.innerHTML = renderSectionContent(section.id, sectionData);
            content.appendChild(sectionElement);
        });
    // });
}
  
function renderSectionContent(type, data) {
    switch (type) {
    case 'inicio':
        return `
            <div class="space-y-6 flex flex-col md:space-y-12 items-center md:items-start justify-center py-4">
				<h1 class="text-3xl md:text-6xl font-bold mb-4 text-center md:text-left">${data.title}</h1>
				<p class="text-lg md:text-xl mb-4 text-center md:text-left">${data.subtitle}</p>
				<div class="flex justify-center md:justify-start space-x-4">
					<button data-target="#contacto" class="action bg-blue-500 text-white px-4 py-2 rounded">${data.actionCall}</button>
				</div>
			</div>
			<div class="w-2/3 md:1/3 float-right flex justify-end items-center flex-col">
				<img src="img/profile/me.png" alt="Flor Mabel Ariza Rodríguez" class="">
			</div>
        `;
    // case 'about':
    //     return `
    //     <h2>${data.title}</h2>
    //     <p>${data.description}</p>
    //     `;
    // case 'projects':
    //     // Aquí puedes agregar el código para renderizar los proyectos
    //     return `
    //     <h3>${data.title}</h3>
    //     <div>${data.projects}</div>
    //     `;
    // case 'contact':
    //     // Aquí puedes agregar el código para renderizar la sección de contacto
    //     return `
    //     <h3>${data.title}</h3>
    //     <p>${data.description}</p>
    //     <a href="mailto:${data.email}">${data.email}</a>
    //     `;
    default:
        return `<p>Sección no definida</p>`;
    }
}

function changeLanguage(language) {
    currentLanguage = language;
    loadContent();
}