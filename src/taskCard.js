
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

    titleDisplay.textContent = localStorage.getItem("title");
})();

function taskBundle(){

}

export { taskBundle }