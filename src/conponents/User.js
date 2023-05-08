import React  from "react";

export default function User() {
    let [nome, setNome] = React.useState("catanacomics");
    let [img, setImg] = React.useState("assets/img/catanacomics.svg");

    function editarUser(parametro){
        if(parametro === "nome"){
            const novoNome = prompt("Novo nome de usuário");
            if(novoNome) setNome(novoNome);
        }
        if(parametro === "img"){
            const novaImg = prompt("Novo nome de usuário");
            if(novaImg) setImg(novaImg);
        }
    }

    return (
        <div class="usuario">
            <img src={img} alt="imagem de perfil" data-test="profile-image" onClick={() => editarUser("img")} />
            <div class="texto">
                <span>
                    <strong data-test="name">{nome}</strong>
                    <ion-icon name="pencil" data-test="edit-name" onClick={() => editarUser("nome")}></ion-icon>
                </span>
            </div>
        </div>
    );
}