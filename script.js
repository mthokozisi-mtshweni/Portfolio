/*let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
} 


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active');
}*/

/*
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Scroll spy functionality
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });
};

// Mobile menu toggle
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Hire Me Modal
const hireBtn = document.getElementById('hireBtn');
const hireModal = document.getElementById('hireModal');
const closeModal = document.querySelector('.close-modal');
const closeModalBtn = document.querySelector('.close-modal-btn');

if (hireBtn) {
    hireBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hireModal.style.display = 'block';
    });
}

function closeModalFunction() {
    hireModal.style.display = 'none';
}

if (closeModal) {
    closeModal.addEventListener('click', closeModalFunction);
}
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModalFunction);
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === hireModal) {
        closeModalFunction();
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!fullName || !email || !subject || !message) {
            showFormStatus('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormStatus('Please enter a valid email address.', 'error');
            return;
        }
        
        // Create mailto link
        const mailtoLink = `mailto:mthosbudah03@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
        )}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showFormStatus('Opening your email client... Thank you for reaching out!', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Clear status after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    });
}

function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
    formStatus.style.display = 'block';
    
    // Auto hide after 5 seconds for success
    if (type === 'success') {
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
}

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fix for the education section typo (already fixed in HTML)
// Add active class to navbar on scroll
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
*/

/*
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Scroll spy functionality
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });
};

// Mobile menu toggle
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Hire Me Modal
const hireBtn = document.getElementById('hireBtn');
const hireModal = document.getElementById('hireModal');
const closeModal = document.querySelector('.close-modal');
const closeModalBtn = document.querySelector('.close-modal-btn');

if (hireBtn) {
    hireBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hireModal.style.display = 'block';
    });
}

function closeModalFunction() {
    hireModal.style.display = 'none';
}

if (closeModal) {
    closeModal.addEventListener('click', closeModalFunction);
}
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModalFunction);
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === hireModal) {
        closeModalFunction();
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!fullName || !email || !subject || !message) {
            showFormStatus('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormStatus('Please enter a valid email address.', 'error');
            return;
        }
        
        // Create mailto link
        const mailtoLink = `mailto:mthosbudah03@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
        )}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showFormStatus('Opening your email client... Thank you for reaching out!', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Clear status after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    });
}

function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
    formStatus.style.display = 'block';
    
    // Auto hide after 5 seconds for success
    if (type === 'success') {
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
}

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navbar on scroll
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

*/
/*
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if(activeLink) {
                    activeLink.classList.add('active');
                }
            })
        }
    })
} 

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active');
}

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Hire Me Modal
const hireBtn = document.getElementById('hireBtn');
const hireModal = document.getElementById('hireModal');
const closeModal = document.querySelector('.close-modal');
const closeModalBtn = document.querySelector('.close-modal-btn');

if (hireBtn) {
    hireBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hireModal.style.display = 'block';
    });
}

function closeModalFunction() {
    hireModal.style.display = 'none';
}

if (closeModal) {
    closeModal.addEventListener('click', closeModalFunction);
}
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModalFunction);
}

window.addEventListener('click', (e) => {
    if (e.target === hireModal) {
        closeModalFunction();
    }
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (!fullName || !email || !subject || !message) {
            formStatus.style.display = 'block';
            formStatus.style.backgroundColor = 'rgba(255,0,0,0.2)';
            formStatus.style.color = '#ff4444';
            formStatus.style.border = '1px solid #ff4444';
            formStatus.innerHTML = 'Please fill in all required fields.';
            setTimeout(() => { formStatus.style.display = 'none'; }, 3000);
            return;
        }
        
        const mailtoLink = `mailto:mthosbudah03@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
        )}`;
        
        window.location.href = mailtoLink;
        
        formStatus.style.display = 'block';
        formStatus.style.backgroundColor = 'rgba(0,255,0,0.2)';
        formStatus.style.color = '#00ff00';
        formStatus.style.border = '1px solid #00ff00';
        formStatus.innerHTML = 'Opening your email client... Thank you!';
        
        contactForm.reset();
        
        setTimeout(() => { formStatus.style.display = 'none'; }, 5000);
    });
}

// ========== FOOTER FUNCTIONALITY ==========

// Smooth scrolling for footer links
document.querySelectorAll('.footer ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        if (targetId && targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Update active link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const footerLinks = document.querySelectorAll('.footer ul li a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = '#' + section.getAttribute('id');
        }
    });
    
    footerLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
});

// Open social links in new tab
document.querySelectorAll('.footer .social a').forEach(socialLink => {
    socialLink.addEventListener('click', function(e) {
        if (this.getAttribute('href') && this.getAttribute('href') !== '#') {
            e.preventDefault();
            window.open(this.getAttribute('href'), '_blank');
        }
    });
});

*/

