

const task = () => {
    console.log("taskworks")
    let submit = document.getElementById("submit");
    submit.addEventListener('click', ()=>{
        let title = document.getElementById("titleDom").value;
            localStorage.setItem('title', title);
        console.log(localStorage.getItem(title));
    })

    return title;

    }

    export { task }