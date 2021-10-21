import { add } from "date-fns";

const sideBar = (() => {
    let content = document.getElementById("content");
    let sideBar = document.createElement("div");
    let inbox = document.createElement("div");
    let today = document.createElement("div");
    let thisWeek = document.createElement("div");
    let projects = document.createElement("div");
    let inboxImage = document.createElement("img");
    let todayImage = document.createElement("img");
    let calendarImage = document.createElement("img");
   
    
        sideBar.setAttribute("id", "sidebar");
        inbox.setAttribute("id", "inbox");
        today.setAttribute("id", "today");
        thisWeek.setAttribute("id", "thisWeek");
        projects.setAttribute("id", "projects")

        
        todayImage.setAttribute("id","todayImage");
        inboxImage.setAttribute("id", "inboxImage");
        calendarImage.setAttribute("id","calendarImage");

        
       ;
        
        inboxImage.src = "Inbox.png";
        todayImage.src = "Today.png"
        calendarImage.src ="calendar.png";
        inbox.textContent = "Inbox";
        today.textContent = "Today";
        thisWeek.textContent ="This Week";
        projects.textContent = "Projects";

        content.appendChild(sideBar);
        sideBar.appendChild(inbox);
        sideBar.appendChild(today);
        sideBar.appendChild(thisWeek);
        sideBar.appendChild(projects);
        

        inbox.appendChild(inboxImage);
        today.appendChild(todayImage);
        thisWeek.appendChild(calendarImage);
    

        return {
            sideBar,
            inbox,
            today,
            thisWeek,
            projects,
            
        }
})();

const projectDom = (() => { 

    let listOfProjects = document.createElement("ul");
            listOfProjects.setAttribute("class", "lists");
            listOfProjects.setAttribute("id","listOfProjects");
            sideBar.projects.appendChild(listOfProjects)

    let addProjectField = document.createElement("input");
            addProjectField.setAttribute("class", "input");
                addProjectField.setAttribute("id","projectInput");
            sideBar.projects.appendChild(addProjectField);

    let addProject = document.createElement("div");
            addProject.setAttribute("id","addProject");
            addProject.textContent = "+";
                sideBar.projects.appendChild(addProject)

        return {
            listOfProjects,
        }

    


})();






export { sideBar, projectDom }
