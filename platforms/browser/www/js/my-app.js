// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    
    pic();
});

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page
    console.log(navigator.camera);
})



function pic()
{
    //console.log(navigator.camera);
    navigator.camera.getPicture(cameraCallBack, onError, opt);
    
}

function cameraCallBack(image)
{
    var img=document.getElementById("containerCam");
    img.scr="data.image/jpeg;base64,"+image;
    document.getElementById('msg').textContent = image;
    document.getElementById('photo').src = image;
}

function onError(msg)
{console.log(msg.message);}

var opt={
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

    