import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

        constructor(){
            super();
            this.setTitle("Policymanagement");
        }
        async getHtml() {
            return `
            <h1>Policy Management </h1>
            <p>
                Here you can manage your policies
            </p>
            <p>
                    <a href="/api/v1/policymanagement" class='nav__link' data-link>Policymanagement</a>.
            </p>


            `;
            
        }
}   