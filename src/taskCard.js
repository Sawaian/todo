import { taskForm } from "./taskDom";
// Holds all the tasks in the display field. 
const taskList = (() => {
    let content = document.getElementById("content");
    let display = document.createElement("ul");
        display.setAttribute("id", "display");
        content.appendChild(display);

        return {
            display,
            content,
        }
})();



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

        console.log(`${key}: ${localStorage.getItem(key)}`);

        titleDisplay.addEventListener('click',()=>{
            document.querySelector(".bgModal").style.display = 'flex';
            let taskDisplay = document.createElement("div");
            taskDisplay.setAttribute("class", "taskModal");
            taskForm.bgModal.appendChild(taskDisplay);

            let titleDisplay = document.createElement("li");
                titleDisplay.setAttribute("class", "titleDisplay");
                titleDisplay.textContent = task.title; 
                taskDisplay.appendChild(titleDisplay);
        })
    }
    


    // let parsed = JSON.parse(localStorage.getItem("title" + 2));

    

// if(parsed != null){
//     titleDisplay.textContent = parsed.title;
//     descriptionDisplay.textContent = parsed.description;
//     }

    // console.table(parsed);

})();

function taskBundle(){

}

export { taskBundle }