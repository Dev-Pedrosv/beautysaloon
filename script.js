// abre e fecha o menu quando clicar o icone


const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("nav .toggle")


for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })

};

// quado clicar em um item do menu, escoder o menu

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
};

// mudar o header da pagina quando der scroll 
const header = document.querySelector("header")
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {


    if (window.scrollY >= navHeight) {

        header.classList.add('scroll')

    } else {
        header.classList.remove('scroll')

    }
};



//Testimonials em slider
const swiper = new Swiper('.swiper', {
    slidesPerview: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,

});

//ScrolReveal: Mostrar elementos quando der scroll na pagina 

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
});

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    
    `,
    { interval: 100 },
);


// Menu ativo conforme a seção visivel na pagina
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')

        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')

        }
    }


}

// Botao voltar para o topo
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {

    if (window.scrollY >= 580) {

        backToTopButton.classList.add('show')

    } else {
        backToTopButton.classList.remove('show')

    }
}



window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
});

