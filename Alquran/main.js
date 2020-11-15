// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
   apiKey: "AIzaSyAQjeNLj4bsCkGWRztFoejE-TT9_WyTEzc",
    authDomain: "new-app-e3b14.firebaseapp.com",
    databaseURL: "https://new-app-e3b14.firebaseio.com",
    projectId: "new-app-e3b14",
    storageBucket: "new-app-e3b14.appspot.com",
    messagingSenderId: "781213835390",
    appId: "1:781213835390:web:95cd38b7ae02f8dee3f82f"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

var con = messagesRef.on('value', gotData, errData)

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });

}
function gotData(data) {
    var email = data.val();
    var keys = Object.keys(email);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var initials = email[k].email;
        console.log(email[k].message)
    }
}
function errData(errData) {
    console.log(errData)
}   