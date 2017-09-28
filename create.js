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

var eventname=document.getElementById('eventname');
var plannername=document.getElementById('plannername');
var month=document.getElementById('month');
var Year=document.getElementById('Yer');
var day=document.getElementById('day');
var hour=document.getElementById('hour');
var Mints=document.getElementById('Mints');
var AmPm=document.getElementById('am/pm');
var description=document.getElementById('description');
var addres=document.getElementById('addres');




function Createevent(){
 
var CreatedEvent={
EventName:eventname.value,
PlannerName:plannername.value,
Description:description.value,
Address:addres.value,
Date:day.value+' '+month.value+' '+Year.value,
Time:hour.value+' '+Mints.value+' '+AmPm.value,
};
   firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      CreatedEvent.UserId=user.uid;
    database.child('AllEvents').push(CreatedEvent);
eventname.value='';
   plannername.value='';
   description.value='';
   addres.value='';
   day.value='';month.value=''; Year.value='';
   hour.value='';Mints.value='';AmPm.value='';
   location='welcome.html';

  } else {
  
  
  }
});


}
