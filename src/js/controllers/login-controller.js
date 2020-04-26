import { Controller } from 'stimulus';

export default class extends Controller {

    static targets = ['email', 'password', 'message', 'submitButton'];

    invalidSubmitButtonClass;

    initialize() {
        this.invalidSubmitButtonClass = this.data.get('invalid-submit-button-class');
    }

    loginUser(event) {
        event.preventDefault();
        const email = this.emailTarget.value;
        const password = this.passwordTarget.value;
        const passwordByEmail = localStorage.getItem(email);
        if (passwordByEmail === null) {
            this.validateUserDoesNotExist();
            return;
        } 
        if (passwordByEmail !== password) {
            this.validateWrongPassword();
            return;
        }
        this.validateUserLogIn();
    }

    validateUserDoesNotExist() {
        this.messageTarget.textContent = 'Oops!'; 
        this.passwordTarget.value = '';
        this.emailTarget.setCustomValidity('User does not exists');
        this.invalidateButton();
    }
    
    validateWrongPassword() {
        const errorMessage = 'Wrong Password';
        this.messageTarget.textContent = errorMessage;
        this.passwordTarget.setCustomValidity(errorMessage);
        this.invalidateButton();
    }
    
    validateUserLogIn() {
        this.messageTarget.textContent = 'Logged in!';
        this.emailTarget.value = '';
        this.passwordTarget.value = '';
    }

    invalidateButton() {
        this.submitButtonTarget.value = 'Retry';
        this.submitButtonTarget.classList.add(this.invalidSubmitButtonClass);
    }

    clearValidity() {
        this.emailTarget.setCustomValidity('');
        this.passwordTarget.setCustomValidity('');
    }

}