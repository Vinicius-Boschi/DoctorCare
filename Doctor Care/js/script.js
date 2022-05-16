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

$(".navbar__bars").click(function() {
    $(this).toggleClass("active") 
    $(".body").toggleClass("active")
    $(".navbar__list").toggleClass("active")
    $(".navbar__button").toggleClass("active")
})