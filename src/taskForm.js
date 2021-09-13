
//create a get for the local storage. 

const task = (() => {

    let taskNumber;
    
    function incrementTask(){
        return ++taskNumber;
    }

    if(localStorage.getItem(taskNumber) != null){
        taskNumber = 0;
        console.log("local not working.")
    }
    else{
        taskNumber = localStorage.getItem(taskNumber);
        console.log("evaluating local");
    }

    const closeTask = (() => {
        document.querySelector("#submit").addEventListener("click", ()=>{
            document.querySelector(".bgModal").style.display = 'none';
        });
    })();
 

  const taskObj = (title, description) => {

    return {
        title,
        description,
    }
}

    // Stores objects.
    let taskArray = [];

    // Stores form inputs to local storage. 
    function taskStorage(){
    let submit = document.getElementById("submit");

  


    //Event click which stores the values of the fields.
    submit.addEventListener('click', ()=>{

        incrementTask();

        let title = document.getElementById("titleDom").value;
        let description = document.getElementById("descDom").value;
        let newTask = null;

        newTask = taskObj(title, description)
        taskArray.push(newTask)
        
        // Stores values into task obj.
            localStorage.setItem('title' + taskNumber, JSON.stringify(newTask));
            localStorage.setItem('taskNumber', JSON.stringify(taskNumber));
        console.table(taskArray);
            
    })};

    return{
        taskStorage,
    };

    })();

    export { task }