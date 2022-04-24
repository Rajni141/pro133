img = "";
status = "";
function preload()
{
    img = loadImage('book.jpg');
}

function setup() {

canvas = createCanvas(640, 420);
canvas.center();
object_detector = ml5.objectDetector('cocossd',modeLoaded);
document.getElementById('status').innerHTML = "status: detecting objects"
}

function modeLoaded()
{
    console.log("model Loaded");
    status = true;
    object_detector.detect(img, gotResult);
}

function gotResult(error, results)
{

    if (error)
    {
        console.log("error");
    }
   else {
    console.log(results);
   }
}