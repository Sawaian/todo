import { bgTask, taskDivDisplay } from "./taskDom";
import { task, taskArray } from "./taskForm";
import { taskDisplay } from "./taskCard";
import { sideBar  } from "./sidebar";
import './styles.css';

const {format} = require('date-fns');

    task.taskStorage();

const newTask = (() => {
       document.getElementById("addTask").addEventListener("click", ()=>{
           document.querySelector(".bgModal").style.display = 'flex';
       });
       document.querySelector(".close").addEventListener("click", ()=>{
           document.querySelector(".bgModal").style.display = 'none';
       });
   })();

   // closes the task card.
const closeCurrentTask = (() =>{

    document.querySelector(".close2").addEventListener("click", ()=>{
        console.log("clicked");

        document.querySelector(".bgTask").style.display = 'none';

        while(  taskDivDisplay.taskDisplay.firstChild) {
            taskDivDisplay.taskDisplay.removeChild( taskDivDisplay.taskDisplay.firstChild);
        }
    });

})();

const todayTask = (() => {

    const today =format(new Date(),'yyyy-MM-dd');


       let dueToday = taskArray.filter(taskDue => taskDue.date === today);

       console.table(dueToday);
       console.log(today);
    

    return {
    }
})();


