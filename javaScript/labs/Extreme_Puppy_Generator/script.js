// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

console.log(dataObject);

let urlButton = document.getElementById('url0');
let clearButton = document.getElementById('clear');
let randButton = document.getElementById('rand');
var gif0url = dataObject.data['0'].images.original.url;

let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

urlButton.addEventListener('click', e => {
  // console.log(gif0url);
  // var img0 = document.createElement("IMG");
  // img0.src = gif0url;
  // document.body.appendChild(img0);
  nums.forEach((val, index) => {
    var gifurl = dataObject.data[val].images.original.url;
    var giftitle = dataObject.data[val].title;
    console.log(gifurl);
    var img = document.createElement("IMG");
    var h = document.createElement('h1');
    var t = document.createTextNode(giftitle);
    h.appendChild(t);
    img.src = gifurl;
    img.height = '200';
    img.width = '200';
    img.classList.add('gif');
    h.classList.add('title');
    document.body.append(h);
    document.body.append(img);
  });
});

// var giferinos = [document.body.getElementsByClassName('gif')];
var bad = document.querySelectorAll('.gif');

clearButton.addEventListener('click', e => {
  remove();
});

// randButton.addEventListener('click', e => {
//   remove();
  // var num = getRandom(0, 9);
  // var gifurl = dataObject.data[num].images.original.url;
  // var giftitle = dataObject.data[num].title;
  // var img = document.createElement('img');
  // var h = document.createElement('h1');
  // var t = document.createTextNode(giftitle);
  // h.appendChild(t);
  // img.src = gifurl;
  // img.height = '200';
  // img.weight = '200';
  // img.classList.add('gif');
  // h.classList.add('title');
  // document.body.append(h);
  // document.body.append(img);
// });

function getRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mouseGif(e){
  remove();
  var num = getRandom(0, 9);
  var gifurl = dataObject.data[num].images.original.url;
  var giftitle = dataObject.data[num].title;
  var img = document.createElement('img');
  var h = document.createElement('h1');
  var t = document.createTextNode(giftitle);
  h.appendChild(t);
  img.src = gifurl;
  img.height = '200';
  img.weight = '200';
  img.classList.add('gif');
  h.classList.add('title');
  document.body.append(h);
  document.body.append(img);
}

function remove() {
  badG = document.querySelectorAll('.gif');
  badH = document.querySelectorAll('.title');
  badG.forEach((one, index) => {
    one.remove();
  });
  badH.forEach((one, index) => {
    one.remove();
  });
}
