import AbstractView from "./AbstractView.js";


export default class extends AbstractView {

        constructor(){
            super();
            this.setTitle("Users");
        }
        async getHtml() {
            return `
            <h1>Users</h1>
            <p>
                List of all the users
            </p>
            <p>
                    <link><a href="/api/v1/users" class='nav__link' data-link>Users</a></link>
            </p>

            <form action="http://localhost:3001/api/v1/users" method="get">

            <button type="submit">Users</button>
            </form> 

            `;
            
        }
}   