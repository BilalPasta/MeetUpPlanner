
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAyyqbS1S8KWytJOIW8ZAddlmUIczJzGwU",
    authDomain: "meet-f4387.firebaseapp.com",
    databaseURL: "https://meet-f4387.firebaseio.com",
  };
  firebase.initializeApp(config);
var auth=firebase.auth();
var database=firebase.database().ref('/');
var log=document.getElementById('log');
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
log.innerHTML='LogOut';
  }
  else{
log.innerHTML='LogIn';
  }});


