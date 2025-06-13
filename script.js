document.addEventListener('DOMContentLoaded', function() {
    // Données des projets
    const projects = [
        {
            title: "Site E-commerce",
            description: "Un site e-commerce complet avec panier d'achat et paiement en ligne.",
            image: "siteecommerce.png",
            tags: ["HTML", "CSS", "JavaScript", "PHP"]
        },
        {
            title: "Application Météo",
            description: "Application météo utilisant une API pour afficher les prévisions.",
            image: "meteo.png",
            tags: ["JavaScript", "API", "CSS"]
        },
        {
            title: "Portfolio Artistique",
            description: "Portfolio pour un artiste local avec galerie interactive.",
            image: "portfolioart.png",
            tags: ["HTML", "CSS", "JavaScript"]
        }
    ];

    // Données des compétences
    const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript",  level: 80 },
        { name: "React", level: 70 },
        { name: "Node.js", level: 65 },
        { name: "UI/UX Design", level: 75 }
    ];

    // Afficher les projets
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });

    // Afficher les compétences
    const skillsContainer = document.querySelector('.skills-container');
    
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        
        skillItem.innerHTML = `
            <h3>${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-level" style="width: ${skill.level}%"></div>
            </div>
            <span>${skill.level}%</span>
        `;
        
        skillsContainer.appendChild(skillItem);
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const name = this.elements[0].value;
        const email = this.elements[1].value;
        const message = this.elements[2].value;
        
        // Ici, vous pourriez ajouter une logique pour envoyer le message
        console.log({ name, email, message });
        
        // Afficher un message de succès
        alert('Merci pour votre message! Je vous répondrai dès que possible.');
        
        // Réinitialiser le formulaire
        this.reset();
    });

    // Animation au défilement
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Animation de la barre de navigation
        if (scrollPosition > 100) {
            document.querySelector('header').style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            document.querySelector('header').style.boxShadow = 'none';
        }
        
        // Animation des éléments de la section compétences
        const skillsSection = document.querySelector('.skills');
        const skillsPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (skillsPosition < screenPosition) {
            document.querySelectorAll('.skill-level').forEach(bar => {
                bar.style.width = bar.style.width; // Déclenche l'animation
            });
        }
    });
});