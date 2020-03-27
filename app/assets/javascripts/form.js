$(function() {
  let buildHTML = (imageUrl) => {
    let html = `<img id="img_prev" src="${imageUrl}">`
    return html;
  }

  $("#effect_image").change(function(e){
    let file = e.target.files[0];
    let imageUrl = window.URL.createObjectURL(file)
    $('.form-in').append(buildHTML(imageUrl));
  });
});