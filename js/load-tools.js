document.addEventListener("DOMContentLoaded", function () {
    fetch('./data/herramientas.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('herramientas-container');
            Object.keys(data.herramientas).forEach(key => {
                const tool = data.herramientas[key];
                const toolElement = document.createElement('div');
                toolElement.classList = 'bg-blue-500 text-black border-2 border-black p-4 rounded cursor-pointer hover:text-white hover:bg-black';
                
                const svgElement = document.createElement('img');
                svgElement.src = tool.icon;
                svgElement.alt = tool.name.es;
                svgElement.fill = 'currentColor';
                
                const nameElement = document.createElement('h3');
                nameElement.textContent = tool.name.es;
                nameElement.classList.add('font-bold');
                
                toolElement.appendChild(svgElement);
                toolElement.appendChild(nameElement);
                
                container.appendChild(toolElement);
            });
        })
        .catch(error => console.error('Error al cargar las herramientas:', error));
});
