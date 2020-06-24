var nome = document.querySelector("#profile-name");
var corpo = document.querySelector("body");

function showName(){
    var nameLocalStorage = localStorage.getItem("nome");
    if(nameLocalStorage==null){
        nome.innerHTML = "Insira seu nome";
    }else{
        nome.innerHTML = nameLocalStorage;
    }
}

function changeName(){

    var newName = prompt("Digite seu nome");
    if(newName!=null){
        if(newName.trim()!="" && newName.length<=15){
            nome.innerHTML = newName.trim();
            localStorage.setItem("nome",newName.trim());
        }
        else if(newName.trim()==""){
            Swal.fire({
                icon: 'info',
                title: 'Nome de perfil vazio!'
            });
        }
        else if(newName.trim().length>15){
            Swal.fire({
                icon: 'info',
                title: "Nome de perfil excedeu o limite de 15 carateres!"
            });
        }
    }
}

nome.addEventListener('click',changeName);