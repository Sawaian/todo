import { projectDom, sideBar } from "./sidebar";
import { task, taskArray } from "./taskForm";
import { taskDisplay } from "./taskDom";


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

            if(projectName == ""){
                openAndCloseProjectInput.closeProjectInput();
                console.log("You need a project Name");
            }

            else{
            
            let newProject =  projectArrayObj(projectName);
            project.projectArray.push(newProject);
            loadProjects.loadProjectList();
            openAndCloseProjectInput.closeProjectInput();

            }
        }
    });

    function projectLog(){
        console.log(projectName);
        
    }

})();

const loadProjects = (() => {

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
            let projectName = document.createElement("li");
                projectName.setAttribute("class", "projectFile");
                projectName.textContent = element.projectTitle;
                    projectDom.listOfProjects.appendChild(projectName);
                    localStorage.setItem('projectArray', JSON.stringify(project.projectArray));
            

            // This allows us to access the particular array of the clicked project.
            // Since all projects are user generated, we need a way to access
            // specific arrays assigned to the user named projects. 
            // This allows the users to specify which array they can pick.
            projectName.addEventListener('click', ()=> { console.log(element.projectTitle)})

            projectName.addEventListener('click', ()=> { 
                
                task.depopulate();

                
                loadProjects.currentProject = element.projectTitle;

                let thisProjectList = taskArray.filter(projectName=> projectName.project == element.projectTitle);
                taskDisplay.populateDisplay(thisProjectList);
                console.log("this is for changing the current value of the selected object.")})
                
                
    
        });
    }

    return {
        loadProjectList,
        currentProject,
    }
})();

export { newProjectName, loadProjects }
