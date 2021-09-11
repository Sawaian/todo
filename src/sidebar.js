const sideBar = (() => {
    let content = document.getElementById("content");
    let sideBar = document.createElement("div");
    let inbox = document.createElement("div");
    let today = document.createElement("div");
    let thisWeek = document.createElement("div");
    let projects = document.createElement("div");



        sideBar.setAttribute("id", "sidebar");
        inbox.setAttribute("id", "inbox");
        today.setAttribute("id", "today");
        thisWeek.setAttribute("id", "thisWeek");
        projects.setAttribute("id", "projects");

        content.appendChild(sideBar);
        sideBar.appendChild(inbox);
        sideBar.appendChild(today);
        sideBar.appendChild(thisWeek);
        sideBar.appendChild(projects);

    

        return {
            sideBar,
            inbox,
            today,
            thisWeek,
            projects,
            
        }
})();


export { sideBar }
