document.addEventListener('DOMContentLoaded', function() {

    const links = document.querySelectorAll('.navbar a');

    const sections = document.querySelectorAll('section');
 
    links.forEach(link => {

        link.addEventListener('click', function(event) {

            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            sections.forEach(section => {

                if (section.id === targetId) {

                    section.classList.remove('hidden');

                    section.scrollIntoView({ behavior: 'smooth' });

                } else {

                    section.classList.add('hidden');

                }

            });

            links.forEach(link => link.classList.remove('active'));

            this.classList.add('active');

        });

    });

});
