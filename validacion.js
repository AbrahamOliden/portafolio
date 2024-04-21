//Variables
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const subjectInput = document.getElementById('subject-input');
const messageInput = document.getElementById('message-input');

// Event listeners
nameInput.addEventListener('focusout', validateInput.bind(element));
emailInput.addEventListener('focusout', validateInput.bind(element));
subjectInput.addEventListener('focusout', validateInput.bind(element));
messageInput.addEventListener('focusout', validateInput.bind(element));

function validateInput() {
    //Variables
    const inputValue = this.value;

    const nonEmptyRegex = /\S/g;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if ( !nonEmptyRegex(inputValue) ) return false;

    switch (this.id) {
        case 'email-input':
            return emailRegex.test(inputValue);
        case 'message-input':
            return inputValue.length <= 300;
        default:
            return inputValue.length <= 50;
    };
};