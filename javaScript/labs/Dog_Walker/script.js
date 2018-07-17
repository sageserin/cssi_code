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

// Task 1
let dogName1 = "Steve";
let dogType1 = "beagle";

// Complete Task 1 Below
console.log("I will walk " + dogName1 + " at 12:00 PM");


let dogName2 = "Joe";
let dogType2 = "bulldog";

// Complete Task 2 Below
if(dogType2 === "corgi"){
  console.log("I will walk " + dogName2 + " at 12:00 PM");
}
else{
  console.log("I will walk " + dogName2 + " at 1:00 PM");
}


let dogName = "Lola";
let dogType = "poodle";
var favDogs = ["Spike", "Jeremy", "Lola", "Peaches", "Steve"];
var thisDog;

// Complete Task 3 Below
if((dogType === "corgi")||(dogType === "beagle")){
  for(i=0;i<favDogs.length; i++){
    if(favDogs[i].toLowerCase() == dogName.toLowerCase()){
      console.log("I will walk " + favDogs[i] + ", one of my favorite dogs, at 12:00 PM");
    }
    else{
      console.log("I will walk " + dogName + " at 12:00 PM");
    }
  }
}
else if(dogType === "bulldog"){
  for(i=0;i<favDogs.length; i++){
    if(favDogs[i].toLowerCase() == dogName.toLowerCase()){
      console.log("I will walk " + favDogs[i] + ", one of my favorite dogs, at 1:00 PM");
    }
    else{
      console.log("I will walk " + dogName + " at 1:00 PM");
    }
  }
}
else{
  for(i=0;i<favDogs.length; i++){
    if(favDogs[i].toLowerCase() == dogName.toLowerCase()){
      console.log("I will walk " + favDogs[i] + ", one of my favorite dogs, at 2:00 PM");
    }
    else{
      console.log("I will walk " + dogName + " at 2:00 PM");
    }
  }
}
