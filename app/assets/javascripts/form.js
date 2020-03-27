$(function() {
  var buildHTML = (imageUrl) => {
    var html = `<img id="img_prev" src="${imageUrl}">`
    return html;
  }

  $("#effect_image").change(function(e){
    var file = e.target.files[0];
    var imageUrl = window.URL.createObjectURL(file)
    $('.form-in').append(buildHTML(imageUrl));
  });
});