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

let recipe = [];/* set recipe equal to an empty array*/
let recipeArray = [
  'Heat oven to 425ºF. Prepare Double-Crust Pastry.',
  'Mix sugar, flour, cinnamon, nutmeg and salt in large bowl.',
  'Stir in apples.',
  'Turn into pastry-lined pie plate. Dot with butter. Trim overhanging edge of pastry 1/2 inch from rim of plate.',
  'Roll other round of pastry. Fold into fourths and cut slits so steam can escape.',
  'Unfold top pastry over filling; trim overhanging edge 1 inch from rim of plate.',
  'Fold and roll top edge under lower edge, pressing on rim to seal; flute as desired.',
  'Cover edge with 3-inch strip of aluminum foil to prevent excessive browning. Remove foil during last 15 minutes of baking.',
  'Bake 40 to 50 minutes or until crust is brown and juice begins to bubble through slits in crust. Serve warm if desired.'
];

function addInstructions(recipeArray){
// add all of the instructions into the recipeArray variable
  for(i=0; i<recipeArray.length; i++){
    recipe.push(recipeArray[i]);
  }
// return the array
  return recipe;
}

function checkStep(step, array){
// return the correct step in the given array
  return(array[step-1]);
}

// Write a function checkLength
function checkLength(array){
  return array.length;
}

// Write a function publishRecipe
function publishRecipe(array){
  array.forEach((step, index) => {
    var t = document.createChildNode('Step ' + index + ': ' + step);
    console.log('Step ' + index + ': ' + step);
    return t;
  });
};









var begin = document.querySelector('#begin');
var check = document.querySelector('#check');
var publish = document.querySelector('#publish');

begin.addEventListener('click', e => {
  addInstructions(recipeArray);
  var p = document.createElement('p');
  var t = document.createTextNode('t');
  t = 'Recipe at the ready!';
  document.body.append(t);
});

check.addEventListener('click', e => {
  var entryStep = prompt("Which step are you unsure about?", "1");

  var t = document.createTextNode(checkStep(entryStep, recipe));
  document.body.appendChild(t);
});

publish.addEventListener('click', e => {
  document.body.appendChild(publishRecipe(recipe));
})
