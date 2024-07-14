/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "My dog",
  "The neighbor",
  "An alien",
  "My little brother",
  "A band of monkeys",
  "My cat"
];
let action = [
  "ate",
  "broke",
  "stole",
  "burned",
  "destroyed",
  "stained",
  "blow up"
];
let what = [
  "my homework",
  "my car",
  "my computer",
  "my keys",
  "the report",
  "the papers"
];
let when = [
  "last night",
  "this morning",
  "a while ago",
  "last week",
  "while I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

let excuseBody = [who, action, what, when];

function getValue(arr) {
  let option = Math.floor(Math.random() * arr.length);
  return arr[option];
}

function excuseMaker(arrOfArr) {
  // Actually this function will work with any desired output if you provide an ordered structure of words (like the body I made)
  let excuseArray = arrOfArr.map(getValue);
  return excuseArray.join(" ");
}

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = excuseMaker(excuseBody);
  console.log("Hello Rigo from the console!");
  console.log(document.getElementById("excuse").innerHTML);
};
