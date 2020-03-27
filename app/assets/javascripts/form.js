$(function() {
  let buildHTML = (imageUrl) => {
    let html = `<img id="img_prev" src="${imageUrl}">`
    return html;
  }

  // function readURL(input) {
  //   if (input.files && input.files[0]) {
  //     var reader = new FileReader();
  //     reader.onload = function (e) {
  //       $('#img_prev').attr('src', e.target.result);
  //     }
  //     reader.readAsDataURL(input.files[0]);
  //   }
  // }

  $("#effect_image").change(function(e){
    let file = e.target.files[0];
    const imageUrl = window.URL.createObjectURL(file)
    $('.form-in').append(buildHTML(imageUrl));
    

    console.log(imageUrl)
  });
});