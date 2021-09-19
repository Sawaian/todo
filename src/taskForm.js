
//create a get for the local storage. 

const task = (() => {

    let taskNumber;

    if(localStorage.getItem('taskNumber')){
        taskNumber = parseInt(localStorage.getItem('taskNumber'));
        console.log("local not working.")
    }
    else{
        taskNumber = 0;
        console.log("evaluating local");
    }

    const closeTaskForm = (() => {
        document.querySelector("#submit").addEventListener("click", ()=>{
            document.querySelector(".bgModal").style.display = 'none';
        });
    })();
 

// constructor for objects
  const taskObj = (title, description, date) => {

    let priority;

    return {
        title,
        description,
        date,
        priority,
    }
}

    // Stores objects.
    let taskArray = [];
    let priorityChosen;

    // Stores form inputs to local storage. 
    function taskStorage(){
    let submit = document.getElementById("submit");

    const priorityLevel = (() =>{
        document.getElementById("low").addEventListener('click', () =>{
            priorityChosen ="low";
        })

        document.getElementById("medium").addEventListener('click', () =>{
            priorityChosen ="medium";
        })

        document.getElementById("high").addEventListener('click', () =>{
            priorityChosen ="high";
        })

    })();


    //Event click which stores the values of the fields.
    submit.addEventListener('click', ()=>{
        let title = document.getElementById("titleDom").value;
        let description = document.getElementById("descDom").value;
        let taskDate = document.getElementById("dueDate").value;

    if(title == ""){
           alert("Input title");
           console.log("null read");
       }
    else 
       {
        taskNumber++;
        let newTask = null;

        newTask = taskObj(title, description, taskDate);

        newTask.priority = priorityChosen;

        taskArray.push(newTask)

        console.log(newTask.priority);
        
        // Stores values into task obj.
            localStorage.setItem('title' + taskNumber, JSON.stringify(newTask));
            localStorage.setItem('taskNumber', JSON.stringify(taskNumber));
}
            
    })};

    return{
        taskStorage,

    };

    })();

    export { task }