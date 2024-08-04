// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getDatabase, ref, set, update } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBshShSdh8ijK6JtIIbDjC1SHxkkLwVZ8s",
    authDomain: "walkr-dfc85.firebaseapp.com",
    projectId: "walkr-dfc85",
    storageBucket: "walkr-dfc85.appspot.com",
    messagingSenderId: "748409507532",
    appId: "1:748409507532:web:7449d2688cd0d558ca3c69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Set up our register function
function register() {
    // Get all our input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const full_name = document.getElementById('full_name').value;
    const favourite_song = document.getElementById('favourite_song').value;
    const milk_before_cereal = document.getElementById('milk_before_cereal').value;

    // Validate input fields
    if (!validate_email(email) || !validate_password(password)) {
        alert('Email or Password is Outta Line!!');
        return;
    }
    if (!validate_field(full_name) || !validate_field(favourite_song) || !validate_field(milk_before_cereal)) {
        alert('One or More Extra Fields is Outta Line!!');
        return;
    }

    // Move on with Auth
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            // Declare user variable
            const user = auth.currentUser;

            // Add this user to Firebase Database
            const database_ref = ref(database);

            // Create User data
            const user_data = {
                email: email,
                full_name: full_name,
                favourite_song: favourite_song,
                milk_before_cereal: milk_before_cereal,
                last_login: Date.now()
            };

            // Push to Firebase Database
            set(ref(database_ref, 'users/' + user.uid), user_data)
                .then(() => {
                    // Done
                    alert('User Created!!');
                });
        })
        .catch((error) => {
            // Firebase will use this to alert of its errors
            const error_message = error.message;
            alert(error_message);
        });
}

// Set up our login function
function login() {
    // Get all our input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate input fields
    if (!validate_email(email) || !validate_password(password)) {
        alert('Email or Password is Outta Line!!');
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // Declare user variable
            const user = auth.currentUser;

            // Add this user to Firebase Database
            const database_ref = ref(database);

            // Create User data
            const user_data = {
                last_login: Date.now()
            };

            // Push to Firebase Database
            update(ref(database_ref, 'users/' + user.uid), user_data)
                .then(() => {
                    // Done
                    alert('User Logged In!!');
                });
        })
        .catch((error) => {
            // Firebase will use this to alert of its errors
            const error_message = error.message;
            alert(error_message);
        });
}

// Validate Functions
function validate_email(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    return password.length > 6;
}

function validate_field(field) {
    return field != null && field.length > 0;
}
