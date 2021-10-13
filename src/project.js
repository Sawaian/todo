import { projectDom } from "./sidebar";

const project = (() =>{

    let projectClicked = 0;

    function isProjectClick(){

        if(projectClicked === 0){
            document.getElementById("projectInput").style.display = "flex";
            projectClicked = 1;
        }

        else if (projectClicked === 1){
            document.getElementById("projectInput").style.display = "none";
            projectClicked = 0;
        }
    }

    document.getElementById("projects").addEventListener("click", () => {
       
        isProjectClick();
        console.log("project added.")
    });


})();