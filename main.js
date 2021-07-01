Webcam.set({
    width: 350,
    height:300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_picture(){
    Webcam.snap(function(data_uri){
        document.getElementById("camera_result").innerHTML = '<img id="capture_image" src="'+data_uri + '"/>';
    
    });

}
console.log("ml5 version: " + ml5.version);
classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/eEw2fYNf3/model.json", modelLoaded);
function modelLoaded(){
    console.log("Model is Loaded!");
}