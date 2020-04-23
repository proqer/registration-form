import { Application } from "stimulus";

import LoginController from "./controllers/login-controller";
import RegistrationController from "./controllers/registration-controller";

(() => {
    const application = Application.start();
    application.register("login", LoginController);
    application.register("registration", RegistrationController);
})();