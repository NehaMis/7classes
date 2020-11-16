import firebase  from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCdBFF4gJSAMGOB9yQtUzCRZ6hr5J3PrHo",
    authDomain: "classes-2ae65.firebaseapp.com",
    databaseURL: "https://classes-2ae65.firebaseio.com",
    projectId: "classes-2ae65",
    storageBucket: "classes-2ae65.appspot.com",
    messagingSenderId: "330115015902",
    appId: "1:330115015902:web:748b751209addfc9b3ce4f",
    measurementId: "G-WPF3M9NCBQ"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;