const Rebase = require('re-base')
const firebase = require('firebase')

const fbaseConfig = {
    apiKey: "AIzaSyDyxNcPibJDAdVjgMSZbqzAHtam3Ct5TwY",
    authDomain: "react-portfolio-bruno.firebaseapp.com",
    databaseURL: "https://react-portfolio-bruno.firebaseio.com",
    projectId: "react-portfolio-bruno",
    storageBucket: "react-portfolio-bruno.appspot.com",
    messagingSenderId: "27810364676",
    appId: "1:27810364676:web:7ba7df7b2d69d9890e2451",
    measurementId: "G-VNC4JCVS3H"
  };
  // Initialize Firebase
  
  const app = firebase.initializeApp(fbaseConfig)
  const config = Rebase.createClass(app.database())

  export const storage = app.storage()
  export const auth = app.auth()

  export default config