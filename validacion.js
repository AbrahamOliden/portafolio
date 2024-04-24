//DOM element references
const nameInput = document.getElementById('name-input');
const nameInputError = document.getElementById('name-input-error');

const emailInput = document.getElementById('email-input');
const emailInputError = document.getElementById('email-input-error');

const subjectInput = document.getElementById('subject-input');
const subjectInputError = document.getElementById('subject-input-error');

const messageInput = document.getElementById('message-input');
const messageInputError = document.getElementById('message-input-error');

const submitButton = document.getElementById('button-input');

const contactForm = document.getElementById('contact-form');

//Main validation function
function validateField(inputElement, errorMessageElement, maxLength) {
    const inputValue = inputElement.value;

    if ( !inputValue ) {
        errorMessageElement.textContent = 'This field cannot be empty';
        errorMessageElement.style.display = 'block';
        inputElement.setAttribute('aria-invalid', 'true');
        return false;
    } else if (maxLength && inputValue.length > maxLength) {
        errorMessageElement.textContent = `This field cannot exceed ${maxLength} characters`;
        errorMessageElement.style.display = 'block';
        inputElement.setAttribute('aria-invalid', 'true');
        return false;
    };

    errorMessageElement.textContent = '';
    errorMessageElement.style.display = 'none';
    inputElement.removeAttribute('aria-invalid');
    return true;
};

//Secondary function for email validation
function validateEmail(inputElement, errorMessageElement) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if ( !emailRegex.test(inputElement.value) ) {
        errorMessageElement.textContent = 'Please enter a valid email address';
        errorMessageElement.style.display = 'block';
        inputElement.setAttribute('aria-invalid', 'true');
        return false;
    };

    return validateField(inputElement, errorMessageElement);
};

//Event listeners
nameInput.addEventListener('focusout', () => validateField(nameInput, nameInputError, 50));
emailInput.addEventListener('focusout', () => validateEmail(emailInput, emailInputError));
subjectInput.addEventListener('focusout', () => validateField(subjectInput, subjectInputError, 50));
messageInput.addEventListener('focusout', () => validateField(messageInput, messageInputError, 300));

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let isFormValid = true;

    isFormValid &= validateField(nameInput, nameInputError, 50);
    isFormValid &= validateEmail(emailInput, emailInputError);
    isFormValid &= validateField(subjectInput, subjectInputError, 50);
    isFormValid &= validateField(messageInput, messageInputError, 300);

    if (isFormValid) {
        const formData = new FormData(contactForm);
        formData.append('_to', 'abrahamoliden@protonmail.com');

        fetch('https://formsubmit.co/endpoint', {
            method: 'POST',
            body: formData
        })
            .then (response => {
                if (response.ok) {
                    alert('Message sent successfully');
                    contactForm.reset();
                } else {
                    alert('There was an error submitting the form. Please try again later');
                };
            })
            .catch (error => {
                console.error('Form submission error: ', error);
                alert('There was an error submitting the form. Please try again later');
            });
    }
})