
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

    let titleDisplay  = document.createElement("text");
    titleDisplay.setAttribute("id", "titleDisplay");
    taskCard.display.appendChild(titleDisplay);

    let descriptionDisplay = document.createElement("text");
    descriptionDisplay.setAttribute("id", "descDisplay" );
    taskCard.display.appendChild(descriptionDisplay);


    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        let titleDisplay = document.createElement("text");
        titleDisplay.setAttribute("id", "title" + i);
        titleDisplay.textContent = key.title;
        taskCard.display.appendChild(titleDisplay);

        let descriptionDisplay = document.createElement("text");
        descriptionDisplay.setAttribute("id", "title" + i);
        taskCard.display.appendChild(descriptionDisplay);

        console.log(`${key}: ${localStorage.getItem(key)}`);
    }
    


    let parsed = JSON.parse(localStorage.getItem("title" + 2));

    

// if(parsed != null){
//     titleDisplay.textContent = parsed.title;
//     descriptionDisplay.textContent = parsed.description;
//     }

    console.table(parsed);

})();

function taskBundle(){

}

export { taskBundle }