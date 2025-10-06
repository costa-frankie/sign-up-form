const form = document.querySelector('#signUpForm');

const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm');



form.addEventListener('change', validateInput);

function validateInput(event) {
    const inputElement = event.target;

    if (!isEmpty(inputElement)) {
        inputElement.classList.add(":user-valid");
        inputElement.classList.remove(":user-invalid");
    } else {
        inputElement.classList.add(":user-invalid");
        inputElement.classList.remove(":user-valid");
    }
    console.log(inputElement);
};

function isEmpty(inputField) {
    if(inputField.value === "") {
        return true;
    } else {
        return false;
    }
}