$(function() {
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('#img_prev').attr('src', e.target.result);
        }
        console.log("あかん！")
        reader.readAsDataURL(input.files[0]);
      }
    }
    $("#effect_image").change(function(){
        console.log("あかん！")
      readURL(this);
    });
   });