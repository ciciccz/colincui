var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/VIP_wrist_bands.JPG') {
      myImage.setAttribute ('src','images/boat_food.JPG');
    } else {
      myImage.setAttribute ('src','images/VIP_wrist_bands.JPG');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Check out our trip, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Check out our trip ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
