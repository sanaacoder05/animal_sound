function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  //This function should prompt the users to grant access to their connected microphones and cameras.
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/m4RxBwKxZ/model.json', modelReady);
    //soundClassifier is a predefined function of ml5.js that is used to trigger the ml5.js sound classification function.

}

function modelReady(){
  classifier.classify( gotResults);
  //is a predefined function of ml5.js used to compare the captured audio with the model, and get the results.
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
 
    
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
  

    document.getElementById("result_label").innerHTML = "Detected Voice is of meowing - "+ results[0].label;
    document.getElementById("result_confidence").innerHTML = "detected" + results[0].label +"detected" + results[1].label ;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    

    img = document.getElementById('img1') 
    img1 = document.getElementById('img2')
    img2 = document.getElementById('img3')
    img3 = document.getElementById('img4')
    img4 = document.getElementById('img5')

    if (results[0].label == "barking") {
        document.getElementById("name").innerHTML="Animal found = dog"
        img.src = 'dog.png';
    } 
    else if (results[0].label == "meowing") {
        document.getElementById("name").innerHTML="Animal found = cat"
        img1.src = 'cat.png';
    } 
    else if (results[0].label == "mooing") {
        document.getElementById("name").innerHTML="Animal found = cow"
        img2.src = 'cow.png';
    }
    else if (results[0].label == "quacking") {
        document.getElementById("name").innerHTML="Animal found = duck"
        img3.src = 'duck.png';
    }
    else{
        document.getElementById("name").innerHTML="Animal found = lion"
        img4.src = 'lion.png';
    }
  }
}
