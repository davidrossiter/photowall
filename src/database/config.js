import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCKKzpWWeNV3gS27SbpKQetsNkckC5hvmw",
    authDomain: "photowall-8ec31.firebaseapp.com",
    databaseURL: "https://photowall-8ec31.firebaseio.com",
    projectId: "photowall-8ec31",
    storageBucket: "photowall-8ec31.appspot.com",
    messagingSenderId: "534958164627"
  };

  firebase.initializeApp(config)

const database = firebase.database()

export {database}
