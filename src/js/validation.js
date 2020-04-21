import $ from 'jquery';

$(document).ready(() => {

    const VALID_INPUT_CLASS_NAME = 'login-form__input-container--valid';
    const INVALID_INPUT_CLASS_NAME = 'login-form__input-container--invalid';
    const FILLED_INPUT_CLASS_NAME = 'login-form__input-container--filled';
    const VALID_ICON_CLASS_NAME = 'fa-check';
    const INVALID_ICON_CLASS_NAME = 'fa-times';
    const HIDE_PASSWORD_ICON_CLASS_NAME = 'fa-eye-slash';
    const SHOW_PASSWORD_ICON_CLASS_NAME = 'fa-eye';
    const HIDDEN_PASSWORD_ICON_CLASS_NAME = 'fa-lock';
    const VISIBLE_PASSWORD_ICON_CLASS_NAME = 'fa-unlock';

    const $email = $('.login-form__input-email');
    const $password = $('.login-form__input-password');
    const $passwordIcon = $('.password-icon');
    const $showPasswordIcon = $('.show-password-icon');

    $email.on('input', function () {
        const $input = $(this);
        const $inputContainer = $input.parent();
        const $icon = $input.next();
        $icon.removeClass('hidden');
        if (this.checkValidity()) {
            changeClass($inputContainer, INVALID_INPUT_CLASS_NAME, VALID_INPUT_CLASS_NAME);
            changeClass($icon, INVALID_ICON_CLASS_NAME, VALID_ICON_CLASS_NAME);
        } else {
            changeClass($inputContainer, VALID_INPUT_CLASS_NAME, INVALID_INPUT_CLASS_NAME);
            changeClass($icon, VALID_ICON_CLASS_NAME, INVALID_ICON_CLASS_NAME);
        }
    });

    $password.on('input', function () {
        const $input = $(this);
        const $inputContainer = $input.parent();
        if (this.checkValidity()) {
            changeClass($inputContainer, INVALID_INPUT_CLASS_NAME, VALID_INPUT_CLASS_NAME);
        } else {
            changeClass($inputContainer, VALID_INPUT_CLASS_NAME, INVALID_INPUT_CLASS_NAME);
        }
    });

    $email.add($password).on('keyup change', function () {
        const $inputContainer = $(this).parent();
        if (this.value == '') {
            $inputContainer.removeClass(FILLED_INPUT_CLASS_NAME);
        } else {
            $inputContainer.addClass(FILLED_INPUT_CLASS_NAME);
        }
    });

    $showPasswordIcon
        .on('mousedown touchstart', showPassword)
        .on('mouseup mouseout touchend touchcancel', hidePassword);

    function showPassword() {
        $password.attr('type', 'text');
        changeClass($passwordIcon, HIDDEN_PASSWORD_ICON_CLASS_NAME, VISIBLE_PASSWORD_ICON_CLASS_NAME);
        changeClass($showPasswordIcon, SHOW_PASSWORD_ICON_CLASS_NAME, HIDE_PASSWORD_ICON_CLASS_NAME);
    }
    
    function hidePassword() {
        $password.attr('type', 'password');
        changeClass($passwordIcon, VISIBLE_PASSWORD_ICON_CLASS_NAME, HIDDEN_PASSWORD_ICON_CLASS_NAME);
        changeClass($showPasswordIcon, HIDE_PASSWORD_ICON_CLASS_NAME, SHOW_PASSWORD_ICON_CLASS_NAME);
    }

    const changeClass = ($element, currentClass, replacement) => {
        $element.removeClass(currentClass).addClass(replacement);
    };

});