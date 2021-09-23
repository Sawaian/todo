

import { taskDisplay } from "./taskDom";

//create a get for the local storage. 

let taskArray = [];

const task = (() => {

    // const closeTaskForm = (() =>{
    //     document.querySelector("#submit").addEventListener("click", ()=>{
    //         document.querySelector(".bgModal").style.display = 'none';
    //   });
    // })();


//     let taskNumber;

//     if(localStorage.getItem('taskNumber')){
//         taskNumber = parseInt(localStorage.getItem('taskNumber'));
//     }
//     else{
//         taskNumber = 0;
//     }

   


    if(localStorage.getItem('taskArray')){
        taskArray = JSON.parse(localStorage.getItem('taskArray'));
        console.log(taskArray);
    }
// constructor for objects
  const taskObj = (title, description, date) => {

    let priority;

    return {
        title,
        description,
        date,
        priority,
    }
}

    // Stores objects.
    let priorityChosen;

    // Stores form inputs to local storage. 
    function taskStorage(){

        function depopulate(){
            let display = document.getElementById("display");
            let taskTitle = document.querySelectorAll("taskTitle");
            let taskItems = display.getElementsByTagName("li");
            for(let i = 0; i < taskItems.length; ++i){
                display.removeChild(taskItems[i])
            }

            while(display.taskItems) {
                display.removeChild(display.taskItems);
            }
        }
    
        let submit = document.getElementById("submit");

    const priorityLevel = (() =>{
        document.getElementById("low").addEventListener('click', () =>{
            priorityChosen ="low";
        })

        document.getElementById("medium").addEventListener('click', () =>{
            priorityChosen ="medium";
        })

        document.getElementById("high").addEventListener('click', () =>{
            priorityChosen ="high";
        })

    })();


    //Event click which stores the values of the fields.
    submit.addEventListener('click', ()=>{
        let title = document.getElementById("titleDom").value;
        let description = document.getElementById("descDom").value;
        let taskDate = document.getElementById("dueDate").value;

    if(title == ""){
           alert("Input title");
           console.log("null read");
       }
    else 
       {

        let newTask = null;

        newTask = taskObj(title, description, taskDate); 

        newTask.priority = priorityChosen;


        taskArray.push(newTask)

        console.log(newTask.priority);
         
        document.querySelector(".bgModal").style.display = 'none';
        
        // Stores values into task obj.
        // Stores array into localStorage. 
            localStorage.setItem('taskArray', JSON.stringify(taskArray));
           
            depopulate();
           taskDisplay.populateDisplay();
            // localStorage.setItem('title' + taskNumber, JSON.stringify(newTask));
            // localStorage.setItem('taskNumber', JSON.stringify(taskNumber));
}
            
    })};

    return{
        taskStorage,

    };

    })();

    export { task, taskArray}