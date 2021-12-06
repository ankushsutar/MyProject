import Home from "./views/Home.js";
import Users from "./views/Users.js";
import Device from "./views/Device.js";
import Groupmanagement from "./views/Groupmanagement.js";
import Policymanagement from "./views/Policymanagement.js";
import Login from "./views/Login.js";
import Signup from "./views/Signup.js";



const navigateTo = url => {
    history.pushState(null, null, url)
    router();

};



const router = async () => {
    const routes = [

    { path: "/api/v1", view: Home},
    { path: "/api/v1/users", view: Users},
    { path: "/api/v1/device", view: Device},
    { path: "/api/v1/groupmanagement", view: Groupmanagement},
    { path: "/api/v1/policymanagement", view: Policymanagement},
    { path: "/api/v1/auth/login", view: Login},
    { path: "/api/v1/auth/signup", view: Signup},


    ];
    const potentialMatches = routes.map(route =>  {

        return{
            route: route,
            isMatch: location.pathname === route.path
        };
    });
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    
    if (!match){
        match = {
            route: routes[0],
            isMatch: true
        };
    }
    
    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
    
};


window.addEventListener("popstate",router);



document.addEventListener("DOMContentLoaded", () => {


    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {

            e.preventDefault();
            navigateTo(e.target.href);
        }




    });
    router();
});