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
      'kanji': 'オートバイ',
      'writing': '',
      'romaji': 'o to ba i'
    },
    'cn': {
      'hanzi': '摩托车',
      'pinyin': ''
    }   
  },
  'airplane': {
    'jp': {
      'kanji': '飛行機',
      'writing': 'ひ こう き',
      'romaji': 'hi kou ki'
    },
    'cn': {
      'hanzi': '飞机',
      'pinyin': ''
    }  
  },
  'bus': {
    'jp': {
      'kanji': 'バス',
      'writing': '',
      'romaji': 'ba su'
    },
    'cn': {
      'hanzi': '公共汽车',
      'pinyin': ''
    }  
  },
  'train' : {
    'jp': {
      'kanji': '電車',
      'writing': 'でん しゃ',
      'romaji': 'den sha'
    },
    'cn': {
      'hanzi': '火车',
      'pinyin': ''
    }  
  },
  'truck' : {
    'jp': {
      'kanji': '貨物自動車',
      'writing': 'か もつ じ どう しゃ',
      'romaji': 'ka mo tsu ji dou sha'
    },
    'cn': {
      'hanzi': '货车',
      'pinyin': ''
    }  
  },
  'boat': {
    'jp': {
      'kanji': '船',
      'writing': 'ふね',
      'romaji': 'fune'
    },
    'cn': {
      'hanzi': '船',
      'pinyin': ''
    }  
  },
  'traffic light': {
    'jp': {
      'kanji': '信号機',
      'writing': 'しん ごう き',
      'romaji': 'shin gou ki'
    },
    'cn': {
      'hanzi': '红绿灯',
      'pinyin': ''
    }  
  },
  'fire hydrant': {
    'jp': {
      'kanji': '消火栓',
      'writing': 'しょう か せん',
      'romaji': 'shou ka sen'
    },
    'cn': {
      'hanzi': '消防栓',
      'pinyin': ''
    }  
  },
  'stop sign': {
    'jp': {
      'kanji': '止まれ',
      'writing': 'と + +',
      'romaji': 'to ma re'
    },
    'cn': {
      'hanzi': '停止标志',
      'pinyin': ''
    }  
  },
  'parking meter': {
    'jp': {
      'kanji': 'パーキングメーター',
      'writing': '',
      'romaji': 'pā kin gu mē tā'
    },
    'cn': {
      'hanzi': '停车收费秒表',
      'pinyin': ''
    }  
  },
  'bench': {
    'jp': {
      'kanji': '縁台',
      'writing': 'えん だい',
      'romaji': 'en dai'
    },
    'cn': {
      'hanzi': '长椅',
      'pinyin': ''
    }  
  },
  'bird': {
    'jp': {
      'kanji': '鳥',
      'writing': 'とり',
      'romaji': 'tori'
    },
    'cn': {
      'hanzi': '鸟',
      'pinyin': ''
    }  
  },
  'cat': {
    'jp': {
      'kanji': '猫',
      'writing': 'ねこ',
      'romaji': 'neko'
    },
    'cn': {
      'hanzi': '猫',
      'pinyin': ''
    }  
  },
  'dog': {
    'jp': {
      'kanji': '犬',
      'writing': 'いぬ',
      'romaji': 'inu'
    },
    'cn': {
      'hanzi': '狗',
      'pinyin': ''
    }  
  },
  'horse': {
    'jp': {
      'kanji': '馬',
      'writing': 'うま',
      'romaji': 'uma'
    },
    'cn': {
      'hanzi': '马',
      'pinyin': ''
    }  
  },
  'sheep': {
    'jp': {
      'kanji': '羊',
      'writing': 'ひつじ',
      'romaji': 'hitsuji'
    },
    'cn': {
      'hanzi': '羊',
      'pinyin': ''
    }  
  },
  'cow': {
    'jp': {
      'kanji': '牛',
      'writing': 'うし',
      'romaji': 'ushi'
    },
    'cn': {
      'hanzi': '牛',
      'pinyin': ''
    }  
  },
  'elephant': {
    'jp': {
      'kanji': '象',
      'writing': 'ぞう',
      'romaji': 'zou'
    },
    'cn': {
      'hanzi': '象',
      'pinyin': ''
    }  
  },
  'bear': {
    'jp': {
      'kanji': '熊',
      'writing': 'くま',
      'romaji': 'kuma'
    },
    'cn': {
      'hanzi': '熊',
      'pinyin': ''
    }  
  },
  'zebra': {
    'jp': {
      'kanji': '縞馬',
      'writing': 'しま うま',
      'romaji': 'shima uma'
    },
    'cn': {
      'hanzi': '斑马',
      'pinyin': ''
    }  
  },
  'giraffe': {
    'jp': {
      'kanji': 'ジラフ',
      'writing': '',
      'romaji': 'ji ra fu'
    },
    'cn': {
      'hanzi': '长颈鹿',
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
      'kanji': '傘',
      'writing': 'かさ',
      'romaji': 'kasa'
    },
    'cn': {
      'hanzi': '雨伞',
      'pinyin': ''
    }  
  },
  'handbag': {
    'jp': {
      'kanji': '手提げ',
      'writing': 'て さ +',
      'romaji': 'te sa ge'
    },
    'cn': {
      'hanzi': '手提包',
      'pinyin': ''
    }  
  },
  'tie': {
    'jp': {
      'kanji': 'ネクタイ',
      'writing': '',
      'romaji': 'ne ku ta i'
    },
    'cn': {
      'hanzi': '领带',
      'pinyin': ''
    }  
  },
  'suitcase': {
    'jp': {
      'kanji': 'スーツケース',
      'writing': '',
      'romaji': 'sū tsu kē su'
    },
    'cn': {
      'hanzi': '行李箱',
      'pinyin': ''
    }  
  },
  'frisbee': {
    'jp': {
      'kanji': 'フライングディスク',
      'writing': 'fu ra i n gu di su ku',
      'romaji': ''
    },
    'cn': {
      'hanzi': '飞盘',
      'pinyin': ''
    }  
  },
  'skis': {
    'jp': {
      'kanji': 'スキー板',
      'writing': '+ + + いた',
      'romaji': 'su kī i ta'
    },
    'cn': {
      'hanzi': '滑雪板',
      'pinyin': ''
    }  
  },
  'snowboard': {
    'jp': {
      'kanji': 'スノーボード',
      'writing': '',
      'romaji': 'su no bo do'
    },
    'cn': {
      'hanzi': '滑雪板',
      'pinyin': ''
    }  
  },
  'sports ball': {
    'jp': {
      'kanji': '玉',
      'writing': 'たま',
      'romaji': 'tama'
    },
    'cn': {
      'hanzi': '球',
      'pinyin': ''
    }  
  },
  'kite': {
    'jp': {
      'kanji': '来手',
      'writing': 'き て',
      'romaji': 'kite'
    },
    'cn': {
      'hanzi': '风筝',
      'pinyin': ''
    }  
  },
  'baseball bat': {
    'jp': {
      'kanji': '野球用バット',
      'writing': 'や きゅう よ + + +',
      'romaji': 'ya kyuu yo ba tto'
    },
    'cn': {
      'hanzi': '棒球棒',
      'pinyin': ''
    }  
  },
  'baseball glove': {
    'jp': {
      'kanji': '野球用グローブ',
      'writing': 'や きゅう よ + + + +',
      'romaji': 'ya kyuu yo gu ro bu'
    },
    'cn': {
      'hanzi': '棒球手套',
      'pinyin': ''
    }  
  },
  'skateboard': {
    'jp': {
      'kanji': 'スケートボード',
      'writing': '',
      'romaji': 'su kē to bō do'
    },
    'cn': {
      'hanzi': '滑板',
      'pinyin': ''
    }  
  },
  'surfboard': {
    'jp': {
      'kanji': 'サーフボード',
      'writing': '',
      'romaji': 'sā fu bō do'
    },
    'cn': {
      'hanzi': '冲浪板',
      'pinyin': ''
    }  
  },
  'tennis racket': {
    'jp': {
      'kanji': 'テニスラケット',
      'writing': '',
      'romaji': 'te ni su ra ke tto'
    },
    'cn': {
      'hanzi': '网球拍',
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
      'kanji': 'ワイングラス',
      'writing': '',
      'romaji': 'wa i n gu ra su'
    },
    'cn': {
      'hanzi': '红酒杯',
      'pinyin': ''
    }  
  },
  'cup': {
    'jp': {
      'kanji': 'カップ',
      'writing': '',
      'romaji': 'ka ppu'
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
      'romaji': 'foo ku'
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
      'romaji': 'na i fu'
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
      'romaji': 'ba na na'
    },
    'cn': {
      'hanzi': '香蕉',
      'pinyin': 'xiāng jiāo'
    }  
  },
  'apple': {
    'jp': {
      'kanji': '林檎',
      'writing': 'りん ご',
      'romaji': 'rin go'
    },
    'cn': {
      'hanzi': '苹果',
      'pinyin': ''
    }  
  },
  'sandwich': {
    'jp': {
      'kanji': 'サンドイッチ',
      'writing': '',
      'romaji': 'sa n do i cchi'
    },
    'cn': {
      'hanzi': '三明治',
      'pinyin': ''
    }  
  },
  'orange': {
    'jp': {
      'kanji': '蜜柑',
      'writing': 'み かん',
      'romaji': 'mi kan'
    },
    'cn': {
      'hanzi': '橘子',
      'pinyin': ''
    }  
  },
  'broccoli': {
    'jp': {
      'kanji': 'ブロコリ',
      'writing': '',
      'romaji': 'bu ro ko ri'
    },
    'cn': {
      'hanzi': '西兰花',
      'pinyin': ''
    }  
  },
  'carrot': {
    'jp': {
      'kanji': '人参',
      'writing': 'にん じん',
      'romaji': 'nin jin'
    },
    'cn': {
      'hanzi': '胡萝卜',
      'pinyin': ''
    }  
  },
  'hot dog': {
    'jp': {
      'kanji': 'ホットドッグ',
      'writing': '',
      'romaji': 'ho tto dog gu'
    },
    'cn': {
      'hanzi': '热狗',
      'pinyin': ''
    }  
  },
  'pizza': {
    'jp': {
      'kanji': 'ピザ',
      'writing': '',
      'romaji': 'pi za'
    },
    'cn': {
      'hanzi': '披萨',
      'pinyin': ''
    }  
  },
  'donut': {
    'jp': {
      'kanji': 'ドーナツ',
      'writing': '',
      'romaji': 'dō na tsu'
    },
    'cn': {
      'hanzi': '甜甜圈',
      'pinyin': ''
    }  
  },
  'cake': {
    'jp': {
      'kanji': 'ケーキ',
      'writing': '',
      'romaji': 'kē ki'
    },
    'cn': {
      'hanzi': '蛋糕',
      'pinyin': ''
    }  
  },
  'chair': {
    'jp': {
      'kanji': '椅子',
      'writing': 'い す',
      'romaji': 'i su'
    },
    'cn': {
      'hanzi': '椅子',
      'pinyin': ''
    }  
  },
  'couch': {
    'jp': {
      'kanji': 'ソファ',
      'writing': '',
      'romaji': 'so fa'
    },
    'cn': {
      'hanzi': '沙发',
      'pinyin': ''
    }  
  },
  'potted plant': {
    'jp': {
      'kanji': '鉢植え',
      'writing': 'はち う +',
      'romaji': 'hachi u e'
    },
    'cn': {
      'hanzi': '盆植',
      'pinyin': ''
    }  
  },
  'bed': {
    'jp': {
      'kanji': 'ベッド',
      'writing': '',
      'romaji': 'be ddo'
    },
    'cn': {
      'hanzi': '床',
      'pinyin': ''
    }  
  },
  'dining table': {
    'jp': {
      'kanji': '食卓',
      'writing': 'しょく たく',
      'romaji': 'shoku taku'
    },
    'cn': {
      'hanzi': '餐桌',
      'pinyin': ''
    }  
  },
  'toilet': {
    'jp': {
      'kanji': 'お手洗い',
      'writing': '+ て あら +',
      'romaji': 'o te ara i'
    },
    'cn': {
      'hanzi': '洗手间',
      'pinyin': ''
    }  
  },
  'tv': {
    'jp': {
      'kanji': 'テレビ',
      'writing': '',
      'romaji': 'te re bi'
    },
    'cn': {
      'hanzi': '电视机',
      'pinyin': ''
    }  
  },
  'laptop': {
    'jp': {
      'kanji': 'ラップトップ',
      'writing': '',
      'romaji': 'rappu toppu'
    },
    'cn': {
      'hanzi': '笔记本电脑',
      'pinyin': ''
    }  
  },
  'mouse': {
    'jp': {
      'kanji': 'マウス',
      'writing': '',
      'romaji': 'ma u su'
    },
    'cn': {
      'hanzi': '鼠标',
      'pinyin': 'shǔ biāo'
    }  
  },
  'remote': {
    'jp': {
      'kanji': 'リモート',
      'writing': '',
      'romaji': 'ri mō to'
    },
    'cn': {
      'hanzi': '遥控板',
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
      'kanji': '携帯電話',
      'writing': 'けい たい でん わ',
      'romaji': 'kei tai den wa'
    },
    'cn': {
      'hanzi': '手机',
      'pinyin': 'shǒu jī'
    }  
  },
  'microwave': {
    'jp': {
      'kanji': '電子レンジ',
      'writing': 'でん し + + +',
      'romaji': 'den shi ren ji'
    },
    'cn': {
      'hanzi': '微波炉',
      'pinyin': ''
    }  
  },
  'oven': {
    'jp': {
      'kanji': 'オーブン',
      'writing': '',
      'romaji': 'ō bun'
    },
    'cn': {
      'hanzi': '烤箱',
      'pinyin': ''
    }  
  },
  'toaster': {
    'jp': {
      'kanji': 'トースター',
      'writing': '',
      'romaji': 'tō su tā'
    },
    'cn': {
      'hanzi': '烤面包机',
      'pinyin': ''
    }  
  },
  'sink': {
    'jp': {
      'kanji': '流し',
      'writing': 'なが +',
      'romaji': 'na ga shi'
    },
    'cn': {
      'hanzi': '水槽',
      'pinyin': ''
    }  
  },
  'refrigerator': {
    'jp': {
      'kanji': '冷蔵庫',
      'writing': 'れい ぞう こ',
      'romaji': 'rei zou ko'
    },
    'cn': {
      'hanzi': '冰箱',
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
      'kanji': '時計',
      'writing': 'と けい',
      'romaji': 'to kei'
    },
    'cn': {
      'hanzi': '时钟',
      'pinyin': ''
    }  
  },
  'vase': {
    'jp': {
      'kanji': '花瓶',
      'writing': 'か びん',
      'romaji': 'ka bin'
    },
    'cn': {
      'hanzi': '花瓶',
      'pinyin': ''
    }  
  },
  'scissors': {
    'jp': {
      'kanji': '鋏',
      'writing': 'はさみ',
      'romaji': 'hasami'
    },
    'cn': {
      'hanzi': '剪刀',
      'pinyin': ''
    }  
  },
  'teddy bear': {
    'jp': {
      'kanji': 'テディーベア',
      'writing': '',
      'romaji': 'te dī be a'
    },
    'cn': {
      'hanzi': '泰迪熊',
      'pinyin': ''
    }  
  },
  'hair drier': {
    'jp': {
      'kanji': 'ドライヤー',
      'writing': '',
      'romaji': 'do ra i yā'
    },
    'cn': {
      'hanzi': '吹风机',
      'pinyin': ''
    }  
  },
  'toothbrush': {
    'jp': {
      'kanji': '歯ブラシ',
      'writing': 'は + + +',
      'romaji': 'ha bu ra shi'
    },
    'cn': {
      'hanzi': '牙刷',
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
const flipCameraButton = document.getElementById("flip-button");
const languageButton = document.getElementById("language-button");
const video = document.getElementById('webcam');
const liveView = document.getElementById('liveView');

var isFront = true;
var isEnglish = true;

// Set up play icon
const playIcon = document.createElement('i');
playIcon.setAttribute('class', 'fa fa-play-circle');


flipCameraButton.addEventListener("click", () => {
  isFront = !isFront;
  if(isFront){
    flipCameraButton.innerText = 'Camera: Front'
  }
  else {
    flipCameraButton.innerText = 'Camera: Back'
  }
});

languageButton.addEventListener("click", () => {
  isEnglish = !isEnglish;
  if(isEnglish){
    languageButton.innerText = 'Prefer: English'
  }
  else {
    languageButton.innerText = 'Prefer: 中文'
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
// var word = '音乐';

// playWordButton.addEventListener("click", () => {
//   // Feature detect
//   if (
//     window.speechSynthesis &&
//     typeof SpeechSynthesisUtterance !== undefined
//   ) {
//     const synth = window.speechSynthesis;
//     // get all the voices available on your browser
//     const voices = synth.getVoices();
//     // find a voice that can speak chinese
//     const voice = voices.filter((voice) => voice.lang.indexOf('zh') === 0)[0];
//     // make the browser speak!
//     const utterThis = new SpeechSynthesisUtterance(word);
//     utterThis.voice = voice;
//     synth.speak(utterThis);
//   }
// });

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
  flipCameraButton.style.visibility = 'hidden'

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
      console.log("removing")
      liveView.removeChild(children[i]);
    }
    children.splice(0);
    
    // Now lets loop through predictions and draw them to the live view if
    // they have a high confidence score.
    for (let n = 0; n < predictions.length; n++) {
      // If we are over 66% sure we are sure we classified it right, draw it!
      if (predictions[n].score > 0.55) {
        const word = dictionary[predictions[n].class]['jp'].kanji;
        const romaji = dictionary[predictions[n].class]['jp'].romaji;
        // const word_gana = dictionary[predictions[n].class]['jp'].writing;
        const hanzi = dictionary[predictions[n].class]['cn'].hanzi;
        // const pinyin = dictionary[predictions[n].class]['cn'].pinyin;


        const p = document.createElement('p');
        p.setAttribute('class', 'word');
        p.innerText = word + ' (' + romaji + ')' + ' : ' + (isEnglish? predictions[n].class : hanzi);
             // + ' - with ' + Math.round(parseFloat(predictions[n].score) * 100) 
            // + '%';
        // Draw in top left of bounding box outline.
        p.style = 'left: ' + predictions[n].bbox[0] + 'px;' +
            'top: ' + (predictions[n].bbox[1]) + 'px;' + 
            'width: ' + (predictions[n].bbox[2] - 60) + 'px;';

        // const p2 = document.createElement('p');
        // p2.innerText = word_gana;
        // p2.setAttribute('class', 'gana');
        // p2.style = 'left: ' + predictions[n].bbox[0] + 'px;' +
        //     'top: ' + predictions[n].bbox[1] + 'px;' + 
        //     'width: ' + (predictions[n].bbox[2] - 60) + 'px;';

        // Draw the actual bounding box.
        const highlighter = document.createElement('div');
        highlighter.setAttribute('class', 'highlighter');
        highlighter.style = 'left: ' + predictions[n].bbox[0] + 'px; top: '
            + predictions[n].bbox[1] + 'px; width: ' 
            + predictions[n].bbox[2] + 'px; height: '
            + predictions[n].bbox[3] + 'px;';

        // draw play button

        const leftPos = predictions[n].bbox[0]+predictions[n].bbox[2]-50;
        const playWordButton = document.createElement('button');
        playWordButton.style = 'left: ' + leftPos + 'px;' +
        'top: ' + predictions[n].bbox[1] + 'px;';
        // playWordButton.innerText = 'Play';
        playWordButton.appendChild(playIcon);
        playWordButton.addEventListener("click", () => {
          // Feature detect
          if (
            window.speechSynthesis &&
            typeof SpeechSynthesisUtterance !== undefined
          ) {
            console.log('playing')
            const synth = window.speechSynthesis;
            // get all the voices available on your browser
            const voices = synth.getVoices();
            // find a voice that can speak japanese
            const voice = voices.filter((voice) => voice.lang.indexOf('ja') === 0)[0];
            // make the browser speak!
            const utterThis = new SpeechSynthesisUtterance(word);
            utterThis.voice = voice;
            synth.speak(utterThis);
          }
        });

        liveView.appendChild(playWordButton);
        liveView.appendChild(highlighter);
        liveView.appendChild(p);
        
        // Store drawn objects in memory so we can delete them next time around.
        children.push(playWordButton);
        children.push(highlighter);
        children.push(p);
      }
    }
    
    // Call this function again to keep predicting when the browser is ready.
    window.requestAnimationFrame(predictWebcam);
  });
}
