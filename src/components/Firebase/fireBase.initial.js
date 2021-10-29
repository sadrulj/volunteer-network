import { initializeApp } from "firebase/app";
import firebaseConfig from "./fireBase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
