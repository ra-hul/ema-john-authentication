import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* steps for authentication
Intall setup
1.firebase:create project
2. create web app
3. get configuration
4. Initialize firebase
5.Enable auth method

------
Step-2: setup component
1. Create Login Component
2. Create Register Component
3.Create Route for Login and Register

......

<setp:3>: set auth system
1. set up sign in method 
2. set sup sign out method
3. user state
4. speacial observer 
5. return nesessary methids and states form useFirebase
------
Step 4: create auth context(useAuth)
1. create an auth context
2. create context Provide
3.set context Provider context value
4. use Auth Provider
5. create useAuth Hook

Step 5: create private route

1. Create private route
2. set private route
*/