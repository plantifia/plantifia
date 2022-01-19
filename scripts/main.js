let myVariable = document.querySelector('h1');
alert('BONJOUR ET BIEN VENU SUR PLANTIFIA');

function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

document.querySelector('html').addEventListener('click', function() {});

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/nature.png') {
      myImage.setAttribute('src', 'images/nature2.png');
    } else {
      myImage.setAttribute('src', 'images/nature.png');
    }
});
  
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'bienvenu sur PLANTIFIA, ' + myName;
}

if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'bienvenu sur PLANTIFIA, ' + storedName;
}

myButton.addEventListener('click', function() {

  setUserName();
});
