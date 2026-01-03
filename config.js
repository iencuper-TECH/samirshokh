const firebaseConfig = {
    apiKey: "AIzaSyA9zA0LVrDEvIPtlUbJHenrgYo2EoJubyw",
    authDomain: "test-by-samirshokh.firebaseapp.com",
    projectId: "test-by-samirshokh",
    storageBucket: "test-by-samirshokh.firebasestorage.app",
    messagingSenderId: "105940641906",
    appId: "1:105940641906:web:effee678673ae954b53aeb"
};

// Инициализация Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();