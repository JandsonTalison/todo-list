var btnCreateTask = document.querySelector(".new-task-button");
var taskContainer = document.querySelector(".tasks-container");
var corpo = document.querySelector("body");
var btnConfirm = document.querySelector(".confirm-task");
var closeLink = document.querySelector(".close-task");
var entrada = document.querySelector(".input-task");
var cortina = document.querySelector(".curtain-task-name");



function openCurtain(){
    entrada.value = "";
    corpo.style.overflow = "hidden";
    cortina.style.height = "100%";
}

function closeCurtain(){
    corpo.style.overflow = "initial";
    cortina.style.height = "0";
}

function changeTaskName(pencil){
    var iconsContainer = pencil.target.parentNode;
    var texto = $(iconsContainer).siblings(".task-title");
    var newTaskName = prompt("Digite o novo nome");
    if(newTaskName!=null){
        if(newTaskName.trim()==""){
            Swal.fire({
                icon: 'error',
                title: 'Nome da tarefa vazio!'
            });
        }
        else if(newTaskName.length>12){
            Swal.fire({
                icon: 'error',
                title: 'Nome da tarefa excedeu o limite de 12 carateres!'
            });
        }
        else{
            texto.text(newTaskName);
        }
    }
}

function deleteTask(task){
    var icone = task.target;
    var iconsContainer = icone.parentNode;
    var contentContainer = iconsContainer.parentNode;
    var taskCard = contentContainer.parentNode;
    var container = taskCard.parentNode;
    Swal.fire({
        title: 'Deletar tarefa?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deletado!'
          )
          container.removeChild(taskCard);
        }
    });
}

function toggleVerification(toggle){
    var container = toggle.target.parentNode;
    var iconsContainer = $(container).siblings(".task-icons");

    var pencil = $(iconsContainer).find(".pencilIcon");

    var texto = $(container).siblings(".task-title");
    if(toggle.target.checked==true){
        texto.css("color","tomato");
        texto.css("text-decoration","line-through");
        texto.css("text-decoration-color","white");
        pencil.css("display","none");
    }
    else{
        texto.css("color","white");
        texto.css("text-decoration","none");
        pencil.css("display","initial");
    }

}


function createTask(){
    var taskName = entrada.value;
    if(taskName!=null){
        if(taskName.trim()==""){
            Swal.fire({
                icon: 'error',
                title: 'Nome da tarefa vazio!'
            });
        }
        else if(taskName.length>12){
            Swal.fire({
                icon: 'error',
                title: 'Nome da tarefa excedeu o limite de 12 carateres!'
            });
        }
        else{
            var task = document.createElement("div");
            task.classList.add("task");
    
            var taskContent = document.createElement("div");
            taskContent.classList.add("task-content");
            task.appendChild(taskContent);
            
            var label = document.createElement("label");
            label.classList.add("switch");
    
            var input = document.createElement("input");
            input.setAttribute("type","checkbox");
            label.appendChild(input);
    
            var span = document.createElement("span");
            span.classList.add("slider");
            span.classList.add("round");
            label.appendChild(span);
    
            var texto = document.createElement("p");
            texto.classList.add("task-title");
            texto.innerHTML = taskName;
    
            var iconsContainer = document.createElement("div");
            iconsContainer.classList.add("task-icons");
    
            var pencilIcon = document.createElement("img");
            pencilIcon.setAttribute("src","../images/pencil.svg");
            pencilIcon.classList.add("pencilIcon");
            iconsContainer.appendChild(pencilIcon);
    
            var trashIcon = document.createElement("img");
            trashIcon.setAttribute("src","../images/trash.svg");
            trashIcon.classList.add("trashIcon");
            iconsContainer.appendChild(trashIcon);
    
            taskContent.appendChild(label);
            taskContent.appendChild(texto);
            taskContent.appendChild(iconsContainer);
            taskContainer.appendChild(task);
    
            pencilIcon.addEventListener("click",changeTaskName);
            trashIcon.addEventListener("click",deleteTask);
            input.addEventListener("change",toggleVerification);
    
        }
    }

    closeCurtain();
    
}

btnCreateTask.addEventListener("click",openCurtain);
closeLink.addEventListener("click",closeCurtain);
btnConfirm.addEventListener("click",createTask);