document.addEventListener("DOMContentLoaded", function () {
    let language = 'es';

    function loadMenu() {
        fetch('./data/menu.json')
            .then(response => response.json())
            .then(data => {
                const menuItems = document.querySelectorAll('nav a');

                menuItems.forEach(menuItem => {
                    const key = menuItem.getAttribute('href').substring(1);
                    if (data.secciones[key]) {
                        menuItem.textContent = data.secciones[key][language];
                    }
                });

                document.getElementById('language-button').textContent = data.otros.idioma[language];
            })
            .catch(error => console.error('Error al cargar el menú:', error));
    }

    document.getElementById('language-button').addEventListener('click', function () {
        language = language === 'es' ? 'en' : 'es';
        loadMenu();
    });

    loadMenu();
});
