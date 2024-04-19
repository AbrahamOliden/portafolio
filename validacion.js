//Variables

const inputButton = document.getElementById('button-input');

// Event listeners

inputButton.addEventListener('click', validateFormInput.bind(null));

var nameInputValue = document.getElementById('name-input').value;
var emailInputValue = document.getElementById('email-input').value;
var subjectInputValue = document.getElementById('subject-input').value;
var messageInputValue = document.getElementById('message-input').value;

function validateFormInput() {
    alert('Aqui andamos gfe');
};

function validateNameField() {

}