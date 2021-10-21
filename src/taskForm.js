import { taskDisplay } from "./taskDom";
import { changeTaskPage } from "./index";
import { loadProjects } from "./project";

//create a get for the local storage. 

let taskArray = [];

const task = (() => {


    if(localStorage.getItem('taskArray')){
        taskArray = JSON.parse(localStorage.getItem('taskArray'));
        console.log(taskArray);
    }

// Removes the tasks from display. Used in conjuction with adding tasks and switching between storage tasks.
    function depopulate(){
        let display = document.getElementById("display");
            while(display.firstChild){
            display.removeChild(display.firstChild);
        }
    }

// constructor for objects
  const taskObj = (title, description, date, project) => {

    let priority;

    return {
        title,
        description,
        date,
        priority,
        project,
    }
}

    // Stores objects.
    let priorityChosen;

    // Stores form inputs to local storage. 
    function taskStorage(){

    
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
           

                if(loadProjects.currentProject != null){
                    let project = loadProjects.currentProject;
                    newTask = taskObj(title, description, taskDate, project); 
                    newTask.priority = priorityChosen;
                    console.log(newTask.project);
                }
                else {
                newTask = taskObj(title, description, taskDate); 
                newTask.priority = priorityChosen;
                    taskArray.push(newTask)
                }
                document.querySelector(".bgModal").style.display = 'none';

             
        
        // Stores values into task obj.
        // Stores array into localStorage. 
            localStorage.setItem('taskArray', JSON.stringify(taskArray));
                depopulate();
                    changeTaskPage.refreshPage(changeTaskPage.currentPage);
}
            
    })};

    return {
        depopulate,
        taskStorage,
    }

    })();

    export { task, taskArray}