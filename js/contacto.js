async function cargarContacto(language) {
    try {
        const response = await fetch('data/contacto.json');
        const data = await response.json();
        
        const content = data[language];

        document.getElementById('contactTitle').innerText = content.titulo;
        document.getElementById('contactTitle').setAttribute('data-en', data['en'].titulo);
        document.getElementById('contactTitle').setAttribute('data-es', data['es'].titulo);

        document.getElementById('contactSubtitle').innerText = content.subtitulo;
        document.getElementById('contactSubtitle').setAttribute('data-en', data['en'].subtitulo);
        document.getElementById('contactSubtitle').setAttribute('data-es', data['es'].subtitulo);

        document.getElementById('contactDescription').innerText = content.descripcion;
        document.getElementById('contactDescription').setAttribute('data-en', data['en'].descripcion);
        document.getElementById('contactDescription').setAttribute('data-es', data['es'].descripcion);

        document.getElementById('nameLabel').innerText = content.nombreLabel;
        document.getElementById('nameLabel').setAttribute('data-en', data['en'].nombreLabel);
        document.getElementById('nameLabel').setAttribute('data-es', data['es'].nombreLabel);
        document.getElementById('name').placeholder = content.nombrePlaceholder;
        document.getElementById('name').setAttribute('data-en-placeholder', data['en'].nombrePlaceholder);
        document.getElementById('name').setAttribute('data-es-placeholder', data['es'].nombrePlaceholder);
        
        document.getElementById('emailLabel').innerText = content.emailLabel;
        document.getElementById('emailLabel').setAttribute('data-en', data['en'].emailLabel);
        document.getElementById('emailLabel').setAttribute('data-es', data['es'].emailLabel);
        document.getElementById('email').placeholder = content.emailPlaceholder;
        document.getElementById('email').setAttribute('data-en-placeholder', data['en'].emailPlaceholder);
        document.getElementById('email').setAttribute('data-es-placeholder', data['es'].emailPlaceholder);
        
        document.getElementById('subjectLabel').innerText = content.asuntoLabel;
        document.getElementById('subjectLabel').setAttribute('data-en', data['en'].asuntoLabel);
        document.getElementById('subjectLabel').setAttribute('data-es', data['es'].asuntoLabel);
        document.getElementById('subject').placeholder = content.asuntoPlaceholder;
        document.getElementById('subject').setAttribute('data-en-placeholder', data['en'].asuntoPlaceholder);
        document.getElementById('subject').setAttribute('data-es-placeholder', data['es'].asuntoPlaceholder);
        
        document.getElementById('messageLabel').innerText = content.mensajeLabel;
        document.getElementById('messageLabel').setAttribute('data-en', data['en'].mensajeLabel);
        document.getElementById('messageLabel').setAttribute('data-es', data['es'].mensajeLabel);
        document.getElementById('message').placeholder = content.mensajePlaceholder;
        document.getElementById('message').setAttribute('data-en-placeholder', data['en'].mensajePlaceholder);
        document.getElementById('message').setAttribute('data-es-placeholder', data['es'].mensajePlaceholder);
        
        document.getElementById('enviar').innerText = content.enviarButton;
        document.getElementById('enviar').setAttribute('data-en', data['en'].enviarButton);
        document.getElementById('enviar').setAttribute('data-es', data['es'].enviarButton);

        const redesContainer = document.getElementById('redesSociales');
        redesContainer.innerHTML = '';
        
        content.redes.forEach((red, index) => {
            const redDiv = document.createElement('div');
            redDiv.className = 'flex items-center space-x-2';
            
            const redIcon = document.createElement('i');
            redIcon.className = `${red.icono} text-2xl`;
            
            const redLink = document.createElement('a');
            redLink.href = red.url;
            redLink.target = '_blank';
            redLink.className = 'text-blue-400 hover:text-blue-600';
            redLink.appendChild(redIcon);
            
            const redName = document.createElement('span');
            redName.className = 'ml-2 text-lg translatable';
            redName.innerText = red.nombre;
            redName.setAttribute('data-en', data['en'].redes[index].nombre);
            redName.setAttribute('data-es', data['es'].redes[index].nombre);
            
            redDiv.appendChild(redLink);
            redDiv.appendChild(redName);
            redesContainer.appendChild(redDiv);
        });
    } catch (error) {
        console.error('Error al cargar los datos de contacto:', error);
    }
}