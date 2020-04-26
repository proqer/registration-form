import { Application } from 'stimulus';
import Turbolinks from 'turbolinks';

import FormController from './controllers/form-controller';
import RegistrationController from './controllers/registration-controller';
import LoginController from './controllers/login-controller';

(() => {
    Turbolinks.start();
    const application = Application.start();
    application.register('form', FormController);
    application.register('registration', RegistrationController);
    application.register('login', LoginController);
})();
