
 src="https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js"
 src="https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"
src="https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js"

 type="module">
      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyCP3J4ce7KGvPcORuJj_zTWV2FWo5WOhbo",
        authDomain: "roomrate-login-database.firebaseapp.com",
        databaseURL:
          "https://roomrate-login-database-default-rtdb.firebaseio.com",
        projectId: "roomrate-login-database",
        storageBucket: "roomrate-login-database.appspot.com",
        messagingSenderId: "885678144566",
        appId: "1:885678144566:web:4a6366872ff8e7b76a2c97",
      };

      // Initialize Firebase
      const app = firebase.initializeApp(firebaseConfig);
      const auth = firebase.auth(); // Initialize Firebase Authentication


function showLogin() {
  document.getElementById("login").style.display = "block";
  document.getElementById("register").style.display = "none";
}

function showRegister() {
  document.getElementById("login").style.display = "none";
  document.getElementById("register").style.display = "block";
}

$(document).ready(function () {
  $("#login-btn").click(function () {
    var email = $("#logEmail").val(); //get email
    var password = $("#logPassword").val();
    console.log("New user =" + email + " " + password);
    login(email, password);
  });
});

function login(email, password) {
  // Add your login logic here
}

//button listener for registering
$(document).ready(function () {
  $("#register-btn").click(function () {
    var firstName = $("#regFirstName").val(); // Get first name
    var lastName = $("#regLastName").val(); // Get last name
    var email = $("#regEmail").val(); //get email
    var password = $("#regPassword").val();
    console.log(
      "New user =" +
        firstName +
        " " +
        lastName +
        " " +
        email +
        " " +
        password
    );
    register(firstName, lastName, email, password); // Pass first and last name to register function
  });
});

function register(firstName, lastName, email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      // Store additional user info in Firebase Realtime Database
      firebase
        .database()
        .ref("users/" + user.uid)
        .set({
          firstName: firstName,
          lastName: lastName,
          email: email,
        });
      // redirecting the user to a different page after successful registration
      window.location.href = "Homepage.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode, errorMessage);
      document.getElementById("registration-error").textContent =
        errorMessage;
    });
}

