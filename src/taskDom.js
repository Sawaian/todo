
//iife to generate dom grid to hold nodes generated by this.

const taskList = (() => {
    let content = document.getElementById("content");
      let body = document.getElementById("body");
        let display = document.createElement("ul");
            display.setAttribute("id", "display");
             content.appendChild(display);

             let header = document.createElement("header");
                header.setAttribute("class", "header");
                   content.appendChild(header);

        return {
            display,
            content,
        }
    })();


// Creates a background for the add task event.
const background = (() => {


    let bgModal= document.createElement("div");
            bgModal.setAttribute("name", "title");
            bgModal.setAttribute("class", "bgModal");

    let modal = document.createElement("div");
            modal.setAttribute("class", "modal");


    let close = document.createElement("div");
            close.setAttribute("class","close");
            close.textContent = "+";

    let addTask = document.createElement("div");
            addTask.setAttribute("class","addTask");
            addTask.setAttribute("id","addTask");
            addTask.textContent = "+";


        taskList.content.appendChild(bgModal);
        bgModal.appendChild(modal);
        modal.appendChild(close);
        taskList.display.appendChild(addTask);

        return{
            modal,
        }

})();

// create a dom for the get of title. 
// Generates dom for title.

const taskForm = (() => {
    let form = document.createElement("div");
    
        // form.setAttribute("action", "submit.php");

        let title = document.createElement("input");
            title.setAttribute("name", "title");
            title.setAttribute("type", "text");
            title.setAttribute("id", "titleDom");
            title.setAttribute("class","input")

        let description = document.createElement("input");
            description.setAttribute("name", "desc");
            description.setAttribute("type", "text");
            description.setAttribute("id", "descDom");
            description.setAttribute("class","input")

        let submit = document.createElement("button");
            submit.setAttribute('id', "submit");

        let priorityLow = document.createElement("button");
                 priorityLow.setAttribute('id', "low");
                 priorityLow.textContent = "Low";

        let priorityMedium = document.createElement("button");
                 priorityMedium.setAttribute('id', "medium");
                 priorityMedium.textContent = "Medium";

        let priorityHigh = document.createElement("button");
                 priorityHigh.setAttribute('id', "high");
                 priorityHigh.textContent = "High";

                
            form.appendChild(title);
            form.appendChild(description);
            form.appendChild(submit);
            form.appendChild(priorityLow);
            form.appendChild(priorityMedium);
            form.appendChild(priorityHigh);
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
                close.setAttribute("class", "close2");
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

    for (let i = 0; i < localStorage.length; i++) {

        const key = localStorage.key(i);

        let task = JSON.parse(localStorage.getItem(key));
        let titleDisplay = document.createElement("li");
            
        titleDisplay.setAttribute("id", "title" + i);
            titleDisplay.setAttribute("class", "taskTitle");
            titleDisplay.textContent = task.title; 
            taskList.display.appendChild(titleDisplay);

        // console.log(`${key}: ${localStorage.getItem(key)}`);

        titleDisplay.addEventListener('click',()=>{
     
            openTask.openTask();

            let titleDisplay = document.createElement("div");
                titleDisplay.setAttribute("class", "titleDisplay");
                titleDisplay.textContent = task.title; 
                taskDivDisplay.taskDisplay.appendChild(titleDisplay);
        })
    }

})();




// Loads both of the dom elements.
const taskDomGen = (() => {
    taskForm();
    taskBody();
})

export { taskDomGen, bgTask, taskDivDisplay}