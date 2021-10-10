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
        inboxImage.setAttribute("id", "inboxImage");

        today.setAttribute("id", "today");
        todayImage.setAttribute("id","todayImage");
        calendarImage.setAttribute("id","calendarImage");
        thisWeek.setAttribute("id", "thisWeek");
        
        projects.setAttribute("id", "projects");
        
        inboxImage.src = "Inbox.png";
        todayImage.src = "Today.png"
        calendarImage.src ="calendar.png";
        inbox.textContent = "Inbox";
        today.textContent = "Today";
        thisWeek.textContent ="This Week";

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


export { sideBar }
