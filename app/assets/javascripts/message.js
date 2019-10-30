$(function(){
    function buildmessage(message){
        var html = `<div class="message">
                        ${message.content}
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
            $('#message_content').val('')
        })
        .fail(function(){
            alert('error');
        })
        .always(function(data){
            $('.form__submit').prop('disabled', false);　//ここで解除している
        })
    })
})