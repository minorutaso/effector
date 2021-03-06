$(document).on('turbolinks:load', ()=> {
$(function() {
  let buildHTML = (imageUrl) => {
    let html = `<img max-width="280" height="280" id="img_prev" src="${imageUrl}">`
    return html;
  }
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#img_prev').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  $('#effect_image').change(function(e){
    let file = e.target.files[0];
    const imageUrl = window.URL.createObjectURL(file);
    $('#img_prev').remove();
    $('.form-in').append(buildHTML(imageUrl));
    readURL(this);
  })
})
});
