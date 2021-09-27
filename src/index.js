import { bgTask, taskDivDisplay } from "./taskDom";
import { task, taskArray } from "./taskForm";
import { taskDisplay } from "./taskDom";
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

        clearDisplay();
    });

    function clearDisplay(){
        while(  taskDivDisplay.taskDisplay.firstChild) {
            taskDivDisplay.taskDisplay.removeChild( taskDivDisplay.taskDisplay.firstChild);
        }
    }
    
    return {
        clearDisplay,
    }

})();

const todayTask = (() => {

    document.querySelector("#today").addEventListener("click", ()=>{
        // hide
        task.depopulate()
        console.log("listen");
    })

    const today =format(new Date(),'yyyy-MM-dd');


       let dueToday = taskArray.filter(taskDue => taskDue.date === today);

       console.table(dueToday);
       console.log(today);
    

    return {
    }


})();

const inbox = (() => {
    document.querySelector("#inbox").addEventListener("click", ()=>{
        taskDisplay.populateDisplay();
        console.log("inbox populated");
    })
})();


