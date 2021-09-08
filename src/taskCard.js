
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

    let titleDisplay = document.createElement("text");
    titleDisplay.setAttribute("id", "titleDisplay");
    taskCard.display.appendChild(titleDisplay);

    let descriptionDisplay = document.createElement("text");
    descriptionDisplay.setAttribute("id", "descDisplay");
    taskCard.display.appendChild(descriptionDisplay);

    let parsed = JSON.parse(localStorage.getItem("title2"));


    titleDisplay.textContent = parsed.title;
    descriptionDisplay.textContent = parsed.description;

    

    console.table(parsed);

})();

function taskBundle(){

}

export { taskBundle }