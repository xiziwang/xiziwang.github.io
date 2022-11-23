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


/*
 * The COCO-SSD only recognizes 80 objects listed in: 
 * https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts
 */

// Translations are from: https://jisho.org/search/person
// https://www.archchinese.com/
const dictionary = {
  'person': {
    'jp': {
      'kanji': '人',
      'writing': 'ひと',
      'romaji': 'hito'
    },
    'cn': {
      'hanzi': '人',
      'pinyin': 'rén'
    }
  },
  'bicycle': {
    'jp': {
      'kanji': '自転車',
      'writing': 'じ てん しゃ',
      'romaji': 'ji ten sha'
    },
    'cn': {
      'hanzi': '自行车',
      'pinyin': 'zì xíng chē'
    }
  },
  'car': {
    'jp': {
      'kanji': '自動車',
      'writing': 'じ どう しゃ',
      'romaji': 'ji dou sha'
    },
    'cn': {
      'hanzi': '车',
      'pinyin': 'chē'
    }      
  },
  'motorcycle': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }   
  },
  'airplane': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'bus': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'train' : {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'truck' : {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'boat': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'traffic light': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'fire hydrant': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'stop sign': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'parking meter': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'bench': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'bird': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'cat': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'dog': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'horse': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'sheep': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'cow': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'elephant': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'bear': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'zebra': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'giraffe': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'backpack': {
    'jp': {
      'kanji': 'バックパック',
      'writing': '',
      'romaji': 'bakku pakku'
    },
    'cn': {
      'hanzi': '背包',
      'pinyin': 'bèi bāo'
    }  
  },
  'umbrella': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'handbag': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'tie': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'suitcase': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'frisbee': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'skis': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'snowboard': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'sports ball': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'kite': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'baseball bat': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'baseball glove': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'skateboard': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'surfboard': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'tennis racket': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'bottle': {
    'jp': {
      'kanji': '瓶',
      'writing': 'びん',
      'romaji': 'bin'
    },
    'cn': {
      'hanzi': '瓶子',
      'pinyin': 'píng zi'
    }  
  },
  'wine glass': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'cup': {
    'jp': {
      'kanji': 'カップ',
      'writing': '',
      'romaji': 'kappu'
    },
    'cn': {
      'hanzi': '杯子',
      'pinyin': 'bēi zi'
    }  
  },
  'fork': {
    'jp': {
      'kanji': 'フォーク',
      'writing': '',
      'romaji': 'fooku'
    },
    'cn': {
      'hanzi': '叉子',
      'pinyin': 'chā zi'
    }  
  },
  'knife': {
    'jp': {
      'kanji': 'ナイフ',
      'writing': '',
      'romaji': 'naifu'
    },
    'cn': {
      'hanzi': '刀子',
      'pinyin': 'dāo zi'
    }  
  },
  'spoon': {
    'jp': {
      'kanji': '匙',
      'writing': 'さじ',
      'romaji': 'saji'
    },
    'cn': {
      'hanzi': '调羹',
      'pinyin': 'tiáo gēng'
    }  
  },
  'bowl': {
    'jp': {
      'kanji': '器',
      'writing': 'うつわ',
      'romaji': 'utsuwa'
    },
    'cn': {
      'hanzi': '碗',
      'pinyin': 'wǎn'
    }  
  },
  'banana': {
    'jp': {
      'kanji': 'バナナ',
      'writing': '',
      'romaji': 'banana'
    },
    'cn': {
      'hanzi': '香蕉',
      'pinyin': 'xiāng jiāo'
    }  
  },
  'apple': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'sandwich': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'orange': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'broccoli': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'carrot': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'hot dog': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'pizza': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'donut': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'cake': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'chair': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'couch': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'potted plant': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'bed': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'dining table': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'toilet': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'tv': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'laptop': {
    'jp': {
      'kanji': 'ノートパソコン',
      'writing': '',
      'romaji': 'nooto pasoko'
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'mouse': {
    'jp': {
      'kanji': 'マウス',
      'writing': '',
      'romaji': 'mausu'
    },
    'cn': {
      'hanzi': '鼠标',
      'pinyin': 'shǔ biāo'
    }  
  },
  'remote': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'keyboard': {
    'jp': {
      'kanji': '鍵盤',
      'writing': 'けん ばん',
      'romaji': 'ken ban'
    },
    'cn': {
      'hanzi': '键盘',
      'pinyin': 'jian pan'
    }  
  },
  'cell phone': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '手机',
      'pinyin': 'shǒu jī'
    }  
  },
  'microwave': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'oven': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'toaster': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'sink': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'refrigerator': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'book': {
    'jp': {
      'kanji': '本',
      'writing': 'ほん',
      'romaji': 'hon'
    },
    'cn': {
      'hanzi': '书',
      'pinyin': 'shu'
    }  
  },
  'clock': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'vase': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'scissors': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'teddy bear': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'hair drier': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  },
  'toothbrush': {
    'jp': {
      'kanji': '',
      'writing': '',
      'romaji': ''
    },
    'cn': {
      'hanzi': '',
      'pinyin': ''
    }  
  }
};


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
const playWordButton = document.getElementById('play-word-button');

var isFront = true;
const flipCameraButton = document.getElementById("flip-button");
flipCameraButton.addEventListener("click", () => {
  isFront = !isFront;
  if(isFront){
    flipCameraButton.innerText = 'Camera: Front'
  }
  else {
    flipCameraButton.innerText = 'Camera: Back'
  }
});

// hide the button before the model is loaded
webcamButton.style.visibility = 'hidden';
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


// https://medium.com/@dlyall/letting-the-browser-speak-the-web-speech-api-1df6048f4816
var word = '';

playWordButton.addEventListener("click", () => {
  // Feature detect
  if (
    window.speechSynthesis &&
    typeof SpeechSynthesisUtterance !== undefined
  ) {
    const synth = window.speechSynthesis;
    // get all the voices available on your browser
    const voices = synth.getVoices();
    // find a voice that can speak chinese
    const voice = voices.filter((voice) => voice.lang.indexOf('zh') === 0)[0];
    // make the browser speak!
    const utterThis = new SpeechSynthesisUtterance(word);
    utterThis.voice = voice;
    synth.speak(utterThis);
  }
});

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
  flipCameraButton.visibility = 'hidden'

  // getUsermedia parameters.
  const constraints = {
    audio: false,
    video: {facingMode: isFront ? "user" : "environment" }
    // video: true
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
      console.log("removing ")
      liveView.removeChild(children[i]);
    }
    children.splice(0);
    
    // Now lets loop through predictions and draw them to the live view if
    // they have a high confidence score.
    for (let n = 0; n < predictions.length; n++) {
      // If we are over 66% sure we are sure we classified it right, draw it!
      if (predictions[n].score > 0.5) {
        const p = document.createElement('p');
        p.innerText = predictions[n].class + ' - ' + dictionary[predictions[n].class]['cn'].hanzi 
            + ' (' + dictionary[predictions[n].class]['cn'].pinyin + ')';
             // + ' - with ' + Math.round(parseFloat(predictions[n].score) * 100) 
            // + '%';
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
