import { projectDom } from "./sidebar";

const project = (() =>{

    let projectArray = [];

    let projectClicked = 0;


    if(localStorage.getItem('projectArray')){
        projectArray = JSON.parse(localStorage.getItem('projectArray'));
        console.log(projectArray);
    }

    

    function addProject(){
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


})();
