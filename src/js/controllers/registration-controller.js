import { Controller } from 'stimulus';

export default class extends Controller {

    static targets = ['email', 'password', 'message', 'submitButton'];
    
    registerUser(event) {
        event.preventDefault();
        const email = this.emailTarget.value;
        const password = this.passwordTarget.value;
        if (localStorage.getItem(email)) {
            this.validateUserAlreadyExists();
        } else {
            this.saveUser(email, password);
        }
    }

    validateUserAlreadyExists() {
        const errorMessage = 'User already exists';
        this.messageTarget.textContent = errorMessage;
        this.emailTarget.setCustomValidity(errorMessage);
    }

    saveUser(email, password) {
        this.messageTarget.textContent = 'Registered successfuly';
        localStorage.setItem(email, password);
    }

    clearValidity() {
        this.emailTarget.setCustomValidity('');
    }

}