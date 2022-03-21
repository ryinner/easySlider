// Init
slider()

// Init function
function slider() {
    // Variables
    const slides = document.querySelectorAll('.slide-container')
    const dots = document.querySelectorAll('.slider-dots__btn')
    const left = document.querySelector('.slider__controll-left')
    const right = document.querySelector('.slider__controll-right')
    // Events to button
    dots.forEach((item) => {
        item.addEventListener('click', () => {
            const id = item.getAttribute('data-id')
            checkSlide(slides, id)
        })
    })
    // Left button
    left.addEventListener('click', () => {
        const id = document.querySelector('.active').getAttribute('data-id')-1
        checkSlide(slides ,id)
    })
    // Right button
    right.addEventListener('click', () => {
        const id = +document.querySelector('.active').getAttribute('data-id')+1
        checkSlide(slides ,id)
    })
}

// Checker number of slide
function checkSlide(slides, id) {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    switch (id) {
        case 0:
            id = slides.length
            break;
    
        default:
            if (id > slides.length) {
                id = 1
            }
            break;
    }
    document.querySelector('.slide-container[data-id="'+ id +'"]').classList.add('active')
}