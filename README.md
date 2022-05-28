# Cropper--crop-images
Testing purposes @Cropper .croppie

Library use
. Croppie v2.5.1 by foliotek @https://foliotek.github.io/Croppie/
. Bootstrap v4.6.1
. jQuery v3.6.0

Cropper version using Croppie library with Jquery.

A cropper file which use base64 to do everything on the pages before post back to server for saving. 

Please indicate the URL post if u want to done a AJAX re-post images after cropped.

  $("#btn").click(function() {
      $.ajax({
          dataType: 'json',
          type: 'POST',
          url: '@(Url.Action("Account", "UploadImg"))',
          data: { "base64Img": $("#HJ").attr('src').replace(/^data\:image\/\w+\;base64\,/, '') },
          success: function (status) {
              //Success_data
          },
          error: function () {
              alert("Whoops something went wrong! No Post APIs active.");
          }
      });
  });
  

