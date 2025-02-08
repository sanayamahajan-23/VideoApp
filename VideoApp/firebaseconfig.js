import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

 const firebaseConfig = {
  apiKey: "AIzaSyBUtCyvWIR3N47AKKApW4WNrPzGRs-7_gE",
  authDomain: "videoapp-b7776.firebaseapp.com",
  projectId: "videoapp-b7776",
  storageBucket: "videoapp-b7776.firebasestorage.app",
  messagingSenderId: "1071693525334",
  appId: "1:1071693525334:web:686a99920c8b07649966f7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
