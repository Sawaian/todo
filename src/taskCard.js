
// Holds all the tasks in the display field. 
const taskCard = (() => {
    let content = document.getElementById("content");
    let display = document.createElement("div");
        display.setAttribute("id", "display");
        content.appendChild(display);

        return {
            display,
        }
})();



// populate task display
const taskDisplay = (() => {

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        let task = JSON.parse(localStorage.getItem(key));

        let titleDisplay = document.createElement("text");
        titleDisplay.setAttribute("id", "title" + i);
        titleDisplay.setAttribute("class", "taskDisplay");
        titleDisplay.textContent = task.title; 
        taskCard.display.appendChild(titleDisplay);

        let descriptionDisplay = document.createElement("text");
        descriptionDisplay.setAttribute("id", "desc" + i);
        descriptionDisplay.setAttribute("class", "taskDisplay")
        descriptionDisplay.textContent = task.description;
        taskCard.display.appendChild(descriptionDisplay);

        console.log(`${key}: ${localStorage.getItem(key)}`);
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