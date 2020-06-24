function renderizaPerfil(files){
    var profileBox = document.querySelector(".profile");
    var inputPhoto = document.querySelector("#input-profile");
    if(inputPhoto.files.length===0){
        //
    }
    else{
        profileBox.innerHTML = '';

        var arquivo = files[0];
        var imagem = document.createElement("img");
        imagem.setAttribute('width','95px');
        imagem.setAttribute('height','95px');
        imagem.file = arquivo;

        profileBox.appendChild(imagem);

        var reader = new FileReader();
        reader.onload = (function(aImg) {
            return function(e) {
                aImg.src = e.target.result;
            };
        })
        (imagem);
        reader.readAsDataURL(arquivo);
    }
    
}