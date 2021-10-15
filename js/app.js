let taskData = document.getElementById('taskData');
console.log(taskData)
let addBtn = document.getElementById('addBtn');
console.log(addBtn)
let all = document.getElementById('all');
console.log(all)
let notask = document.getElementById('notask');
console.log(notask)



let notaskhied = () => {
    notask.classList.add('display')

}




let shownotask = () => {
    if (all.childElementCount == 0) {
        notask.classList.remove('display')
    }
}


function addTask() {
    let task = taskData.value

    if (taskData.value.length == "") {
        alert("You Must Enter Data")
    } else {
        notaskhied()

        all.innerHTML += `
        <div class ='alert alert-info task'>
        ${task}
        <button class='btn btn-danger delete'> Delete  </button>
        </div>
        `;

        all.addEventListener('click' , function(e){

            if(e.target.classList.contains('task')){
                e.target.classList.toggle('cheked');
            }
        })




        }
    }        
        addBtn.addEventListener('click', addTask);

        document.addEventListener('click', function (e) {
            if (e.target.classList.contains('delete')) {
                e.target.parentElement.remove();
                shownotask()
            }

        })

  