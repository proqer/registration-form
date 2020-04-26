import { Controller } from 'stimulus';

export default class extends Controller {

    static targets = ['password', 'leftIcon', 'rightIcon'];

    hiddenPasswordLeftIconClass;
    shownPasswordLeftIconClass;
    hiddenPasswordRightIconClass;
    shownPasswordRightIconClass;

    initialize() {
        this.hiddenPasswordLeftIconClass = this.leftIconTarget.className;
        this.shownPasswordLeftIconClass = this.data.get('shown-password-left-icon-class');
        this.hiddenPasswordRightIconClass = this.rightIconTarget.className;
        this.shownPasswordRightIconClass = this.data.get('shown-password-right-icon-class');
    }
    
    showPassword() {
        this.passwordTarget.type = 'text';
        this.leftIconTarget.className = this.shownPasswordLeftIconClass;
        this.rightIconTarget.className = this.shownPasswordRightIconClass;
    }
    
    hidePassword() {
        this.passwordTarget.type = 'password';
        this.leftIconTarget.className = this.hiddenPasswordLeftIconClass;
        this.rightIconTarget.className = this.hiddenPasswordRightIconClass;
    }

}