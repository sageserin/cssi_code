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

console.log("script is running...");

function My_Alarm(time){
  return "Hey, Sage, wake up! It's " + time;
}

function Mom_Alarm(time){
  return "Hey, Mom, wake up! It's " + time;
}

function Family_Alarm(name, time){
  return "Hey, " + name + ", wake up! It's " + time;
}

function Important_Alarm(message){
  return message.toUpperCase();
}

function Snooze_Alarm(time){
  var newTime = time + 1;
  return "The alarm for " + time + " has been changed to " + newTime;
}

function Rep_Alarm(num){
  for(i=num; i>0; i--){
    console.log("Wake up!");
  }
}

console.log(My_Alarm(10));
console.log(Mom_Alarm(10));
console.log(Family_Alarm("Dad", 10));
console.log(Important_Alarm("wake up, wake up, wake UP!!"));
console.log(Snooze_Alarm(10));
Rep_Alarm(10);

console.log("script has stopped.")

// console.log('Hey ${time}');
