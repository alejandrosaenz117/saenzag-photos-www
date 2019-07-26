var firebase = require("firebase/app");
require("firebase/auth");

const firebaseConfig = {

};
firebase.initializeApp(firebaseConfig);

function createUserWithEmailAndPassword(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
        console.log(res)
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            return 'The password is too weak.';
        } else {
            return errorMessage;
        }
    });
}

function signInWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
            resolve(res);
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    })
}

function onAuthStateChanged(cb) {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user)
                resolve(true)
            } else {
                resolve(false)
            }
        });
    })
}

module.exports = {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
}
