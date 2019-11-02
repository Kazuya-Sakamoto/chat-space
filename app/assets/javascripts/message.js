$(function(){
  function buildmessage(message) {
    
    var img = message.image ? `<img class="lower-message__image" src="${message.image}" alt="Dsc01746 2">`: '';
    var html = `<div class="message" data-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                    ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                    ${message.date}
                    </div>
                    <div class="lower-message">
                    <p class="lower-message__content">
                    ${message.content}
                    </p>
                    ${img}
                  </div>
                </div>`
        return html;
};

  $('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action');
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
    $('.form__submit').prop('disabled', false);
    })
  });
        var reloadMessages = (function() {
            last_message_id = $(".message:last").data("id");
            $.ajax({
            url: `api/messages`,
            type: "get",
            dataType: "json",
            data: { id: last_message_id }
            })
            .done(function(messages) {
                var insertHTML = "";
                messages.forEach(function(message) {
                insertHTML = buildmessage(message)
                $(".messages").append(insertHTML);
            });                    //appendで指定したクラスの下に要素を追加
            $(".messages").animate({ scrollTop: $(".messages")[0].scrollHeight }); //メッセージ画面を下までスクロール//animatメソッドで引数によって、スクロールのコントロールできる
            })
            .fail(function() {
                alert("更新に失敗しました");
            });
        });
           setInterval(reloadMessages, 5000);
});
