import { task, taskArray } from "./taskForm";
import { closeTask } from "./index";
//iife to generate dom grid to hold nodes generated by this.

const taskList = (() => {
    let content = document.getElementById("content");
        let display = document.createElement("ul");
           let header = document.createElement("header");
                 display.setAttribute("id", "display");
             header.setAttribute("class", "header");
            header.textContent = "The Due List"
        content.appendChild(header);
    content.appendChild(display);

return {
    display,
    content,
    }
})();


// Creates a background for the add task event.
const background = (() => {
    let bgModal= document.createElement("div");
        let modal = document.createElement("div");
            let close = document.createElement("div");
                let addTask = document.createElement("div");
                    bgModal.setAttribute("name", "title");
                bgModal.setAttribute("class", "bgModal");
            modal.setAttribute("class", "modal");
        close.setAttribute("class","close");
            addTask.setAttribute("class","addTask");
                addTask.setAttribute("id","addTask");
                    addTask.textContent = "+";
                        close.textContent = "+";
                     taskList.content.appendChild(bgModal);
                bgModal.appendChild(modal);
            modal.appendChild(close);
        taskList.content.appendChild(addTask);

return  {
    modal,
        }

})();

// create a dom for the get of title. 
// Generates dom for title.

const taskForm = (() => {
    let form = document.createElement("div");
    let title = document.createElement("input");
    let dueDate = document.createElement("input");
    let description = document.createElement("input");
    let submit = document.createElement("button");
    let priorityDiv = document.createElement("div");
    let priorityLow = document.createElement("button");
    let priorityMedium = document.createElement("button");
    let priorityHigh = document.createElement("button");

            form.setAttribute("class", "submitTaskForm");
            title.setAttribute("name", "title");
            title.setAttribute("type", "text");
            title.setAttribute("id", "titleDom");
            title.setAttribute("placeholder", "Title");
            title.setAttribute("class","input")
            description.setAttribute("name", "desc");
            description.setAttribute("type", "text");
            description.setAttribute("id", "descDom");
            description.setAttribute("placeholder", "Description");
            description.setAttribute("class","input")    
                submit.setAttribute('id', "submit");
                dueDate.setAttribute("type", "date");
                dueDate.setAttribute("class", "date");
                dueDate.setAttribute("id", "dueDate");
                 priorityDiv.setAttribute("id","priorityDiv");
                 priorityLow.setAttribute('id', "low");
                 priorityMedium.setAttribute('id', "medium");
                 priorityHigh.setAttribute('id', "high");
                    priorityLow.textContent = "Low";
                    priorityMedium.textContent = "Medium";
                    priorityHigh.textContent = "High";
                    submit.textContent = "Add Task";
            priorityDiv.appendChild(priorityLow);
            priorityDiv.appendChild(priorityMedium);
            priorityDiv.appendChild(priorityHigh);
            form.appendChild(priorityDiv);
            form.appendChild(title);
            form.appendChild(description);
            form.appendChild(submit);
            form.appendChild(dueDate);
            background.modal.appendChild(form);

})();

// Generates dark background for when task related elements are selected.
const bgTask =(() => {

    let bgTask= document.createElement("div");
            bgTask.setAttribute("name", "title");
            bgTask.setAttribute("class", "bgTask");
            taskList.content.appendChild(bgTask);

    // the modal where the task will sit on.
    let modalTask = document.createElement("div");
            modalTask.setAttribute("class", "modalTask");
            bgTask.appendChild(modalTask);

            function taskCloseButton(){
                let close = document.createElement("div");
                close.setAttribute("class", "closeTask");
                close.textContent = "+";
                    modalTask.appendChild(close);
            }


            taskCloseButton();


        // Will be used to close element.
        return{
            bgTask,
            modalTask,
            taskCloseButton,
        }

})();

// A div used to display the task while being edited.
const taskDivDisplay = (() =>{
    
    let taskDisplay = document.createElement("div");
        taskDisplay.setAttribute("class", "taskModal");
          bgTask.modalTask.appendChild(taskDisplay);

            return {
                taskDisplay,
            }
        })();

// Holds all the tasks in the display field. 


const openCurrentTask = () => {
        function openTask(){
        document.querySelector(".bgTask").style.display = 'flex';
        document.querySelector(".modalTask").style.display = 'flex';
        }

        return {
            openTask,
        }
    };

    let openTask = openCurrentTask();

// populate task display
const taskDisplay = (() => {

    function populateDisplay(currentArray){
    for (let i = 0; i < 1; i++) {
        currentArray.forEach(element => {

            // const key = localStorage.key(i);
        let titleDisplay = document.createElement("li");
            
        titleDisplay.setAttribute("id", "title" + i);
            titleDisplay.setAttribute("class", "taskTitle");
            titleDisplay.textContent = element.title; 
            taskList.display.appendChild(titleDisplay);

        // console.log(`${key}: ${localStorage.getItem(key)}`);

        titleDisplay.addEventListener('click',()=>{
     
            openTask.openTask();

            let titleDisplay = document.createElement("div");
            let dueDate = document.createElement("div");
            let completeTask = document.createElement("button");
            let description = document.createElement("div");

                titleDisplay.setAttribute("class", "titleDisplay");
                description.setAttribute("class", "description");
                dueDate.setAttribute("class", "date");
                completeTask.setAttribute("id", "removeBtn");

                titleDisplay.textContent = element.title; 
                dueDate.textContent = element.date;
                description.textContent = element.description;
                completeTask.textContent = "completed";

                // completeTask.setAttribute("class", "button");
                taskDivDisplay.taskDisplay.appendChild(dueDate);
                taskDivDisplay.taskDisplay.appendChild(completeTask);
                taskDivDisplay.taskDisplay.appendChild(titleDisplay);
                taskDivDisplay.taskDisplay.appendChild(description);
            

                // Removes the element task from the array
                document.getElementById("removeBtn").addEventListener("click", () => {
                    console.log("removed");
                        let index = currentArray.indexOf(element);
                             if (index > -1) {
                                  currentArray.splice(index, 1);
                    }
                    closeTask.clearDisplay();
                     localStorage.setItem('taskArray', JSON.stringify(taskArray));
                        task.depopulate();
                            populateDisplay(currentArray);
                });
        })

    });}
}

    populateDisplay(taskArray);

    return {
        populateDisplay,
    }

})();

// Loads both of the dom elements.
const taskDomGen = (() => {
    taskForm();
    taskBody();
})

export { taskDomGen, bgTask, taskDivDisplay, taskDisplay}