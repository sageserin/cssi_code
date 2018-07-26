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

function title_change(){
  if(document.getElementById('funny').innerHTML == 'THE MEGA-USEFUL ADDITION TO YOUR MEGA LIFE'){
    document.getElementById('funny').innerHTML = 'WAHAHA YOU FOUND ME';
  }
  else{
    document.getElementById('funny').innerHTML = 'THE MEGA-USEFUL ADDITION TO YOUR MEGA LIFE';
  }
}

var image = document.getElementsByTagName('IMG');

image.onmouseover = function(){
  this.style.border = '5px';
}

for(i=0;i<image.length;i++){
  image[i].onmouseover = function(){
    this.style.border = '5px';
  }
}

for(i=0;i<image.length;i++){
  image[i].onmouseout = function(){
    this.style.border = '0px';
  }
}
