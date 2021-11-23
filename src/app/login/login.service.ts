import {Injectable} from "@angular/core";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Router} from "@angular/router";


@Injectable()
export class LoginService{
  token: any;

  constructor(private router:Router) {
    const firebaseConfig = {
      apiKey: "AIzaSyANCbncyMD_mzM3Fu04UaD2I5fmzDDu6VI",
      authDomain: "listado-personas-a71f1.firebaseapp.com",
      databaseURL: "https://listado-personas-a71f1-default-rtdb.firebaseio.com",
      projectId: "listado-personas-a71f1",
      storageBucket: "listado-personas-a71f1.appspot.com",
      messagingSenderId: "806988358408",
      appId: "1:806988358408:web:971195444c7801283c42bd",
      measurementId: "G-67BMF9ZJ8Q"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }

  login(email:string,password:string){

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        userCredential.user.getIdToken().
        then(( token) =>{
          this.token = token
        }).catch((error)=>{
          const errorMessage = error.message;
          console.log("Error: "+errorMessage)
        });

        this.router.navigate(["/"])
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error: "+errorMessage)
      });
  }

  getIdToken(){
    return this.token;
  }

  isAutenticado(){
    return this.token != null;
  }

  logout(){
    const auth = getAuth();
    signOut(auth)
      .then(() =>{
        this.token = null;
        this.router.navigate(["login"]);
      }).catch((error)=>{
      const errorMessage = error.message;
       console.log('Error al cerrar la sesion '+errorMessage)
      })
  }
}
