import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

        constructor(){
            super();
            this.setTitle("Signup");
        }
        async getHtml() {
            return `
            <h1>Signup</h1>
            <p>
                Please create an account to proceed
            </p>
            <p>
                    <link><a href="/api/v1/auth/signup" class='nav__link' data-link>Signup</a></link>
            </p>


            <form action="http://localhost:3001/api/v1/auth/signup" method="post" style="border:1px solid #ccc">
            <div class="container">
              <h1>Sign Up</h1>
              <p>Please fill in this form to create an account.</p>
              <hr>
          
              <label for="name"><b>Name</b></label>
              <input type="text" placeholder="Enter name" name="name" required>
          
              <label for="email"><b>Email</b></label>
              <input type="email" placeholder="Enter your email" name="email" required>
          
              <label for="password"><b>Password</b></label>
              <input type="password" placeholder="Enter your Password" name="password" required>
          
              <label>
                <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
              </label>
          
              <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
          
              <div class="clearfix">
                <button type="button" class="cancelbtn">Cancel</button>
                <button type="submit" class="signupbtn">Sign Up</button>
              </div>
            </div>
          </form> 
            
            `;
            
        }
}   