import { taskDomGen } from "./taskDom";
import { task } from "./taskForm";
import { taskBundle } from "./taskCard";
import { sideBar  } from "./sidebar";
import './styles.css';

    task.taskStorage();
   taskBundle();

   const newTask = (() => {
       document.getElementById("addTask").addEventListener("click", ()=>{
           document.querySelector(".bgModal").style.display = 'flex';
       })
       document.querySelector(".close").addEventListener("click", ()=>{
           document.querySelector(".bgModal").style.display = 'none';
       })
   })();

   const tabSideBbar = () => {
       
   }

console.log("this page is working.");
console.log("this update is working.");
console.log("sixth update");