// xxxxxxxxxx Working For Sign Up Form xxxxxxxxxx
// xxxxxxxxxx Full Name Validation xxxxxxxxxx
function checkname(){
    var name = document.getElementById("name");
    var nameFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(name.value.match(nameFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("nameError").style.display = "block";
    }else{
        document.getElementById("nameError").style.display = "none";
    }
}
// xxxxxxxxxx Full cadreid Validation xxxxxxxxxx
function checkcadreid(){
    var cadreid = document.getElementById("cadreid");
    var cadreidFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(cadreid.value.match(cadreidFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("cadreidError").style.display = "block";
    }else{
        document.getElementById("cadreidError").style.display = "none";
    }
}
// xxxxxxxxxx Full cadre Validation xxxxxxxxxx
function checkcadre(){
    var cadre = document.getElementById("cadre");
    var cadreFormate = /^([A-Za-z.\s_-]).{5,}$/;
    var flag;
    if(cadre.value.match(cadreFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("cadreError").style.display = "block";
    }else{
        document.getElementById("cadreError").style.display = "none";
    }
}
// xxxxxxxxxx User Qualification Validation xxxxxxxxxx
function checkdesignation(){
    var designation = document.getElementById("designation").value;
    var flag = false;
    if(designation === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("designationError").style.display = "block";
    }else{
        document.getElementById("designationError").style.display = "none";
    }
}
// xxxxxxxxxx User organisation Validation xxxxxxxxxx
function checkorganisation(){
    var organisation = document.getElementById("organisation").value;
    var flag = false;
    if(organisation === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("organisationError").style.display = "block";
    }else{
        document.getElementById("organisationError").style.display = "none";
    }
}
// xxxxxxxxxx User address Validation xxxxxxxxxx
function checkaddress(){
    var address = document.getElementById("address").value;
    var flag = false;
    if(address === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("addressError").style.display = "block";
    }else{
        document.getElementById("addressError").style.display = "none";
    }
}
// xxxxxxxxxx User phone Validation xxxxxxxxxx
function checkphone(){
    var phone = document.getElementById("phone").value;
    var flag = false;
    if(phone === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("phoneError").style.display = "block";
    }else{
        document.getElementById("phoneError").style.display = "none";
    }
}
// xxxxxxxxxx User econtact Validation xxxxxxxxxx
function checkecontact(){
    var econtact = document.getElementById("econtact").value;
    var flag = false;
    if(econtact === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("econtactError").style.display = "block";
    }else{
        document.getElementById("econtactError").style.display = "none";
    }
}
// xxxxxxxxxx User upazila Validation xxxxxxxxxx
function checkupazila(){
    var upazila = document.getElementById("upazila").value;
    var flag = false;
    if(upazila === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("upazilaError").style.display = "block";
    }else{
        document.getElementById("upazilaError").style.display = "none";
    }
}
// xxxxxxxxxx User dob Validation xxxxxxxxxx
function checkdob(){
    var dob = document.getElementById("dob").value;
    var flag = false;
    if(dob === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("dobError").style.display = "block";
    }else{
        document.getElementById("dobError").style.display = "none";
    }
}
// xxxxxxxxxx User division Validation xxxxxxxxxx
function checkdivision(){
    var division = document.getElementById("division").value;
    var flag = false;
    if(division === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("divisionError").style.display = "block";
    }else{
        document.getElementById("divisionError").style.display = "none";
    }
}
// xxxxxxxxxx User district Validation xxxxxxxxxx
function checkdistrict(){
    var district = document.getElementById("district").value;
    var flag = false;
    if(district === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("districtError").style.display = "block";
    }else{
        document.getElementById("districtError").style.display = "none";
    }
}
// xxxxxxxxxx User Location Validation xxxxxxxxxx
function checkoffice(){
    var office = document.getElementById("office").value;
    var flag = false;
    if(office === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("officeError").style.display = "block";
    }else{
        document.getElementById("officeError").style.display = "none";
    }
}
// xxxxxxxxxx User Location Validation xxxxxxxxxx
function checkbloodgroup(){
    var bloodgroup = document.getElementById("bloodgroup").value;
    var flag = false;
    if(bloodgroup === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("bloodgroupError").style.display = "block";
    }else{
        document.getElementById("bloodgroupError").style.display = "none";
    }
}
// xxxxxxxxxx Email Validation xxxxxxxxxx
function checkemail(){
    var email = document.getElementById("email");
    var emailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if(email.value.match(emailFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("emailError").style.display = "block";
    }else{
        document.getElementById("emailError").style.display = "none";
    }
}
// xxxxxxxxxx Password Validation xxxxxxxxxx
function checkpassword(){
    var password = document.getElementById("password");
    //var passwordFormate = /(?=.*\d)(?=.[a-z])(?=.[A-Z]).{10,}/;      
    var flag = false;
    if(password === ""){
        flag = true;
    }    
    if(flag){
        document.getElementById("passwordError").style.display = "block";
    }else{
        document.getElementById("passwordError").style.display = "none";
    }
}
// xxxxxxxxxx Check user bio characters. It'll use later xxxxxxxxxx
function checkUserBio(){
    var userBio = document.getElementById("userBio").value;
    var flag = false;
    if(userBio.length < 10){
        flag = true;
    }
    if(flag){
        document.getElementById("userBioError").style.display = "block";
    }else{
        document.getElementById("userBioError").style.display = "none";
    }
}
// xxxxxxxxxx Submitting and Creating new user in firebase authentication xxxxxxxxxx
function signUp(){
    var name = document.getElementById("name").value;
	var cadreid = document.getElementById("cadreid").value;
	var cadre = document.getElementById("cadre").value;
    var designation = document.getElementById("designation").value;
    var organisation = document.getElementById("organisation").value;
    var address = document.getElementById("address").value;
    var upazila = document.getElementById("upazila").value;
    var phone = document.getElementById("phone").value;
    var econtact = document.getElementById("econtact").value;
    var dob = document.getElementById("dob").value;
    var division = document.getElementById("division").value;
    var district = document.getElementById("district").value;
    var office = document.getElementById("office").value;
    var bloodgroup = document.getElementById("bloodgroup").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var nameFormate = /^([A-Za-z.\s_-]).{5,}$/;    
    var emailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //var passwordFormate = /(?=.*\d)(?=.[a-z])(?=.[A-Z]).{5,}/;      

    var checknameValid = name.match(nameFormate);
    var checkemailValid = email.match(emailFormate);
    //var checkpasswordValid = password.match(passwordFormate);

    if(checknameValid == null){
        return checkname();
    }else if(cadreid === ""){
        return checkcadreid();
    }else if(cadre === ""){
        return checkcadre();
    }else if(designation === ""){
        return checkdesignation();
    }else if(organisation === ""){
        return checkorganisation();
    }else if(address === ""){
        return checkaddress();
    }else if(phone === ""){
        return checkphone();
    }else if(econtact === ""){
        return checkecontact();
    }else if(upazila === ""){
        return checkupazila();
    }else if(dob === ""){
        return checkdob();
    }else if(division === ""){
        return checkdivision();
    }else if(district === ""){
        return checkdistrict();
    }else if(office === ""){
        return checkoffice();
    }else if(bloodgroup === ""){
        return checkbloodgroup();
    }else if(checkemailValid == null){
        return checkemail();
    }else if(password == null){
        return checkpassword();
    }else{
        firebase.auth().createUserWithEmailAndPassword(email, password).then((success) => {
            var user = firebase.auth().currentUser;
            var uid;
            if (user != null) {
                uid = user.uid;
            }
            var firebaseRef = firebase.database().ref().child('member');
            var userData = {
                name: name,
                cadreid: cadreid,
                cadre: cadre,
                designation: designation,
                organisation: organisation,
                address: address,
                phone: phone,
                econtact: econtact,
                upazila: upazila,
                dob: dob,
                district: district,
                division: division,
                office: office,
                bloodgroup: bloodgroup,
                email: email,
                password: password,
                userFb: "https://www.facebook.com/",
                userTw: "https://twitter.com/",
                userGp: "https://plus.google.com/",
                userBio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda non natus hic omnis impedit velit laboriosam est! Velit ipsa, placeat odio est excepturi, dolores temporibus, rerum soluta fuga dicta voluptas?",
            }
            firebaseRef.child(uid).set(userData);
            swal('Account Successfully Created','Your account has been successfully created. Now you can Login to your account','success'
            ).then((value) => {
                setTimeout(function(){
                    window.location.replace("../index.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                type: 'error',
                title: 'Error',
                text: errorMessage,
            })
        });
    }
}
// xxxxxxxxxx Working For Sign In Form xxxxxxxxxx
// xxxxxxxxxx Sign In Email Validation xxxxxxxxxx
function checkUserSIEmail(){
    var userSIEmail = document.getElementById("userSIEmail");
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if(userSIEmail.value.match(userSIEmailFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("userSIEmailError").style.display = "block";
    }else{
        document.getElementById("userSIEmailError").style.display = "none";
    }
}
// xxxxxxxxxx Sign In Password Validation xxxxxxxxxx
function checkUserSIPassword(){
    var userSIPassword = document.getElementById("userSIPassword");
    //var userSIPasswordFormate = /(?=.*\d)(?=.[a-z])(?=.[A-Z]).{5,}/;      
    var flag = false;
    if(password === ""){
        flag = true;
    }   
    if(flag){
        document.getElementById("userSIPasswordError").style.display = "block";
    }else{
        document.getElementById("userSIPasswordError").style.display = "none";
    }
}
// xxxxxxxxxx Check email or password exsist in firebase authentication xxxxxxxxxx    
function signIn(){
    var userSIEmail = document.getElementById("userSIEmail").value;
    var userSIPassword = document.getElementById("userSIPassword").value;
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //var userSIPasswordFormate = /(?=.*\d)(?=.[a-z])(?=.[A-Z]).{5,}/;      

    var checkemailValid = userSIEmail.match(userSIEmailFormate);
    //var checkpasswordValid = userSIPassword.match(userSIPasswordFormate);

    if(checkemailValid == null){
        return checkUserSIEmail();
    }else if(checkpassword == null){
        return checkUserSIPassword();
    }else{
        firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
            swal({
                type: 'success',
                title: 'Successfully Signed In', 
            }).then((value) => {
                setTimeout(function(){
                    window.location.replace("./pages/profile.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                type: 'error',
                title: 'Error',
                text: errorMessage,
            })
        });
    }
}
// xxxxxxxxxx Working For Profile Page xxxxxxxxxx
// xxxxxxxxxx Get data from server and show in the page xxxxxxxxxx
firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
    //   User is signed in.
        let user = firebase.auth().currentUser;
        let uid
        if(user != null){
            uid = user.uid;
        }
        let firebaseRefKey = firebase.database().ref().child('member').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
            document.getElementById("pfname").innerHTML = dataSnapShot.val().name;
            document.getElementById("pfcadreid").innerHTML = dataSnapShot.val().cadreid;
            document.getElementById("pfcadre").innerHTML = dataSnapShot.val().cadre;
			document.getElementById("pfemail").innerHTML = dataSnapShot.val().email;
            document.getElementById("pfdesignation").innerHTML = dataSnapShot.val().designation;
            document.getElementById("pforganisation").innerHTML = dataSnapShot.val().organisation;
            document.getElementById("pfaddress").innerHTML = dataSnapShot.val().address;
            document.getElementById("pfphone").innerHTML = dataSnapShot.val().phone;
            document.getElementById("pfecontact").innerHTML = dataSnapShot.val().econtact;
            document.getElementById("pfupazila").innerHTML = dataSnapShot.val().upazila;
            document.getElementById("pfdob").innerHTML = dataSnapShot.val().dob;
            document.getElementById("pfdivision").innerHTML = dataSnapShot.val().division;
            document.getElementById("pfdistrict").innerHTML = dataSnapShot.val().district;
            document.getElementById("pfoffice").innerHTML = dataSnapShot.val().office;
            document.getElementById("pfbloodgroup").innerHTML = dataSnapShot.val().bloodgroup;
            // email = dataSnapShot.val().email;
            // password = dataSnapShot.val().password;
            document.getElementById("userPfFb").setAttribute('href', dataSnapShot.val().userFb);
            document.getElementById("userPfTw").setAttribute('href', dataSnapShot.val().userTw);
            document.getElementById("userPfGp").setAttribute('href', dataSnapShot.val().userGp);
            document.getElementById("userPfBio").innerHTML = dataSnapShot.val().userBio;
        })
    } else {
    //   No user is signed in.
    }
});
// xxxxxxxxxx Show edit profile form with detail xxxxxxxxxx
function showEditProfileForm(){
    document.getElementById("profileSection").style.display = "none"
    document.getElementById("editProfileForm").style.display = "block"
    var pfname = document.getElementById("pfname").innerHTML;
    var pfoffice = document.getElementById("pfoffice").innerHTML;
    var pfbloodgroup = document.getElementById("pfbloodgroup").innerHTML;
    var pfcadreid = document.getElementById("pfcadreid").innerHTML;
    var pfemail = document.getElementById("pfemail").innerHTML;
    var pfcadre = document.getElementById("pfcadre").innerHTML;
    var pfdesignation = document.getElementById("pfdesignation").innerHTML;
    var pforganisation = document.getElementById("pforganisation").innerHTML;
    var pfaddress = document.getElementById("pfaddress").innerHTML;
    var pfphone = document.getElementById("pfphone").innerHTML;
    var pfecontact = document.getElementById("pfecontact").innerHTML;
    var pfupazila = document.getElementById("pfupazila").innerHTML;
    var pfdob = document.getElementById("pfdob").innerHTML;
    var pfdivision = document.getElementById("pfdivision").innerHTML;
    var pfdistrict = document.getElementById("pfdistrict").innerHTML;
    var userPfFb = document.getElementById("userPfFb").getAttribute("href");
    var userPfTw = document.getElementById("userPfTw").getAttribute("href");
    var userPfGp = document.getElementById("userPfGp").getAttribute("href");
    var userPfBio = document.getElementById("userPfBio").innerHTML;
    document.getElementById("name").value = pfname; 
    document.getElementById("office").value = pfoffice; 
    document.getElementById("bloodgroup").value = pfbloodgroup; 
    document.getElementById("cadreid").value = pfcadreid; 
    document.getElementById("email").value = pfemail; 
    document.getElementById("cadre").value = pfcadre; 
    document.getElementById("designation").value = pfdesignation; 
    document.getElementById("organisation").value = pforganisation; 
    document.getElementById("address").value = pfaddress; 
    document.getElementById("phone").value = pfphone; 
    document.getElementById("econtact").value = pfecontact; 
    document.getElementById("upazila").value = pfupazila; 
    document.getElementById("dob").value = pfdob; 
    document.getElementById("district").value = pfdistrict; 
    document.getElementById("division").value = pfdivision; 
    document.getElementById("userFacebook").value = userPfFb; 
    document.getElementById("userTwitter").value = userPfTw; 
    document.getElementById("userGooglePlus").value = userPfGp; 
    document.getElementById("userBio").value = userPfBio; 
}
// xxxxxxxxxx Hide edit profile form xxxxxxxxxx
function hideEditProfileForm(){
    document.getElementById("profileSection").style.display = "block";
    document.getElementById("editProfileForm").style.display = "none";
}
// xxxxxxxxxx Save profile and update database xxxxxxxxxx
function saveProfile(){
    let name = document.getElementById("name").value 
    let cadreid = document.getElementById("cadreid").value     
    let cadre = document.getElementById("cadre").value     
	let office = document.getElementById("office").value 
	let bloodgroup = document.getElementById("bloodgroup").value 
    let designation = document.getElementById("designation").value 
    let organisation = document.getElementById("organisation").value 
    let address = document.getElementById("address").value 
    let phone = document.getElementById("phone").value 
    let econtact = document.getElementById("econtact").value 
    let upazila = document.getElementById("upazila").value 
    let dob = document.getElementById("dob").value 
    let email = document.getElementById("email").value 
    let division = document.getElementById("division").value 
    let district = document.getElementById("district").value 
    let userFacebook = document.getElementById("userFacebook").value 
    let userTwitter = document.getElementById("userTwitter").value 
    let userGooglePlus = document.getElementById("userGooglePlus").value 
    let userBio = document.getElementById("userBio").value
    var nameFormate = /^([A-Za-z.\s_-]).{5,}$/; 
    var checknameValid = name.match(nameFormate);
    if(checknameValid == null){
        return checkname();
    }else if(cadreid === ""){
        return checkcadreid();
    }else if(cadre === ""){
        return checkcadre();
    }else if(designation === ""){
        return checkdesignation();
    }else if(organisation === ""){
        return checkorganisation();
    }else if(address === ""){
        return checkaddress();
    }else if(phone === ""){
        return checkphone();
    }else if(econtact === ""){
        return checkecontact();
    }else if(upazila === ""){
        return checkupazila();
    }else if(dob === ""){
        return checkdob();
    }else if(email === ""){
        return checkemail();
    }else if(office === ""){
        return checkoffice();
    }else if(bloodgroup === ""){
        return checkbloodgroup();
    }else if(division === ""){
        return checkdivision();
    }else if(district === ""){
        return checkdistrict();
    }else if(userBio.length < 10){
        return checkUserBio();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref().child('member');
        var userData = {
            name: name,
            cadreid: cadreid,
            cadre: cadre,
            designation: designation,
            organisation: organisation,
            address: address,
            phone: phone,
            econtact: econtact,
            upazila: upazila,
            dob: dob,
            email: email,
			office: office,
			bloodgroup: bloodgroup,
            division: division,
            district: district,
            userFb: userFacebook,
            userTw: userTwitter,
            userGp: userGooglePlus,
            userBio: userBio,
        }
        firebaseRef.child(uid).set(userData);
        swal({
            type: 'success',
            title: 'Successfully Updated',
            text: 'Profile has been successfully updated', 
        }).then((value) => {
            setTimeout(function(){
                document.getElementById("profileSection").style.display = "block";
                document.getElementById("editProfileForm").style.display = "none";
            }, 1000)
        });
    }
}
// xxxxxxxxxx Working For Sign Out xxxxxxxxxx
function signOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        swal({
            type: 'success',
            title: 'Successfully Signed Out', 
        }).then((value) => {
            setTimeout(function(){
                window.location.replace("../index.html");
            }, 1000)
        });
    }).catch(function(error) {
        // An error happened.
        let errorMessage = error.message;
        swal({
            type: 'error',
            title: 'Error',
            text: errorMessage,
        })
    });
}