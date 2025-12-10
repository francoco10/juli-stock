const firebaseConfig = {
  apiKey: "AIzaSyDbALtgKWjuoH1_a2mTQ4CEnLVvVQYY3mc",
  authDomain: "gestorpedidos-64bfa.firebaseapp.com",
  projectId: "gestorpedidos-64bfa",
  storageBucket: "gestorpedidos-64bfa.firebasestorage.app",
  messagingSenderId: "90934974940",
  appId: "1:90934974940:web:5e051671e1175fc0091719"
};
const appFirebase = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
