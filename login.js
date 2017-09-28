
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAyyqbS1S8KWytJOIW8ZAddlmUIczJzGwU",
    authDomain: "meet-f4387.firebaseapp.com",
    databaseURL: "https://meet-f4387.firebaseio.com",
  };
  firebase.initializeApp(config);
var auth=firebase.auth();


function sigup(){
    location="signup.html";
}

var auth=firebase.auth();
var Email=document.getElementById('email');
var Password=document.getElementById('pass');

function signin(){

auth.signInWithEmailAndPassword(Email.value, Password.value).then(function(user){
  localStorage.setItem('CurentUser',user.uid);
location='welcome.html';

    alert('');
});

}



function LogOut(){
    firebase.auth().signOut().then(function(user) {
  console.log('Successfully');
  location='index.html'
}).catch(function(error) {
 console.log('UnSuccessfully');});
}