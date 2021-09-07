
//create a get for the local storage. 


const initializeTaskNum = (() => {
    let i = 0;
    localStorage.setItem("taskNum", i );
    function incrementI(){
        i++;
    }

    return {
        incrementI,
    }
})();


const task = (() => {
  
  let i = localStorage.getItem(taskNum);

  const taskObj = (title, description) => {
    let taskTitle= title;
    let taskDescription = description;

    return {
        taskTitle,
        taskDescription,
    }
}

    // Stores objects.
    let taskArray = [];

    // Stores form inputs to local storage. 
    function taskStorage(){
    console.log("taskworks")
    let submit = document.getElementById("submit");

    submit.addEventListener('click', ()=>{

        localStorage.setItem("taskNum", i)
            initializeTaskNum.incrementI();
            
        let title = document.getElementById("titleDom").value;
        let description = document.getElementById("descDom").value;
        let newTask = null;

        newTask = taskObj(title, description)
        taskArray.push(newTask)
        
        // Stores values into task obj. 
            localStorage.setItem('title' + 1, title);

        console.table(taskArray);
            
        console.log(localStorage.getItem(title));
    })};

    return{
        taskStorage,
    };

    })();

    



    export { task, initializeTaskNum}