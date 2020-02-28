import firebase from 'firebase/app';
import 'firebase/firestore';

    const config = {
        apiKey: "AIzaSyCrIn6bLBBCIcw6ymNSzFxM1lF5VUSxavg",
        authDomain: "to-do-list-b68dc.firebaseapp.com",
        databaseURL: "https://to-do-list-b68dc.firebaseio.com",
        projectId: "to-do-list-b68dc",
        storageBucket: "to-do-list-b68dc.appspot.com",
        messagingSenderId: "178269174625",
        appId: "1:178269174625:web:d93a962d25a4e5e4586320",
        measurementId: "G-TTQJ1BNL14"
      };
      // Initialize Firebase
      firebase.initializeApp(config);
      //firebase.analytics();
export default firebase;
