$(function(){
    function buildmessage(message){
        var html = `<div class="message">
                        ${message.content}
                        <div class="upper-message__user-name">
                        ${message.user_name}
                        </div>
                        <div class="upper-message__date">
                        ${message.date}
                        </div>
                        <img class="lower-message__image" src="${message.image}" alt="Dsc01746 2">
                    </div>`
        return html;
    }
    $('#new_message').on('submit', function(e){
        e.preventDefault();
        var formData = new FormData(this);
        var url = $(this).attr('action');
        var href
        $.ajax({
            url: url,
            type: "POST",
            data: formData,
            dataType: 'json',
            processData: false,
            contentType:false
        })
        .done(function(message){
            var html = buildmessage(message);
            $('.messages').append(html)
            $('#new_message')[0].reset();
            $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        })
        .fail(function(){
            alert('error');
        })
        .always(function(data){
            $('.form__submit').prop('disabled', false);　//ここで解除している
        })
    })
})