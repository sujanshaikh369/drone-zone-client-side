import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthorization = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuthorization;
