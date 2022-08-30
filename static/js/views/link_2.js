import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("gupdelf | link_2");
    };

    async getHtml() {
        return `<h1>Viewing Link_2</h1>`;
    };
};