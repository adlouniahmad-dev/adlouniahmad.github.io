$(document).on('scroll', () => {
    if ($(document).scrollTop() > 0) {
        $('#header').addClass('shrink');
    } else {
        $('#header').removeClass('shrink');
    }
});