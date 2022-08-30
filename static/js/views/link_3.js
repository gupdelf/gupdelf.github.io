import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("gupdelf | link_3");
    };

    async getHtml() {
        return `<h1>Viewing Link_3</h1>`;
    };
};