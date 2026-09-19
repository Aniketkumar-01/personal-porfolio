document.addEventListener('DOMContentLoaded', () => {
    // 1. Populate Hero Section
    const heroContainer = document.getElementById('hero-container');
    if (portfolioData.personalInfo) {
        const info = portfolioData.personalInfo;
        heroContainer.innerHTML = `
            <img src="assets/my pfp.jpg" alt="Profile Picture" class="profile-pic" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-bottom: 1rem; border: 2px solid var(--border-color);">
            <span class="greeting">Hi, my name is</span>
            <h1 class="name">${info.name}</h1>
            <p class="tagline">${info.tagline}</p>
            <p class="about-text">${info.about}</p>
            <div class="social-links" style="margin-top: auto;">
                ${info.linkedin ? `<a href="${info.linkedin}" target="_blank" class="social-icon" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>` : ''}
                ${info.github ? `<a href="${info.github}" target="_blank" class="social-icon" aria-label="GitHub"><i class="fab fa-github"></i></a>` : ''}
                ${info.email ? `<a href="https://mail.google.com/mail/?view=cm&fs=1&to=${info.email}" target="_blank" class="social-icon" aria-label="Email"><i class="fas fa-envelope"></i></a>` : ''}
            </div>
            <a href="Aniket_Kumar_Resume.pdf" class="btn btn-primary" style="align-self: flex-start;" target="_blank" rel="noopener noreferrer">View Resume</a>
        `;
    }

    // Populate Contact Section
    const contactContainer = document.getElementById('contact-container');
    if (contactContainer && portfolioData.personalInfo) {
        const info = portfolioData.personalInfo;
        contactContainer.innerHTML = `
            ${info.email ? `<a href="https://mail.google.com/mail/?view=cm&fs=1&to=${info.email}" target="_blank" class="btn contact-btn" style="margin-bottom: 0.8rem;"><img src="assets/gmail.png" alt="Email"> Email Me</a>` : ''}
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem;">
                ${info.linkedin ? `<a href="${info.linkedin}" target="_blank" class="btn contact-btn"><img src="assets/linkedin.png" alt="LinkedIn"> LinkedIn</a>` : ''}
                ${info.github ? `<a href="${info.github}" target="_blank" class="btn contact-btn"><img src="assets/github.png" alt="GitHub"> GitHub</a>` : ''}
            </div>
            <a href="Aniket_Kumar_Resume.pdf" target="_blank" class="btn contact-btn" style="margin-top: 0.8rem;"><img src="assets/pdf.png" alt="Resume"> Resume</a>
        `;
    }

    // 2. Populate Experience Section
    const expContainer = document.getElementById('experience-container');
    if (portfolioData.experience && portfolioData.experience.length > 0) {
        expContainer.innerHTML = portfolioData.experience.map(exp => `
            <div class="timeline-item">
                ${exp.image ? `<img src="${exp.image}" alt="Experience Banner" class="project-banner" style="width: 100%; height: auto; display: block; border-radius: 4px; margin-bottom: 1.5rem; border: 1px dashed var(--border-color);">` : ''}
                <div class="item-header">
                    <div>
                        <h4 class="item-title">
                            ${exp.role}
                            ${exp.link && exp.link !== '#' ? `<a href="${exp.link}" target="_blank" aria-label="Project Link" style="margin-left: 8px; color: var(--text-secondary); font-size: 0.9rem;"><i class="fas fa-external-link-alt"></i></a>` : ''}
                        </h4>
                        <span class="item-subtitle">${exp.company}</span>
                    </div>
                    <span class="item-date">${exp.duration}</span>
                </div>
                <div class="item-details">
                    <ul>
                        ${exp.description.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    } else {
        expContainer.innerHTML = '<p>No experience listed yet.</p>';
    }

    // 3. Populate Education Section
    const eduContainer = document.getElementById('education-container');
    if (portfolioData.education && portfolioData.education.length > 0) {
        eduContainer.innerHTML = portfolioData.education.map(edu => `
            <div class="timeline-item">
                <div class="item-header">
                    <div>
                        <h4 class="item-title">${edu.degree}</h4>
                        <span class="item-subtitle">${edu.institution}</span>
                    </div>
                    <span class="item-date">${edu.duration}</span>
                </div>
                <div class="item-details">
                    <p>CGPA: <strong>${edu.cgpa}</strong></p>
                </div>
            </div>
        `).join('');
    }

    // 4. Populate Projects Section
    const projContainer = document.getElementById('projects-container');
    if (portfolioData.projects && portfolioData.projects.length > 0) {
        projContainer.innerHTML = portfolioData.projects.map(proj => `
            <div class="project-card">
                ${proj.image ? `<img src="${proj.image}" alt="Project Banner" class="project-banner" style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; display: block; border-radius: 4px; margin-bottom: 1.5rem; border: 1px dashed var(--border-color);">` : ''}
                <div class="item-header" style="flex-wrap: nowrap; gap: 1rem;">
                    <h4 class="item-title" style="flex: 1;">${proj.title}</h4>
                    <div class="project-links" style="margin-bottom: 0; flex-shrink: 0;">
                        ${proj.link !== '#' ? `<a href="${proj.link}" target="_blank" aria-label="Live Demo"><i class="fas fa-external-link-alt"></i></a>` : ''}
                        ${proj.github !== '#' ? `<a href="${proj.github}" target="_blank" aria-label="GitHub Repo"><i class="fab fa-github"></i></a>` : ''}
                    </div>
                </div>
                <div class="item-details">
                    <ul>
                        ${proj.description.map(desc => `<li>${desc}</li>`).join('')}
                    </ul>
                </div>
                <div class="tech-stack">
                    ${proj.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // 4.5 Populate Certifications Section
    const certContainer = document.getElementById('certifications-container');
    if (certContainer && portfolioData.certifications && portfolioData.certifications.length > 0) {
        certContainer.innerHTML = portfolioData.certifications.map(cert => `
            <div class="timeline-item">
                <div class="item-header" style="margin-bottom: 0;">
                    <div>
                        <h4 class="item-title" style="margin-bottom: 0.3rem;">
                            ${cert.title}
                            ${cert.link && cert.link !== '#' ? `<a href="${cert.link}" target="_blank" aria-label="Credential Link" style="margin-left: 8px; color: var(--text-secondary); font-size: 0.9rem;"><i class="fas fa-external-link-alt"></i></a>` : ''}
                        </h4>
                        <span class="item-subtitle">${cert.issuer}</span>
                    </div>
                    <span class="item-date">${cert.date}</span>
                </div>
            </div>
        `).join('');
    }

    // 5. Populate Skills Section
    const skillsContainer = document.getElementById('skills-container');
    if (portfolioData.skills) {
        // Flatten all skills into a single array
        let allSkills = [];
        Object.values(portfolioData.skills).forEach(skillsArray => {
            allSkills = allSkills.concat(skillsArray);
        });

        const skillIcons = {
            'Python': 'assets/python.png',
            'HTML': 'assets/html.png',
            'CSS': 'assets/css.png',
            'JavaScript': 'assets/js.png',
            'Git & GitHub': 'assets/github.png',
            'Streamlit': 'assets/Streamlit.png'
        };

        skillsContainer.innerHTML = allSkills.map(skill => {
            const iconPath = skillIcons[skill];
            return `<span class="skill-tag" style="display: inline-flex; align-items: center; line-height: 1;">${iconPath ? `<img src="${iconPath}" alt="${skill}" style="width: 16px; height: 16px; margin-right: 6px; object-fit: contain;">` : ''}${skill}</span>`;
        }).join('');
    }

    // Current Year for Footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Intersection Observer for fade-in animations
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // --- Neural Network Background Animation ---
    const canvas = document.getElementById('neural-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        let particles = [];
        const properties = {
            particleColor: 'rgba(255, 255, 255, 0.4)',
            lineColor: 'rgba(255, 255, 255, 0.15)',
            particleAmount: Math.floor((width * height) / 15000), // Responsive amount
            defaultRadius: 1.2,
            variantRadius: 1,
            defaultSpeed: 0.2,
            variantSpeed: 0.2,
            linkRadius: 130,
        };

        let mouse = { x: null, y: null };
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.speed = properties.defaultSpeed + Math.random() * properties.variantSpeed;
                this.directionAngle = Math.floor(Math.random() * 360);
                this.color = properties.particleColor;
                this.radius = properties.defaultRadius + Math.random() * properties.variantRadius;
                this.vector = {
                    x: Math.cos(this.directionAngle) * this.speed,
                    y: Math.sin(this.directionAngle) * this.speed
                };
            }
            update() {
                this.border();
                this.x += this.vector.x;
                this.y += this.vector.y;
            }
            border() {
                if (this.x >= width || this.x <= 0) {
                    this.vector.x *= -1;
                }
                if (this.y >= height || this.y <= 0) {
                    this.vector.y *= -1;
                }
                if (this.x > width) this.x = width;
                if (this.y > height) this.y = height;
                if (this.x < 0) this.x = 0;
                if (this.y < 0) this.y = 0;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        function setup() {
            particles = [];
            for (let i = 0; i < properties.particleAmount; i++) {
                particles.push(new Particle());
            }
        }

        function drawLines() {
            let x1, y1, x2, y2, length, opacity;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    x1 = particles[i].x;
                    y1 = particles[i].y;
                    x2 = particles[j].x;
                    y2 = particles[j].y;
                    length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                    if (length < properties.linkRadius) {
                        opacity = 1 - length / properties.linkRadius;
                        ctx.lineWidth = 0.5;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.25})`;
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.closePath();
                        ctx.stroke();
                    }
                }
                // Mouse interaction
                if (mouse.x && mouse.y) {
                    x1 = particles[i].x;
                    y1 = particles[i].y;
                    x2 = mouse.x;
                    y2 = mouse.y;
                    length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                    if (length < properties.linkRadius * 1.5) {
                        opacity = 1 - length / (properties.linkRadius * 1.5);
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.closePath();
                        ctx.stroke();
                    }
                }
            }
        }

        function loop() {
            requestAnimationFrame(loop);
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            drawLines();
        }

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            properties.particleAmount = Math.floor((width * height) / 15000);
            setup();
        });

        setup();
        loop();
    }
});
