/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */




// // /********************************************************************
// // // Demo 1: Grab a bunch of images from the page and classify them
// // // upon click.
// // ********************************************************************/

// // In this demo, we have put all our clickable images in divs with the 
// // CSS class 'classifyOnClick'. Lets get all the elements that have
// // this class.
// const imageContainers = document.getElementsByClassName('classifyOnClick');

// // Now let's go through all of these and add a click event listener.
// for (let i = 0; i < imageContainers.length; i++) {
//   // Add event listener to the child element whichis the img element.
//   imageContainers[i].children[0].addEventListener('click', handleClick);
// }

// // When an image is clicked, let's classify it and display results!
// function handleClick(event) {
//   if (!model) {
//     console.log('Wait for model to load before clicking!');
//     return;
//   }
  
//   // We can call model.classify as many times as we like with
//   // different image data each time. This returns a promise
//   // which we wait to complete and then call a function to
//   // print out the results of the prediction.
//   model.detect(event.target).then(function (predictions) {
//     // Lets write the predictions to a new paragraph element and
//     // add it to the DOM.
//     console.log(predictions);
//     for (let n = 0; n < predictions.length; n++) {
//       // Description text
//       const p = document.createElement('p');
//       p.innerText = predictions[n].class  + ' - with ' 
//           + Math.round(parseFloat(predictions[n].score) * 100) 
//           + '% confidence.';
//       // Positioned at the top left of the bounding box.
//       // Height is whatever the text takes up.
//       // Width subtracts text padding in CSS so fits perfectly.
//       p.style = 'left: ' + predictions[n].bbox[0] + 'px;' + 
//           'top: ' + predictions[n].bbox[1] + 'px; ' + 
//           'width: ' + (predictions[n].bbox[2] - 10) + 'px;';

//       const highlighter = document.createElement('div');
//       highlighter.setAttribute('class', 'highlighter');
//       highlighter.style = 'left: ' + predictions[n].bbox[0] + 'px;' +
//           'top: ' + predictions[n].bbox[1] + 'px;' +
//           'width: ' + predictions[n].bbox[2] + 'px;' +
//           'height: ' + predictions[n].bbox[3] + 'px;';

//       event.target.parentNode.appendChild(highlighter);
//       event.target.parentNode.appendChild(p);
//     }
//   });
// }


// Part of the code were from https://glitch.com/~tensorflow-js-object-detection
var model = undefined;
const webcamButton = document.getElementById('webcamButton') 
const video = document.getElementById('webcam');
const liveView = document.getElementById('liveView');

// hide the button before the model is loaded
webcamButton.style.visibility = 'hidden'
// TODO: Show loading message


// Loading the COCO-SSD model
cocoSsd.load().then(function (loadedModel) {
  model = loadedModel;
  // Show the button when the model is loaded
  webcamButton.style.visibility = 'visible'
});


// The function checks if webcam access is supported.
function hasGetUserMedia() {
  return !!(navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia);
}


// Keep a reference of all the child elements we create
// so we can remove them easilly on each render.
var children = [];


// If webcam supported, add event listener to button for when user
// wants to activate it.
if (hasGetUserMedia()) {
  webcamButton.addEventListener('click', enableCamera);
} else {
  console.warn('getUserMedia() is not supported by your browser');
  // TODO: Show webcam is not supported message
}


// Enable the live webcam view and start classification.
function enableCamera(event) {
  // Hide the button.
  webcamButton.style.visibility = 'hidden'
  
  // getUsermedia parameters.
  const constraints = {
    video: true
  };

  // Activate the webcam stream.
  navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
    video.srcObject = stream;
    video.addEventListener('loadeddata', predictWebcam);
  });
}


// The function runs the object recognition loop
function predictWebcam() {
  // Start classifying the stream.
  model.detect(video).then(function (predictions) {
    // Remove any highlighting we did previous frame.
    for (let i = 0; i < children.length; i++) {
      liveView.removeChild(children[i]);
    }
    children.splice(0);
    
    // Now lets loop through predictions and draw them to the live view if
    // they have a high confidence score.
    for (let n = 0; n < predictions.length; n++) {
      // If we are over 66% sure we are sure we classified it right, draw it!
      if (predictions[n].score > 0.66) {
        const p = document.createElement('p');
        p.innerText = predictions[n].class  + ' - with ' 
            + Math.round(parseFloat(predictions[n].score) * 100) 
            + '% confidence.';
        // Draw in top left of bounding box outline.
        p.style = 'left: ' + predictions[n].bbox[0] + 'px;' +
            'top: ' + predictions[n].bbox[1] + 'px;' + 
            'width: ' + (predictions[n].bbox[2] - 10) + 'px;';

        // Draw the actual bounding box.
        const highlighter = document.createElement('div');
        highlighter.setAttribute('class', 'highlighter');
        highlighter.style = 'left: ' + predictions[n].bbox[0] + 'px; top: '
            + predictions[n].bbox[1] + 'px; width: ' 
            + predictions[n].bbox[2] + 'px; height: '
            + predictions[n].bbox[3] + 'px;';

        liveView.appendChild(highlighter);
        liveView.appendChild(p);
        
        // Store drawn objects in memory so we can delete them next time around.
        children.push(highlighter);
        children.push(p);
      }
    }
    
    // Call this function again to keep predicting when the browser is ready.
    window.requestAnimationFrame(predictWebcam);
  });
}