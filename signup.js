function labelcreate(elemt){
document.getElementById(elemt.placeholder).innerHTML=elemt.placeholder;
// elemt.placeholder='';
}


  

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAyyqbS1S8KWytJOIW8ZAddlmUIczJzGwU",
    authDomain: "meet-f4387.firebaseapp.com",
    databaseURL: "https://meet-f4387.firebaseio.com",
  };
  firebase.initializeApp(config);
var auth=firebase.auth();
var database=firebase.database().ref('/');
var Firstname=document.getElementById('firstname');
var Lastname=document.getElementById('lastname');
var emailInput=document.getElementById('Useremail');
var passwordInput=document.getElementById('pass');
var numbr=document.getElementById('num');
var age=document.getElementById('age');


function SinUp(){
var User={
    FirstName:Firstname.value,
    LastName:Lastname.value,
    Email:emailInput.value,
    Password:passwordInput.value,
    Contact:numbr.value,
    Age:age.value
};
console.log(User);

auth.createUserWithEmailAndPassword(User.Email, User.Password).then(function(userinfo){
User.uid=userinfo.uid;
database.child(userinfo.uid+'/UserInfo').push(User);

location='Login.html';
});
Firstname.value='';
Lastname.value='';
emailInput.value='';
passwordInput.value='';
numbr.value='';
age.value='';
};


function LogOut(){
    firebase.auth().signOut().then(function(user) {
  // console.log('Successfully');
  location='index.html'
}).catch(function(error) {
 console.log('UnSuccessfully');});
}