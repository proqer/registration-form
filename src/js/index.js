import { Application } from "stimulus";
import Turbolinks from "turbolinks";

import FormController from "./controllers/form-controller";

(() => {
    Turbolinks.start();
    const application = Application.start();
    application.register("form", FormController);
})();