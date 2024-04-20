//Variables
const nonEmptyRegex = /\S/g;
const inputButton = document.getElementById('button-input');

// Event listeners

inputButton.addEventListener('click', validateFormInput.bind(null));

function validateFormInput() {
    // Variables
    const nameInputValue = document.getElementById('name-input').value;
    const emailInputValue = document.getElementById('email-input').value;
    const subjectInputValue = document.getElementById('subject-input').value;
    const messageInputValue = document.getElementById('message-input').value;

    validateNameField(nameInputValue)
        ? alert('name')
        : alert('no name');
    validateEmailField(emailInputValue)
        ?alert('email')
        :alert('no email');
};

function validateNameField(nameInput) {

    if ( !nonEmptyRegex.test(nameInput) ) {
        alert("nombre ta basio");
        return false;
    } else if (nameInput.length > 50) {
        alert("Too mich characters");
        return false;
    };

    return true;
};

function validateEmailField(emailInput) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if ( !nonEmptyRegex.test(emailInput) ) {
        alert("email ta basio");
        return false;
    } else if ( !emailRegex.test(emailInput) ) {
        alert('Please enter a valid email address');
        return false;
    };

    return true;
};