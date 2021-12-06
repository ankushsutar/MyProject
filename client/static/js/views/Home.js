import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

        constructor(){
            super();
            this.setTitle("Home");
        }
        async getHtml() {
            return `
            <h1>Welcome</h1>
            <p>
                Currently your viewing Homepage
            </p>
            <p>
                    <a href="/" class='nav__link' data-link>Home</a>.
            </p>


            `;
            
        }
}   