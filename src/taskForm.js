
//create a get for the local storage. 

const task = (() => {

    let taskNumber;

    if(localStorage.getItem(taskNumber) != null){
        taskNumber = localStorage.getItem(taskNumber);
        console.log("evaluating local");
    }
    else{
        taskNumber = 0;
        console.log("local not working.")
    }

 

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

        taskNumber++;
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