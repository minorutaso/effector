$(function() {
    function readURL(input) {
      console.log("sss");
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        console.log("hhh");

        reader.onload = function (e) {
          console.log("yy");

          $('#img_prev').attr('src', e.target.result);
          console.log(src);

        }
        reader.readAsDataURL(input.files[0]);
      }else{
        console.log("aaa");
      }
    }
    $("#effect_image").change(function(){

      readURL(this);
    });
   });