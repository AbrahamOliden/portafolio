//Variables
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const subjectInput = document.getElementById('subject-input');
const messageInput = document.getElementById('message-input');

const submitButton = document.getElementById('button-input');
const contactForm = document.getElementById('contact-form');

// Event listeners
nameInput.addEventListener('focusout', validateInput.bind(nameInput));
emailInput.addEventListener('focusout', validateInput.bind(emailInput));
subjectInput.addEventListener('focusout', validateInput.bind(subjectInput));
messageInput.addEventListener('focusout', validateInput.bind(messageInput));

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const isDisabled = submitButton.getAttribute('aria-disabled') === true;

    if (isDisabled) return;

});

function validateInput() {
    //Variables
    const inputValue = this.value;
    const errorMessageElement = document.getElementById(`${this.id}-error`)

    const nonEmptyRegex = /\S/g;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if ( !nonEmptyRegex.test(inputValue) ) {
        errorMessageElement.textContent = 'This field cannot be empty.';
        this.setAttribute('aria-invalid', true);
        return false;
    };

    switch (this.id) {
        case 'email-input':
            if ( !emailRegex.test(inputValue) ) {
                errorMessageElement.textContent = 'Please entre a valid email address.';
                this.setAttribute('aria-invalid', true);
                return false;
            };
        case 'message-input':
            if ( !inputValue.length > 300) {
                errorMessageElement.textContent = 'Message cannot exceed 300 characters';
                this.setAttribute('aria-invalid', true);
                return false;
            };
        default:
            if ( !inputValue.length > 50) {
                errorMessageElement.textContent = 'Message cannot exceed 50 characters';
                this.setAttribute('aria-invalid', true);
                return false;
            };
        
        errorMessageElement.textContent = '' //Clear message if input is valid
        this.removeAttribute('aria-invalid'); //Remove aria-invalid
        submitButton.removeAttribute('aria-disabled')
        return true;
    };
};