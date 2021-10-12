import { projectDom } from "./sidebar";

const project = (() =>{

    document.getElementById("projects").addEventListener("click", () => {

        document.getElementById("projectInput").style.display = "flex";
        
        console.log("project added.")
    });


})();