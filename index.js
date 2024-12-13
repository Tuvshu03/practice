function Printhello(){
const username = document.querySelector('#username').value;
const password = document.querySelector('#password').value;
if(username.length === 0 || password ){
containerElement = document.createElement('div');
 welcomeElement = document.createElement('p');
usernameElement = document.createElement('p');
 passwordElement = document.createElement('p');

welcomeElement.innerText = "welcome to our website";

usernameElement.innerText = "Your username is: "+username;
passwordElement.innerText = "Your password is: "+password;
}
else{
 containerElement = document.createElement('div');
   usernameElement = document.createElement('p');
  passwordElement = document.createElement('p');

  usernameElement.innerText = "input your username"
  passwordE
}
containerElement.appendChild(usernameElement);
containerElement.appendChild(passwordElement);
document.body.appendChild(containerElement);
}