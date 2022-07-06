difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    canvas = createCanvas(550, 450);
    canvas.position(560, 90);
    video = createCapture(VIDEO);
    video.size(500, 400);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#89CFF0");
    textSize(difference);
    fill('#F90093');
    stroke('#F90093');
    text('Nishtha', 50, 400);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length >0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

    }
    
}