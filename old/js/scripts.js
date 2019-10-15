initFormSend();
initPhoneMasks();

function initFormSend() {
    $('form').submit(function(e) {
        e.preventDefault();
        var form = $(this);
        var btn = form.find('input[type="submit"]');

        const result = '<div class="result"><h4>Спасибо!</h4><p>Ваша заявка отправлена.<br>Мы свяжемся с Вами в ближайшее время.</p></div>';

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
    var inputs = document.querySelectorAll('input[type="tel"]');
    inputs.forEach(function (input) {
        var phoneMask = IMask(input, {
                mask: '+{7}(000)000-00-00'
            });
    });
}