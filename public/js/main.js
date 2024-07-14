const signinLink = document.querySelector('#signin');
const signupLink = document.querySelector('#signup');


function signinForm(){
    let overlayDiv = document.createElement('div');
    let div = document.createElement('div');
    let h1Heading = document.createElement('h1');
    let form = document.createElement('form');
    let email = document.createElement('input');
    let password = document.createElement('input');
    let submitButton = document.createElement('button');
    let headingText = document.createTextNode('Sign in');
    let buttonText = document.createTextNode('Sign in');
    let h2Heading = document.createElement('h2');
    let h2HeadingText = document.createTextNode('[X CLOSE]');
    div.setAttribute('id', 'popup');
    overlayDiv.setAttribute('id', 'overlay');
    email.setAttribute('type', 'text');
    email.setAttribute('placeholder', 'E-mail');
    password.setAttribute('type', 'password');
    password.setAttribute('placeholder', 'Password');
    submitButton.setAttribute('id', 'popupButton');
    submitButton.appendChild(buttonText)
    h1Heading.appendChild(headingText);
    h2Heading.appendChild(h2HeadingText);
    div.appendChild(h1Heading);
    div.appendChild(form);
    form.appendChild(email);
    form.appendChild(password);
    form.appendChild(submitButton);
    overlayDiv.appendChild(h2Heading);
    overlayDiv.appendChild(div);
    document.querySelector('body').appendChild(overlayDiv);
    removeWindow(h2Heading);

    submitButton.addEventListener('click', (e) => {
       signin(email.value,  password.value);
    })
}

function signupForm(){
   let overlayDiv = document.createElement('div');
   let div = document.createElement('div'); 
   let signupHeading = document.createElement('h1');  
   let form = document.createElement('form');
   let nameText = document.createElement('input');
   let emailText = document.createElement('input');
   let passwordText = document.createElement('input');
   let confirmPassword = document.createElement('input');
   let accountType = document.createElement('label');
   let employerLink = document.createElement('button');
   let employeeLink = document.createElement('button');
   let submitButton = document.createElement('button');
   let closeHeading = document.createElement('h2');
   let signupText = document.createTextNode('Sign up');
   let accountTypeText = document.createTextNode('What kind of account do you need?');
   let closeButtonText = document.createTextNode('[X CLOSE]');
   let employerLinkText = document.createTextNode('I’m looking to hire');
   let employeeLinkText = document.createTextNode('I’m looking for a job');
   let buttonText = document.createTextNode('Sign up');
   div.setAttribute('class', 'signup');
   form.setAttribute('id', 'signupForm');
   nameText.setAttribute('type', 'text');
   nameText.setAttribute('placeholder', 'Full name');
   emailText.setAttribute('type', 'email');
   emailText.setAttribute('placeholder', 'E -mail');
   passwordText.setAttribute('type', 'password');
   passwordText.setAttribute('placeholder', 'Password');
   confirmPassword.setAttribute('type', 'password');
   confirmPassword.setAttribute('placeholder', 'Confirm password');
   employerLink.setAttribute('id', 'employer-link');
   employeeLink.setAttribute('id', 'employee-link');
   submitButton.setAttribute('id', 'signupButton');
   overlayDiv.setAttribute('id', 'overlay');
   closeHeading.appendChild(closeButtonText);
   signupHeading.appendChild(signupText);
   accountType.appendChild(accountTypeText);
   employeeLink.appendChild(employeeLinkText);
   employerLink.appendChild(employerLinkText);
   submitButton.appendChild(buttonText);
   div.appendChild(signupHeading);
   div.appendChild(form);
   form.appendChild(nameText);
   form.appendChild(emailText);
   form.appendChild(passwordText);
   form.appendChild(confirmPassword);
   form.appendChild(accountType);
   form.appendChild(employerLink);
   form.appendChild(employeeLink);
   form.appendChild(submitButton);
   overlayDiv.appendChild(closeHeading);
   overlayDiv.appendChild(div);
   document.querySelector('body').appendChild(overlayDiv);
   removeWindow(closeHeading);

   submitButton.addEventListener('click', (e) => {
      signup(nameText.value, emailText.value,  passwordText.value);
   })
 
}






function signin(email, password){
   fetch('http://localhost:4567/signin', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            email : email,
            password : password
        })
   }) 
   .then(response => response.json())
   .catch(err => console.log(err)); 
}

function signup(nameText, emailText, passwordText){
  let url = 'http://localhost:4567/signup';
  fetch('http://localhost:4567/signup', {
       method: 'POST',
       headers: {'Content-Type' : 'application/json'},
       //mode: "no-cors",
       body: JSON.stringify({
           name : nameText,
           email : emailText,
           password : passwordText
       })
    })
    .then(response => response.json())
    .catch(err => console.log(err));
}

function createPopWindow() {}

function removeWindow(close){
    close.addEventListener('click', (e) => {
        overlay.remove()
    })
}

signinLink.addEventListener('click', (e) => {
    e.preventDefault();
    signinForm();
})

signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm();
})

