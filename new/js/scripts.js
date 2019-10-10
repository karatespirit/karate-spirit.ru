initBurgerClick();

function initBurgerClick () {
    $('.navigation__burger').on('click', function () {
        $(this).toggleClass('icon-cancel-circled');
        $(this).toggleClass('icon-menu');
        $('.navigation__list').slideToggle();
    })
}