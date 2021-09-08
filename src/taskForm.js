
//create a get for the local storage. 

const task = (() => {


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


        let title = document.getElementById("titleDom").value;
        let description = document.getElementById("descDom").value;
        let newTask = null;

        newTask = taskObj(title, description)
        taskArray.push(newTask)
        
        // Stores values into task obj. 
            localStorage.setItem('title' + 2, JSON.stringify(newTask));

        console.table(taskArray);
            
    })};

    return{
        taskStorage,
    };

    })();

    export { task }