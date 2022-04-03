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
Step-2
1. Create Login Component
2. Create Register Component
3.Create Route for Login and Register


*/