
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

    localStorage.forEach(element => {

        let titleDisplay  = document.createElement("text");
    titleDisplay[i].setAttribute("id", "titleDisplay" + [i]);
    taskCard.display.appendChild(titleDisplay);

    let descriptionDisplay = document.createElement("text");
    descriptionDisplay.setAttribute("id", "descDisplay" + i);
    taskCard.display.appendChild(descriptionDisplay);


    })

    for(let i = 0; i < localStorage.length; i++ ){
    let parsed = JSON.parse(localStorage.getItem("title" + [i]));

    


    titleDisplay.textContent = parsed.title;
    descriptionDisplay.textContent = parsed.description;
    }

    

    console.table(parsed);

})();

function taskBundle(){

}

export { taskBundle }