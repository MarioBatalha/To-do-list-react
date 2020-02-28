const firestoreService = require("firestore-export-import");
const serviceAccount = require("serviceAccountKey.json");

const databaseURL  = "https://to-do-list-b68dc.firebaseio.com"; 
firestoreService.initiallizeApp(serviceAccount, databaseURL);
firestoreService.restore("api.json");