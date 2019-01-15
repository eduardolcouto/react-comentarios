
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC_v4VPtDMUAcOqGu38_uxOJoKxuVF1mU4",
    authDomain: "comments-b797b.firebaseapp.com",
    databaseURL: "https://comments-b797b.firebaseio.com",
    projectId: "comments-b797b",
    storageBucket: "comments-b797b.appspot.com",
    messagingSenderId: "282578672827"
};
firebase.initializeApp(config)

export const database = firebase.database()
export const auth = firebase.auth()
export const facebookAuth = new firebase.auth.FacebookAuthProvider()
