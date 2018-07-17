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

let customer_name;
let password;
let balance;
let logged_in;

function openAccount(name, pw, bal = 0){
  balance = bal;
  // Set the value for customer_name equal to name below
  customer_name = name;
  return customer_name + " has opened a new account with a balance of $" + balance;//write the statment you need to return here
}

function login(name, pw){
  if((name == customer_name)&&(password == password)){
    logged_in = true;
    return customer_name + " has logged in.";
  }
  else{
    logged_in = false;
    return "Incorrect login.";
  }
}

function logout(){
  logged_in = false;
  return customer_name + " has logged out.";
}

function deposit(value){
  if(logged_in==true){
    // update the value of balance
    balance = balance + value;
    //return the correct statement
    return customer_name + " has deposited " + value + ". Total balance is now $" + balance;
  }
  else{
    return "User must log in; deposit unsuccessful."
  }
}

function withdraw(wd_value){
  if(logged_in==true){
    if(wd_value <= balance){
      balance = balance - wd_value;
      return customer_name + " has withdrawn " + wd_value + ". Total balance is now $" + balance;
    }
    else{
      var difference = wd_value - balance;
      return "Sorry, " + customer_name + ", you do not have enough money in your account. You need $" + difference + " more";
    }
  }
  else{
    return "User must log in; withdrawal unsuccessful."
  }
}

// Write your script below
console.log(openAccount("Sage", "password", 300));
console.log(login("Sage", "password"));
console.log(deposit(50));
console.log(logout());
console.log(withdraw(500));