// Wait for DOM to load first
document.addEventListener('DOMContentLoaded', function() {
    
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    // Scroll spy functionality
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height){
                navLinks.forEach(links =>{
                    links.classList.remove('active');
                    let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                    if(activeLink) {
                        activeLink.classList.add('active');
                    }
                })
            }
        })
    } 

    // Mobile menu toggle
    if(menuIcon) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x'); 
            navbar.classList.toggle('active');
        }
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(menuIcon) menuIcon.classList.remove('bx-x');
            if(navbar) navbar.classList.remove('active');
        });
    });

    // ========== HIRE ME MODAL ==========
    const hireBtn = document.getElementById('hireBtn');
    const hireModal = document.getElementById('hireModal');
    const closeModal = document.querySelector('.close-modal');
    const closeModalBtn = document.querySelector('.close-modal-btn');

    if (hireBtn) {
        hireBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if(hireModal) hireModal.style.display = 'block';
        });
    }

    function closeModalFunction() {
        if(hireModal) hireModal.style.display = 'none';
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunction);
    }
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModalFunction);
    }

    window.addEventListener('click', (e) => {
        if (e.target === hireModal) {
            closeModalFunction();
        }
    });

    // ========== CONTACT FORM HANDLER ==========
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!fullName || !email || !subject || !message) {
                if(formStatus) {
                    formStatus.style.display = 'block';
                    formStatus.style.backgroundColor = 'rgba(255,0,0,0.2)';
                    formStatus.style.color = '#ff4444';
                    formStatus.style.border = '1px solid #ff4444';
                    formStatus.innerHTML = 'Please fill in all required fields.';
                    setTimeout(() => { formStatus.style.display = 'none'; }, 3000);
                }
                return;
            }
            
            const mailtoLink = `mailto:mthosbudah03@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
            )}`;
            
            window.location.href = mailtoLink;
            
            if(formStatus) {
                formStatus.style.display = 'block';
                formStatus.style.backgroundColor = 'rgba(0,255,0,0.2)';
                formStatus.style.color = '#00ff00';
                formStatus.style.border = '1px solid #00ff00';
                formStatus.innerHTML = 'Opening your email client... Thank you!';
            }
            
            contactForm.reset();
            
            setTimeout(() => { if(formStatus) formStatus.style.display = 'none'; }, 5000);
        });
    }

        // ========== DOCUMENT DOWNLOAD LINKS ==========
    // Replace these URLs with your actual Google Drive or hosting links
    // const documentLinks = {
    //     cv: "https://drive.google.com/your-cv-link",           // Replace with your CV PDF
    //     id: "https://drive.google.com/your-id-link",           // Replace with your ID copy
    //     transcript: "https://drive.google.com/your-transcript-link", // Replace with academic transcript
    //     matric: "https://drive.google.com/your-matric-link",    // Replace with matric certificate
    //     wil: "https://drive.google.com/your-wil-link"           // Replace with WIL letter
    // };

        const documentLinks = {
        cv: "https://drive.google.com/uc?export=download&id=Mthokozisi_Mtshweni_CV",
        id: "https://drive.google.com/uc?export=download&id=YOUR_ID_FILE_ID",
        transcript: "https://drive.google.com/uc?export=download&id=YOUR_ACADEMIC_FILE_ID",
        matric: "https://drive.google.com/uc?export=download&id=YOUR_MATRIC_FILE_ID",
        wil: "https://drive.google.com/uc?export=download&id=YOUR_WIL_FILE_ID"
    };
    
    // Set up click handlers for each document link
    const cvLink = document.getElementById('cvLink');
    const idLink = document.getElementById('idLink');
    const transcriptLink = document.getElementById('transcriptLink');
    const matricLink = document.getElementById('matricLink');
    const wilLink = document.getElementById('wilLink');
    
    if (cvLink) {
        cvLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (documentLinks.cv && documentLinks.cv !== "#") {
                window.open(documentLinks.cv, '_blank');
            } else {
                alert("CV document will be uploaded soon. Please email me directly.");
            }
        });
    }
    
    if (idLink) {
        idLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (documentLinks.id && documentLinks.id !== "#") {
                window.open(documentLinks.id, '_blank');
            } else {
                alert("ID document will be uploaded soon. Please email me directly.");
            }
        });
    }
    
    if (transcriptLink) {
        transcriptLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (documentLinks.transcript && documentLinks.transcript !== "#") {
                window.open(documentLinks.transcript, '_blank');
            } else {
                alert("Academic transcript will be uploaded soon. Please email me directly.");
            }
        });
    }
    
    if (matricLink) {
        matricLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (documentLinks.matric && documentLinks.matric !== "#") {
                window.open(documentLinks.matric, '_blank');
            } else {
                alert("Matric certificate will be uploaded soon. Please email me directly.");
            }
        });
    }
    
    if (wilLink) {
        wilLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (documentLinks.wil && documentLinks.wil !== "#") {
                window.open(documentLinks.wil, '_blank');
            } else {
                alert("WIL letter will be uploaded soon. Please email me directly.");
            }
        });
    }

    // ========== FOOTER FUNCTIONALITY ==========
    // Smooth scrolling for footer links
    document.querySelectorAll('.footer ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Open social links in new tab
    document.querySelectorAll('.footer .social a').forEach(socialLink => {
        socialLink.addEventListener('click', function(e) {
            if (this.getAttribute('href') && this.getAttribute('href') !== '#') {
                e.preventDefault();
                window.open(this.getAttribute('href'), '_blank');
            }
        });
    });
    
}); // End of DOMContentLoaded
