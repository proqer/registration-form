import { Application } from "stimulus";
import Turbolinks from "turbolinks";

import LoginController from "./controllers/login-controller";
import RegistrationController from "./controllers/registration-controller";

(() => {
    Turbolinks.start();
    const application = Application.start();
    application.register("login", LoginController);
    application.register("registration", RegistrationController);
})();