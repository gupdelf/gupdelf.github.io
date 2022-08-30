import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("gupdelf | Home");
    };

    async getHtml() {
        return `<h1>Viewing Home</h1>`;
    };
};