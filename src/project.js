import { projectDom, sideBar } from "./sidebar";


const project = (() =>{

    let projectArray = [];

    let projectClicked = 0;


    if(localStorage.getItem('projectArray')){
        projectArray = JSON.parse(localStorage.getItem('projectArray'));
        console.log(projectArray);
    }

    

    function addProject(newProject){
        projectArray.push(newProject)
    }

    function projectList(){

        if(projectClicked === 0){
            document.getElementById("projectInput").style.display = "flex";
            projectClicked = 1;
            
        }

        else if (projectClicked === 1){
            document.getElementById("projectInput").style.display = "none";
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

const projectArrayObj = (title) => {
    let projectTitle = title;
    let array = [];

    return {
        projectTitle,
        array,
    }
}

const newProjectName = (() => {

    let currentProject;

    let projectName;

    // stores the value of the project input field into an object. 
    document.getElementById("projectInput").addEventListener("keyup", function(event){
        if(event.code === 'Enter'){
            projectName = document.getElementById("projectInput").value;
            let newProject =  projectArrayObj(projectName);
            project.projectArray.push(newProject);
            loadProjects.loadProjectList();
            
        }
    });

    function projectLog(){
        console.log(projectName);
        
    }

    return {
        currentProject,
    }

})();

const loadProjects = (() => {
    //Loads the user created projects underneath the Project tab on the sidebar.
    function loadProjectList () {
       project.projectArray.forEach(element => {
            let projectName = document.createElement("div");
                projectName.setAttribute("class", "projectFile");
                projectName.textContent = element.projectTitle;
                    sideBar.projects.appendChild(projectName);
            

            // This allows us to access the particular array of the clicked project.
            // Since all projects are user generated, we need a way to access
            // specific arrays assigned to the user named projects. 
            // This allows the users to specify which array they can pick.
            projectName.addEventListener('click', ()=> { console.log(element.projectTitle)})

            projectName.addEventListener('click', ()=> { 
                
                newProjectName.currentProject = element;
                console.log("this is for changing the current value of the selected object.")})
    
        });
    }


    return {
        loadProjectList,
    }
})();

export { newProjectName }
