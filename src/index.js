import { bgTask, taskDivDisplay } from "./taskDom";
import { task, taskArray } from "./taskForm";
import { taskDisplay } from "./taskDom";
import { sideBar  } from "./sidebar";
import { loadProjects, newProjectName } from "./project";
import './styles.css';


const {format} = require('date-fns');
const lastDayOfWeek = require('date-fns/lastDayOfWeek')

    task.taskStorage();
    loadProjects.loadProjectList();

const newTask = (() => {
       document.getElementById("addTask").addEventListener("click", ()=>{
           document.querySelector(".bgModal").style.display = 'flex';
            console.log(loadProjects.currentProject);
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

    function sideButtonOpacity(){
        sideBar.inbox.style.opacity = 1;
        sideBar.today.style.opacity = 1;
        sideBar.thisWeek.style.opacity = 1;
    }

    function refreshPage(page){
        switch(page){
            case 0:
                task.depopulate();
                taskDisplay.populateDisplay(taskArray);
                sideButtonOpacity();
                sideBar.inbox.style.opacity = 0.6;
                break;
            case 1:
                task.depopulate()
                let dueToday = taskArray.filter(taskDue => taskDue.date == today);
                taskDisplay.populateDisplay(dueToday);
                sideButtonOpacity();
                sideBar.today.style.opacity = 0.6;
                break;
            case 2:
                task.depopulate();
                dueThisWeek = taskArray.filter(taskDue => taskDue.date >= today && taskDue.date <= lastDayOfWeek);
                taskDisplay.populateDisplay(dueThisWeek);
                sideButtonOpacity();
                sideBar.thisWeek.style.opacity = 0.6;
                break;
            default:
                console.log("default");
        }
    }
    document.querySelector("#today").addEventListener("click", ()=>
    {
        //Adds the page of the clicked category.
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