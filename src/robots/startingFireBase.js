const {config} = require('dotenv')
config()

const { API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID } = process.env

function robot(){

const firebase = require('firebase');

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

if (db) {
    console.log('FireBase started successfully!')
}

return db

}

module.exports = robot