import { projectDom, sideBar } from "./sidebar";
import { task, taskArray } from "./taskForm";
import { taskDisplay } from "./taskDom";
import { newTask } from ".";


const project = (() =>{

    let projectArray = [];

    let projectClicked = 0;


    if(localStorage.getItem('projectArray')){
        projectArray = JSON.parse(localStorage.getItem('projectArray'));
        console.log(projectArray);
    }


    function projectList(){

        if(projectClicked === 0){
            openAndCloseProjectInput.openProjectInput();
            projectClicked = 1;
            
        }

        else if (projectClicked === 1){
            openAndCloseProjectInput.closeProjectInput();
            projectClicked = 0;
        }
    }

    document.getElementById("addProject").addEventListener("click", () => {
       
        projectList();
        console.log("project added.")
    });

    return {
        projectArray,
        
    }

})();

const openAndCloseProjectInput = (() =>{
    function openProjectInput(){
        document.getElementById("projectInput").style.display = "flex";
    }

    function closeProjectInput(){
        document.getElementById("projectInput").style.display = "none";
    }

    return {
        openProjectInput,
        closeProjectInput,
    }
})();

const projectArrayObj = (title) => {
    let projectTitle = title;
    let array = [];

    return {
        projectTitle,
        array,
    }
}

const newProjectName = (() => {
    
    let projectName;
    // stores the value of the project input field into an object. 
    document.getElementById("projectInput").addEventListener("keyup", function(event){
        if(event.code === 'Enter'){

            projectName = document.getElementById("projectInput").value;
    
            // Closes if project input field is blankt
            if(projectName == ""){
                openAndCloseProjectInput.closeProjectInput();
            }

            else{
            
            let newProject =  projectArrayObj(projectName);
            project.projectArray.push(newProject);
            loadProjects.loadProjectList();
            openAndCloseProjectInput.closeProjectInput();
            }
        }
    });
})();

const loadProjects = (() => {

    function clearProjectStyles(){
        const projectStyles = document.querySelectorAll(".projectFile");
        for(let i = 0; i < projectStyles.length; i++){
            projectStyles[i].style.background = "lightgray";
            projectStyles[i].style.opacity = "80%";
            projectStyles[i].style.fontSize = "16px";
        }
    }

    function depopulate(){
        let display = document.getElementById("listOfProjects");
            while(display.firstChild){
            display.removeChild(display.firstChild);
        }
    }

    let currentProject;

    //Loads the user created projects underneath the Project tab on the sidebar.
    function loadProjectList () {

        depopulate();
       project.projectArray.forEach(element => {

            //creates a div for each project in the array.
            let projectName = document.createElement("li");
                projectName.setAttribute("class", "projectFile");
                projectName.textContent = element.projectTitle;
                    projectDom.listOfProjects.appendChild(projectName);

            // stores the project array in localStorage.
                    localStorage.setItem('projectArray', JSON.stringify(project.projectArray));

                projectName.ondblclick = function (){
                    projectName.remove();
                    let index = project.projectArray.indexOf(element);
                    if (index > -1) {
                        project.projectArray.splice(index, 1);
                        localStorage.setItem('projectArray', JSON.stringify(project.projectArray));
           }


                    };
            

            // This allows us to access the particular array of the clicked project.
            // Since all projects are user generated, we need a way to access
            // specific arrays assigned to the user named projects. 
            // This allows the users to specify which array they can pick.
            projectName.addEventListener('click', ()=> { console.log(element.projectTitle)})

            projectName.addEventListener('click', ()=> {

                clearProjectStyles();
                projectName.style.background  = "gray";
                projectName.style.opacity = "80%";
                projectName.style.fontSize = "20px";
                task.depopulate();
                loadProjects.currentProject = element.projectTitle;

                let thisProjectList = taskArray.filter(projectName=> projectName.project == element.projectTitle);
                taskDisplay.populateDisplay(thisProjectList);
            });
        });
    }

    return {
        loadProjectList,
        currentProject,
    }
})();



export { newProjectName, loadProjects }
