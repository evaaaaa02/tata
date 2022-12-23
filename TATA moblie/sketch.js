
let classifier;
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/pw017cmwe/';
// https://teachablemachine.withgoogle.com/models/lLhzXwYYW/
// Video
let video;
let flippedVideo;
// To store the classification
let label = "";
let percrnt;

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(900, 1700);
  // Create the video
  var constraints = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }    
    //video: {
      //facingMode: "user"
    //} 
  };
  video = createCapture(constraints);
  video.size(900, 1700);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0,0);
  // Draw the video
  image(flippedVideo,0, 100);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
  if(label=="fraction1" && percent>=0.99){
    // noLoop();
    $(".scan_A_sus").css("display","inline-block");
  }

  if(label=="fraction2" && percent>=0.99){
    // noLoop();
    $(".scan_B_sus").css("display","inline-block");
  }

  if(label=="fraction3" && percent>=0.99){
    // noLoop();
    $(".scan_C_sus").css("display","inline-block");
  }


  // 按換下一件loop就要打開，再打開相機時就可以
  $(".scan_A_sus").click(function(){
    $(".container-bgA-blank").css("display","none");
    $(".container-bgB").css("display","inline-block");
    $(".fractionA").css("display","inline-block");
    $(".scan_A_sus").css("display","none");
    // $(".scan_A_sus").prop("src","https://imgur.com/05bf1740-62b9-4895-8333-958087bc32a2");
  });

  $(".scan_B_sus").click(function(){
    $(".container-bgB-blank").css("display","none");
    $(".container-bgC").css("display","inline-block");
    $(".fractionB").css("display","inline-block");
    $(".scan_B_sus").css("display","none");
    // $(".scan_B_sus").prop("src","https://imgur.com/05bf1740-62b9-4895-8333-958087bc32a2");
  });

  $(".scan_C_sus").click(function(){
    $(".container-bgC-blank").css("display","none");
    $(".mix_ele").css("display","inline-block");
    $(".fractionC").css("display","inline-block");
    $(".scan_C_sus").css("display","none");
    noLoop();
    // $(".scan_C_sus").prop("src","https://imgur.com/05bf1740-62b9-4895-8333-958087bc32a2");
  });

  $(".mix_ele").click(
    function(){
      $(".element").css("display","inline-block");
    }
  );

}


// function mouseIsPressed(){
//   createCanvas(320, 260);
// }
// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  percent = results[0].confidence;
  // Classifiy again!
  classifyVideo();
}