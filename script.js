const myUrl = "https://jsonbox.io/box_39ae5ad169db04082e9c?sort=_createdOn";
// Sorts in the Order that each name was created.

var myData = '{"name":"Drake"}'; //Test Data

function readData(){
  $.ajax({
    url: myUrl,
    type: 'GET',
    dataType: 'json',
    success: (data)=>{
      displayHtml(data);
    }
  });
}
function loadData(){
  $.ajax({
    url: myUrl,
    type: 'POST',
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
function displayHtml(data){
  data.forEach((person)=>{
    $("#team1 ul").append("<li>"+person.name+"</li>");
        console.log(person.name);
    });
}
$(document).ready(function(){
      readData();
});




