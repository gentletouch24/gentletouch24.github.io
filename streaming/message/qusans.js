// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
     apiKey: "AIzaSyDBRd6YBujAhoae1BuBwc1256vLQMgJ_ow",
    authDomain: "stream-dth.firebaseapp.com",
    databaseURL: "https://stream-dth.firebaseio.com",
    projectId: "stream-dth",
    storageBucket: "stream-dth.appspot.com",
    messagingSenderId: "1031429362287",
    appId: "1:1031429362287:web:493f9101cafb8d1688b39a",
    measurementId: "G-HFGYVQD9M8"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('qus-ans');

var con = messagesRef.on('value', gotData, errData)

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    //var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    //saveMessage(name, company, email, phone, message);
    saveMessage(name, email, phone, message);

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
function saveMessage(name, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
   //     company: company,
        email: email,
        phone: phone,
		ans: "Please wait for answer!",
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