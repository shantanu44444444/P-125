noseX = 0;
noseY = 0;
diffrence = 0;
rightX = 0;
leftX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(200,100);

    canvas = createCanvas(500,500);
    canvas.position(710,100);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
console.log(' My POSENET Model has Loaded ')
}

function draw(){
    background('#22342f');

    document.getElementById("square_side").innerHTML = "Width and Height of This Square is " + diffrence + "px";
    textSize(diffrence);
    fill('#5cf75e')
    text("shantanu" , noseX/2 , noseY/2 );
}

function gotPoses(results){
    if(results.length > 0){
        console.log( results );
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY =  " + noseY );

        leftX = results[0].pose.leftWrist.x;
        rightX = results[0].pose.rightWrist.x;
        diffrence = floor(leftX - rightX);

        console.log("left Wrist X = " + leftX +" right Wrist X =  " + rightX + diffrence );
    }
}