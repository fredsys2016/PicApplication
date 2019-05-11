
var app = new Framework7({
  root: '#app',
  name:'Pic_Application',
  id:'com.Pic_Application.test'
});
var $$ = Dom7;
var mainView = app.views.create('.view-main');


  function openCamera(){
    navigator.camera.getPicture(cameraCallBack, onError,opt);
  }

  function cameraCallBack(imgData)
  {
    var image=document.getElementById('containerCamera');
    image.scr=img.scr="data.image/jpeg;base64,"+imgData;
    document.getElementById('msg').textContent = imgData;
    document.getElementById('photo').src = imgData;
  }
  function onError(msg)
  {alert(msg);}

  var opt = {
    quality: 80,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: Camera.PictureSourceType.CAMERA,
    mediaType: Camera.MediaType.PICTURE,
    encodingType: Camera.EncodingType.JPEG,
    cameraDirection: Camera.Direction.BACK,
    targetWidth: 200,
    targetHeight: 300,
    saveToPhotoAlbum:Camara.SaveToPhotoAlbum.true
    };