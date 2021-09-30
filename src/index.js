import { bgTask, taskDivDisplay } from "./taskDom";
import { task, taskArray } from "./taskForm";
import { taskDisplay } from "./taskDom";
import { sideBar  } from "./sidebar";
import './styles.css';


const {format} = require('date-fns');
const lastDayOfWeek = require('date-fns/lastDayOfWeek')

    task.taskStorage();


let inboxBtn = true;
let todayBtn = false;
let weekBtn = false;

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


    const today = format(new Date(),'yyyy-MM-dd');


       let dueToday = taskArray.filter(taskDue => taskDue.date == today);
      


       console.table(dueToday);
       console.log(today);


    document.querySelector("#today").addEventListener("click", ()=>
    {
        // hide
     if(todayBtn === false)
        {   todayBtn = true;
            inboxBtn = false;  
            weekBtn = false;  
            task.depopulate()
            taskDisplay.populateDisplay(dueToday);
            console.log(dueToday);
        }
    })


})();

const inbox = (() => {
    document.querySelector("#inbox").addEventListener("click", ()=>
    {
        if(inboxBtn === false)
        {   todayBtn = false;
            inboxBtn = true;
            weekBtn = false;
            task.depopulate();
            taskDisplay.populateDisplay(taskArray);}
            console.log("inbox populated");
    });
})();

const thisWeek = (() => {

    const today = format(new Date(),'yyyy-MM-dd');
    let dueThisWeek = taskArray.filter(taskDue => taskDue.date >= today && taskDue.date <= lastDayOfWeek);
    document.querySelector("#thisWeek").addEventListener("click", ()=> {
        if(weekBtn === false)
        {   todayBtn = false;
            inboxBtn = false;
            weekBtn = true;
            task.depopulate();
            taskDisplay.populateDisplay(dueThisWeek);
        }

        })
    })();

