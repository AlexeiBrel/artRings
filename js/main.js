$('.user').on('click', () => {
    $('.auto__form').removeClass('hidden');
    $('body').addClass('lock');
})

$('#singUp').on('click', () => {
    $('.auto__form').addClass('hidden');
    $('body').addClass('lock');
    setTimeout(() => { $('.reg__form').removeClass('hidden'); }, 300);
    
})

$('.btnEntrance').on('click', () => {
    $('.auto__form').removeClass('hidden');
    $('body').addClass('lock');
})

function closeForm(elem, elemClose, e) {
    let target = e.target;
    if (!target.closest(elem)) {
        $(elemClose).addClass('hidden')
        document.body.classList.remove('lock');
    }
}

$('.auto__form').on('click', (e) => {
    closeForm('.auto__body', '.auto__form', e);
})

$('.reg__form').on('click', (e) => {
    closeForm('.reg__body', '.reg__form', e);
})


$('.cart').on('click', () => {
    $('.card__content').toggleClass('active');
})