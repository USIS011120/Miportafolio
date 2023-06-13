let currentLang = 'es';

function cambiarIdioma(opt) {
    Object.keys(lang[opt]).forEach(key => {
        const text = lang[opt][key];
        document.querySelectorAll('[data-lang="' + key + '"]').forEach(el => {
          el.innerHTML = text;
        });
    });
    if (opt == 'es') {
        btn.setAttribute('data-opt', 'en');
    } else {
        btn.setAttribute('data-opt', 'es');
    }
    localStorage.setItem('lang', opt);
}

const btn = document.getElementById('langBtn');

let lang = {
    es: {
        title: "Hola",
        languaje: "Cambiar idioma",
        in:"Inicio",

        vision:"y como futura Ingeniera en Sistemas y Redes Informáticas, estoy entusiasmada por la oportunidad de aprender y crecer como profesional, me apasiona la tecnología y su evolución constante, mi pasión se centra en el desarrollo de software, con un enfoque particular en el área de QA-Testing",
        nom:"¡Hola! Mi nombre es",
        s:"Sobre Mi",
        info:"Estoy buscando oportunidades para aplicar mis habilidades y conocimientos en el desarrollo de proyectos innovadores. Me entusiasma trabajar en colaboración con otros profesionales y aprender de ellos. Creo firmemente que el trabajo en equipo y la colaboración son claves para alcanzar resultados excelentes.<br>Estoy comprometida en mejorar mis habilidades técnicas para lograr un impacto positivo en la sociedad.",
        des:"Descargar CV",
        valor:"Valores profeccionales",
        1:"Ética",
        2:"Responsabilidad",
        3:"Respeto",
        4:"Compromiso",
        5:"Empatía",
        6:"Honestidad",


        11:"Habilidades duras",
        22:"Conocimientos en metodologías de desarrollo de software KANBAN,DESING SPRINT ,Scrum y PMI",
        33:"Principios de UI/UX",
        44:"Gestión de proyectos y liderazgo de equipos en entorno educativo",
        55:"Diseño de tipologías de red",

        habil:"Habilidades blandas",
        habil1:"Gestión del tiempo",
        habil2:"Trabajo en equipo",
        habil3:"Paciencia",
        habil4:"Adaptabilidad",
        habil5:"Responsabilidad",
        habil6:"Escucha activa",

        obj:"Objetivo",
        obj1:"Aplicar mis habilidades, colaborar con equipos interdisciplinarios en proyectos desafiantes para seguir aprendiendo y mejorando mis habilidades",

        proyec:"Proyectos",
        p1:"Easy Price",
        p2:"Aplicación web desarrollada en entorno educativo, su función principal es de comparar precios de los comercios más cercanos de la localidad del usuario, con filtros de búsqueda basados en variables de búsqueda que el usuario puede modificar a lo que mejor se adapte",
        p3:"Desarrollado por: Duma Mejía ,José Maravilla, Roberto Meléndez, Roger Zelaya y Flor Ariza.",
        p4:"Rol desempeñado: QA/Tester",
        p5:"Entorno de desarrollo: Visual Studio",
        p6:"Año de creación: 2022",


        a:"Esta aplicación móvil fue desarrollada en un entorno educativo, su función principal es registrar pedidos de un restaurante mediante un usuario previamente registrado",
        a1:"Desarollada por: Roger Zelaya, Allison Sosa, Elmer Reyes , Flor Ariza",
        a2:"Rol desempeñado: Desarrollador front-end",
        a3:"Entorno de desarrollo:  Android Studio",
        a4:"Año de creación: 2021",

        co:"Correo",
        333:"Todos los derecho​​s reservados - 2023",
        contac:"Contacto",
        in8i:"Inicio",
        ini:"Sobre Mi",
        sob:"Proyectos",
        conts:"Contacto",
        esp:"Proyectos",
        contactme: "Contactame",
        subject: "Asunto",
        send: "Enviar Correo",
    },
    en: {
        title: "Hello",
        languaje: "Change languaje",
        vision:"and as future Systems Engineering and Computer Networks, I am excited for the opportunity to learn and grow as a professional, I am passionate about technology and its constant evolution, my passion is focused on software development, with a particular focus on the area of ​​QA-Testing.",
        nom:"Hello! My name is",
        in:"Home",
        sob:"About me",
        info:"I am looking for opportunities to apply my skills and knowledge in the development of innovative projects. I am excited to work collaboratively with other professionals and learn from them. I firmly believe that teamwork and collaboration are key to achieving excellent results.<br>I am committed to improving my technical skills to achieve a positive impact on society.",
        des:"Download CV",
        valor:"Professional values",
        1:"Ethics",
        2:"Responsibility",
        3:"Respect",
        4:"Commitment",
        5:"Empathy",
        6:"Honesty",

        11:"Hard skills",
        22:"Knowledge of software development methodologies KANBAN, DESING SPRINT, Scrum and PMI",
        33:"UI/UX principles",
        44:"Project management and team leadership in an educational environment",
        55:"Design of red typologies",

        
        
        habil:"Soft skills",
        habil1:"Time management",
        habil2:"Teamwork",
        habil3:"Patience",
        habil4:"Adaptability",
        habil5:"Responsibility",
        habil6:"Active listening",


        obj:"Aim",
        obj1:"Apply my skills, collaborate with interdisciplinary teams on challenging projects to keep learning and improving my abilities",
        
        proyec:"Projects",
        p1:"Easy Price",
        p2:"Web application developed in an educational environment, its main function is to compare prices of the shops closest to the user's location, with search filters based on search variables that the user can modify to what best suits them",
        p3:"Developed by: Duma Mejía, José Maravilla, Roberto Meléndez, Roger Zelaya and Flor Ariza.",
        p4:"Role performed: QA/Tester",
        p5:"Development environment: Visual Studio",
        p6:"Creation year: 2022",

        a:"This mobile application was developed in an educational environment, its main function is to register orders from a restaurant through a previously registered user",
        a1:"Developed by: Roger Zelaya, Allison Sosa, Elmer Reyes, Flor Ariza",
        a2:"Role performed: Front-end developer",
        a3:"Development environment: Android Studio",
        a4:"Year created: 2021",

        co:"Mail",
        333:"All rights reserved - 2023",
        conta:"Contact",
        in8i:"Home",
        esp:"Projets",
        ini:"About me",
        s:"About me",
        conts:"Contact",
        contactme: "Contact me",
        subject: "Subject",
        send: "Send Email",
    },
}

btn.addEventListener('click', function () {
    let opt = btn.getAttribute('data-opt')
    currentLang = opt;
    cambiarIdioma(opt);
});

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'es');
    currentLang = 'es';
    cambiarIdioma('es');
} else {
    currentLang = localStorage.getItem('lang');
    cambiarIdioma(localStorage.getItem('lang'));
}