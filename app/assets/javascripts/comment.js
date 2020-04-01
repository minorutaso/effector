$(document).on('turbolinks:load', ()=> {
$(function(){
    function buildHTML(comment){
        var html = `<div class="comment__view__box">
                        <div class="comment__view__box-hi">
                            <a href=/users/${comment.user_id} class="comment__view__box-hi-name">${comment.user_name}</a>
                            <div class="comment__view__box-hi-time">
                                ${comment.created_at}
                            </div>
                        </div>
                        <div class="comment__view__box-row">
                            <div class="comment__view__box-row__text">
                                ${comment.text}
                            </div>
                        </div>
                    </div>`
        return html;
      }
    $('#new_comment').on('submit', function(e){
      e.preventDefault();
      console.log(this)
      var formData = new FormData(this);
      var url = $(this).attr('action')
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data){
        var html = buildHTML(data);
        $('.comment__view').append(html);
        $('.comment__view').animate({ scrollTop: $('.comment__view')[0].scrollHeight});
        $('.send-form').val('');
        $('.form__submit').prop('disabled', false);
      })
          .fail(function(){
      alert('error');
    })
    })
  })
});