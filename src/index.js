import { bgTask, taskDivDisplay } from "./taskDom";
import { task, taskArray } from "./taskForm";
import { taskDisplay } from "./taskDom";
import { sideBar  } from "./sidebar";
import './styles.css';


const {format} = require('date-fns');
const lastDayOfWeek = require('date-fns/lastDayOfWeek')

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
const closeTask = (() =>{

    document.querySelector(".closeTask").addEventListener("click", ()=>{
        console.log("clicked");
        clearDisplay();
    });

    function clearBG(){
        document.querySelector(".bgTask").style.display = 'none';
    }

    function clearDisplay(){
                   clearBG();
        while(  taskDivDisplay.taskDisplay.firstChild) {
            taskDivDisplay.taskDisplay.removeChild( taskDivDisplay.taskDisplay.firstChild);
        }
    }
    
    return {
        clearDisplay,
    }

})();

const changeTaskPage = (() => {


    let currentPage = 0;
    const today = format(new Date(),'yyyy-MM-dd');
    let dueToday = taskArray.filter(taskDue => taskDue.date == today);
    let dueThisWeek = taskArray.filter(taskDue => taskDue.date >= today && taskDue.date <= lastDayOfWeek);

    function refreshPage(page){
        switch(page){
            case 0:
                task.depopulate();
                taskDisplay.populateDisplay(taskArray);
                break;
            case 1:
                task.depopulate()
                let dueToday = taskArray.filter(taskDue => taskDue.date == today);
                taskDisplay.populateDisplay(dueToday);
                break;
            case 2:
                task.depopulate();
                dueThisWeek = taskArray.filter(taskDue => taskDue.date >= today && taskDue.date <= lastDayOfWeek);
                taskDisplay.populateDisplay(dueThisWeek);
                break;
            default:
                console.log("default");


        }
    }
    document.querySelector("#today").addEventListener("click", ()=>
    {
        // hide
        refreshPage(1);
        currentPage = 1;
    });

    document.querySelector("#inbox").addEventListener("click", ()=>
    {
        refreshPage(0);
        currentPage = 0;
    });

    document.querySelector("#thisWeek").addEventListener("click", ()=> 
    {
        refreshPage(2);   
        currentPage = 2;      
    });


    return {
        refreshPage,
        currentPage,
    }

})();


export { closeTask, changeTaskPage}