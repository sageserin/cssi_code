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

var currentlily = 1;

let frogger = document.getElementById('frog'); /*use a querySelector to grab your frog from your HTML*/;
let lilypad1 = document.getElementById('lilypad1');
let lilypad2 = document.getElementById('lilypad2');
let lilypad3 = document.getElementById('lilypad3');
let lilypad4 = document.getElementById('lilypad4');
let lilypad5 = document.getElementById('lilypad5');

frogger.addEventListener('click', function(){
// Insert what should happen when you click on the frog!
  var lilynum = 'lilypad'+currentlily;
  let lilypad = document.getElementById(lilynum);
  console.log(lilypad);

  console.log('hop');

  (lilypad).classList.remove('active');
  currentlily += 1;
  lilynum = 'lilypad'+currentlily;
  lilypad = document.getElementById(lilynum);
  console.log(lilypad);

  frog.style.left = lilypad.style.left;
  frog.style.top = lilypad.style.top;
  lilypad.classList.add('active');
});

frogger.addEventListener('mouseenter', function() {
  frog.style.height = '80px';
  frog.style.width = '80px';
})

frogger.addEventListener('mouseout', function() {
  frog.style.height = '70px';
  frog.style.width = '70px';
})

document.body.onkeyup = function(e){
  if (e.which === 32){
    frog.style.left = '17%';
    frog.style.top = '50%';
    lilypad1.classList.add('active');
    lilypad2.classList.remove('active');
    lilypad3.classList.remove('active');
    lilypad4.classList.remove('active');
    lilypad5.classList.remove('active');
  }
}

// if (currentlily = 1) {
//   frog.style.left = "33.5%";
//   frog.style.top = "24%";
//   lily1.classList.remove('active');
//   lily2.classList.add('active');
//   currentlily += 1;
// }
//
// if (currentlily = 2) {
//   frog.style.left = "50%";
//   frog.style.top = "50%";
//   lily2.classList.remove('active');
//   lily3.classList.add('active');
//   currentlily += 1;
// }
//
// if (currentlily = 3) {
//   frog.style.left = "68$";
//   frog.style.top = "75%";
//   lily3.classList.remove('active');
//   lily4.classList.add('active');
//   currentlily += 1;
// }
//
// if (currentlily = 4) {
//   frog.style.left = "83%";
//   frog.style.top = "50%";
//   lily4.classList.remove('active');
//   lily5.classList.add('active');
//   currentlily += 1;
// }



// for(i=2; i<6; i++){
//   frog.style.left = 'lily'+'i'.style.left;
//   frog.style.right = lily+'i'.style.right;
//   lily+('i'-1).classList.remove('active');
//   lily+'i'.classList.add('active');
// }
