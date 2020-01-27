const sortUrl = "https://jsonbox.io/box_39ae5ad169db04082e9c?sort=_updatedOn";
// Sorts in the Order that each name was created/updated.

const URL = "https://jsonbox.io/box_39ae5ad169db04082e9c";
var testData = 'Evan';
const delURL = URL+"?q"+"="+testData;
var recordID = "5e2b1aa5f7a5660017566170";
const delID= URL+"/"+recordID;


var myData = '{"name":"Evan"}'; //Test Data

function readData(){
  $.ajax({
    url: sortUrl,
    method: 'GET',
    dataType: 'json',
    success: (data)=>{
      displayHtml(data);
    }
  });
}
function loadData(){
  $.ajax({
    url: URL,
    method: 'POST',
    contentType: 'application/json',
    data: myData,
    success: function(data){
      console.log("Success!");
      console.log(data);
    },
    error: function(error){
      console.log(error);
      console.log("Nope!");
    }
  });
}
function buttonData(personID,personName){
  console.log(personName,personID);
}
function displayHtml(data){
  data.forEach((person)=>{
    $("#card-ul-list").append("<li class='list-group-item'>"+person.name+"<button class='btn btn-primary float-right' value='"+person._id+"' id='"+person.name+"' onclick=buttonData(value,id)>Bench</button></li>");
    });  
}
function deleteData(){
  $.ajax({
    url: delID,
    method: 'DELETE',
    contentType: 'application/json',
    //data: '{"name":"Evan}',
    success: function(data){
      console.log("Success!");
      console.log(data);
    },
    error: function(error){
      console.log(error);
      console.log("Not Deleted!");
    }
  });
}


// Main Starts Here
$(document).ready(function(){
      //deleteData()
      readData();
});

