//Variables

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
        ? alert('awebo')
        : alert('no');
};

function validateNameField(nameInput) {
    const nonEmptyRegex = /\S/g;
    if ( !nonEmptyRegex.test(nameInput) ) {
        alert("ta basio");
        return false;
    } else if (nameInput.length > 50) {
        alert("Too mich characters");
        return false;
    }

    return true   
}