import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

        constructor(){
            super();
            this.setTitle("Groupmanagement");
        }
        async getHtml() {
            return `
            <h1>Group Management</h1>
            <p>
                Cuurrently your on Group Management
            </p>
            <p>
                    <a href="/api/v1/groupmanagement" class='nav__link' data-link>Groupmanagemnt</a>.
            </p>

            
            `;
            
        }
}   