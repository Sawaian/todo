import { bgTask } from "./taskDom";
import { task } from "./taskForm";
import { taskDisplay } from "./taskCard";
import { sideBar  } from "./sidebar";
import './styles.css';

    task.taskStorage();

   const newTask = (() => {
       document.getElementById("addTask").addEventListener("click", ()=>{
           document.querySelector(".bgModal").style.display = 'flex';
       })
       document.querySelector(".close").addEventListener("click", ()=>{
           document.querySelector(".bgModal").style.display = 'none';
       })
   })();

   // closes the task card.
   const closeCurrentTask = (() =>{

    document.querySelector(".close2").addEventListener("click", ()=>{
        console.log("clicked");
        document.querySelector(".bgTask").style.display = 'none';

        while( bgTask.modalTask.firstChild) {
            bgTask.modalTask.removeChild( bgTask.modalTask.firstChild);
        }
    })


   })();

   const tabSideBbar = () => {
       
   }

console.log("this page is working.");
console.log("this update is working.");
console.log("sixth update");