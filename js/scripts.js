// //User Interface
// $(document).ready(function(){

// $("#morocco").click(function(){
//   $("#display-m").append("Landmark: " + destination1.landmark + " Year of visit:" + destination1.year);
// });
// $("#vietnam").click(function(){
//   $("#display-v").append("Landmark: " + destination2.landmark + " Year of visit:" + destination2.year);
// });
// $("#patagonia").click(function(){
//   $("#display-p").append("Landmark: " + destination3.landmark + " Year of visit:" + destination3.year);
// });

// });

// //Business logic

// function Place(){
//   this.destinations = {};
// }

// Place.prototype.addDestination = function(destination){
//   this.destinations[destination] = destination;
// }

// function Destination(location, landmark, year){
//   this.location = location;
//   this.landmark = landmark;
//   this.year = year;
// }


// Destination.prototype.info = function(){
//   return this.location + " " + this.landmark + " " + this.year;
// }

// let places = new Place();
// let destination1 = new Destination("Morocco","Food here is amazing!", "2021");
// let destination2 = new Destination("Vietnam","The Mountains here are so nice!", "2020");
// let destination3 = new Destination("Patagonia","The views here are unique!", "2021");

// places.addDestination(destination1);
// places.addDestination(destination2);
// places.addDestination(destination3);
// console.log(destination1.location);

///////////////////////////////To do List code below

//UI

$(document).ready(function(){

  let todoList = new TodoList();

  $("#add-task").click(function(){
  const userTaskCompleted = document.getElementById("checked").checked;
  const userTaskDate = document.getElementById("date").value;
  const userTaskInformation = document.getElementById("info").value;
  const userTaskType = document.getElementById("type").value;

  var array = [];
  let userTask = new Task(userTaskCompleted, userTaskDate, userTaskInformation, userTaskType);
  todoList.addTask(userTask);

  array.push(todoList);

  todoList.removeTask(3);

  array.forEach(element => {
    console.log(element);
    $("#output").html(userTask.id + " " + userTask.completed + " " + userTask.date + " " + userTask.information
    + " " + userTask.type);
    });
  });

  
});

 //Business logic 

 function TodoList(){
  this.tasks = {};
  this.currentId = 0;
 }

 TodoList.prototype.assignId = function(){
   this.currentId += 1;
   return this.currentId;
 }

 TodoList.prototype.addTask = function(task){
    task.id = this.assignId();
    this.tasks[task.id] = task;
 }

 TodoList.prototype.removeTask = function(id){
   if(this.tasks[id] === undefined){
     return false;
   }
   delete this.tasks[id];
   return true;
 }
 

 function Task(completed, date, information, type){
    this.completed = completed;
    this.date = date;
    this.information = information;
    this.type = type;
 }

//  console.log(userTask.id + " " + userTask.completed + " " + userTask.date+ " " + userTask.type);


 
