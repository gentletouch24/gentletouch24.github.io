// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyAHtAc5AzgXFrB7BlFSle4Y3DXF9KvEgvU",
    authDomain: "fir-dbtest-c7e30.firebaseapp.com",
    databaseURL: "https://fir-dbtest-c7e30.firebaseio.com",
    projectId: "fir-dbtest-c7e30",
    storageBucket: "fir-dbtest-c7e30.appspot.com",
    messagingSenderId: "173991106019",
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