import { Controller } from "stimulus";

export default class extends Controller {

    static targets = ["login", "password"];

    initialize() {
        console.log('init login');
    }
}