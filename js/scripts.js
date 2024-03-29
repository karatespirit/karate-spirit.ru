prepareModals();
initBurgerClick();
initMapPicking();
initFormSend();
initPhoneMasks();
initScrollTo();

function initFormSend() {
    $('form').submit(function(e) {
        e.preventDefault();
        const form = $(this);
        const btn = form.find('input[type="submit"]');

        const result = '<div class="form__result"><h4>Спасибо!</h4><p>Ваша заявка отправлена.<br>Мы свяжемся с Вами в ближайшее время.</p></div>';

        $.ajax({
            url: form.attr('action'),
            data: form.serialize(),
            type: "POST",
            dataType: "xml",
            beforeSend: function(){
                btn.attr('disabled');
            },
            statusCode: {
                0: function (){
                    form.html(result);
                },
                200: function (){
                    form.html(result);
                }
            }
        });
    });
}

function initPhoneMasks() {
    const inputs = document.querySelectorAll('input[type="tel"]');
    inputs.forEach(function (input) {
        IMask(input, {
            mask: '+{7}(000) 000-00-00'
        });
    });
}

function initBurgerClick () {
    $('.navigation__burger').on('click', function () {
        $(this).toggleClass('icon-cancel-circled');
        $(this).toggleClass('icon-menu');
        $('.navigation__list').slideToggle();
    })
}

function prepareModals() {
    const $body = $('body');
    $('[data-fancybox="modal"]').each(function (index) {
        const img = '<img src="'+$(this).find('.reviews__photo').attr('src')+'" class="modal-review__img" alt="Фото ученика">';
        const name = '<h2 hidden>'+$(this).find('.reviews__name').text()+'</h2>';
        const left = '<div class="modal-review__left">'+img+name+'</div>';

        const caption = '<p class="modal-review__caption">'+$(this).find('.reviews__caption').text()+'</p>';
        const text = '<p class="modal-review__text">'+$(this).find('.reviews__text').text()+'</p>';
        const right = '<div class="modal-review__right">'+text+caption+'</div>';

        const id = 'modal-review-'+(index+1);

        $(this).attr('href', '#'+id);
        $body.append('<div class="modal-review" id="'+id+'" hidden>'+left+right+'</div>')
    });
}

function initMapPicking() {
    $('.maps__tab').on('click', function (e) {
        e.preventDefault();

        $('#map').attr('src', $(this).attr('data-map'));
        $('.maps__address').html($(this).find('.maps__tab-address').html());

        const $prevActiveTab = $('.maps__tab_active');
        $prevActiveTab.toggleClass('maps__tab_active');
        $(this).toggleClass('maps__tab_active');
    })
}

function initScrollTo() {
    $(".scrollTo").on('click', function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $($(this).attr('href')).offset().top - 20
        }, 1000);
    });
}

function initSlider(slider, options) {
    slider.after('<div class="slick-nav"></div>');
    const slickOptions = {
        infinite: false,
        slidesToShow: 1,
        adaptiveHeight: true,
        dots: true,
        appendDots: slider.next('.slick-nav'),
        appendArrows: slider.next('.slick-nav'),
        swipeToSlide: true,
        mobileFirst: true
    };

    slider.slick($.extend({}, slickOptions, options));
}

$(function () {
    initSlider($('.results-list'), {
        infinite: true,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });
});
$(function () {
    initSlider($('.reasons__list'), {
        infinite: true,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });
});
$(function () {
    initSlider($('.advantages__list'), {
        infinite: true,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 6,
                }
            }
        ]
    });
});

$(function () {
    initSlider($('.reviews__list'), {
        infinite: true,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });
});