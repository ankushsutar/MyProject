import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

        constructor(){
            super();
            this.setTitle("Login");
        }
        async getHtml() {
            return `
            <h1>Welcome to Login page</h1>
            <p>
                Please Enter yor details to login
            </p>
            <p>
                    <a href="/api/v1/auth/login" class='nav__link' data-link>Login</a>.
            </p>
            

            <form action="http://localhost:3001/api/v1/auth/login" method="post">
            <div class="imgcontainer">
              <img src="/login.png" alt="Profile" class="avatar">
            </div>
          
            <div class="container">
              <label for="username"><b>Username</b></label>
              <input type="email" placeholder="Enter Username" name="username" required>
          
              <label for="password"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="password" required>
          
              <button type="submit">Login</button>
              <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
              </label>
            </div>
          
            
          </form> 

            `;
            
        }
}   