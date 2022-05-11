let button = $('.main__btn')

$(window).scroll(function() {
    if ($(window).scrollTop() >= 400) {
        button.addClass('show')
    } else {
        button.removeClass('show')
    }
})

button.on('click', function(e) {
    e.preventDefault()
    $('html, body').animate({scrollTop: 0}, '300')
})