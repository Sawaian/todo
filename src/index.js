import { taskDomGen } from "./taskDom";
// import { task } from "./taskForm";

// const task = () => {
    console.log("taskworks")
    let submit = document.getElementById("submit");
    
    submit.addEventListener('click', ()=>{
        let title = document.getElementById("titleDom").value;
            localStorage.setItem('title', title);
        console.log(localStorage.getItem(title));
    })

    // }

console.log("this page is working.");
console.log("this update is working.");
console.log("second update");