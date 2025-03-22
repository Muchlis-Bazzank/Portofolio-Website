 //Navigasi Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Navigasi Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Animasi Skill Bars
        function animateSkills() {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
            });
        }

        // Jalankan animasi saat section tentang terlihat
        const aboutSection = document.querySelector('.about');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(aboutSection);

        // Testimonial Slider
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const testimonialNavItems = document.querySelectorAll('.testimonial-nav-item');
        let currentSlide = 0;

        testimonialNavItems.forEach(item => {
            item.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-slide'));
                setActiveSlide(slideIndex);
            });
        });

        function setActiveSlide(index) {
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            testimonialNavItems.forEach(item => item.classList.remove('active'));
            
            testimonialSlides[index].classList.add('active');
            testimonialNavItems[index].classList.add('active');
            currentSlide = index;
        }

        // Auto slide testimonial
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            setActiveSlide(currentSlide);
        }, 5000);

        // Form Submission
        const contactForm = document.getElementById('contact-form');
        const formMessage = document.getElementById('form-message');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulasi pengiriman form
            formMessage.textContent = 'Pesan Anda berhasil terkirim! Saya akan menghubungi Anda segera.';
            formMessage.classList.add('success');
            
            // Reset form
            contactForm.reset();
            
            // Sembunyikan pesan setelah beberapa detik
            setTimeout(() => {
                formMessage.classList.remove('success');
            }, 5000);
        });