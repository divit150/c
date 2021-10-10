status = "";

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();

    od = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting object";
}
function modelLoaded() {
    console.log("Model is loaded");
    status = true;
    od.detect(img, gotResult);
}
function gotResult(error,results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}
function preload() {
    img = loadImage('dog_cat.jpg');
}

function draw() {
    image(img, 0, 0, 500, 400);
    fill("#ff0000");
    text("golden retriever", 50, 50);
    noFill();
    stroke("#ff0000");
    rect(30, 60, 350, 300);

    fill("#ff0000");
    text("cat", 250, 80);
    noFill();
    stroke("#ff0000");
    rect(220, 70, 225, 280);
}