var myHeading = document.querySelector('h1');
myHeading.textContent = 'Andreas Ole Nygaard'; 

var myHeading = document.querySelector('h3');
myHeading.textContent = '-Stjernen i eget liv'

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h4');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Er du stjernen i eget liv, ' + myName + '?';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Er du stjernen i eget liv, ' + storedName;
  
  myButton.onclick = function() {
  setUserName();
}
}