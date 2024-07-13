const signin = document.querySelector('#signin');


function createPopWindow() {
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
}

function removeWindow(close){
    close.addEventListener('click', (e) => {
        overlay.remove()
    })
}

signin.addEventListener('click', (e) => {
    e.preventDefault();
    createPopWindow();
})