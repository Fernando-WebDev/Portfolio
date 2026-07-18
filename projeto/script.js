
        // Smooth scrolling
        document.querySelectorAll('a[href^="#]').forEach(anchor => {
            anchor.addEventListener('click', funtion (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });