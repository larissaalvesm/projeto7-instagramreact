import React from "react";

export default function Usuario() {

    const fotoInicial = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDexwez6fwjsz-N3lcR3P5xcQH5enbLr9Og&usqp=CAU";

    const [nomeUsuario, setNomeUsuario] = React.useState("usuario_sem_nome");
    const [foto, setFoto] = React.useState(fotoInicial);

    function alterarNome() {
        const novoNome = prompt("Qual é o seu nome?");

        if (novoNome !== "") {
            setNomeUsuario(novoNome);
        }

    }

    function alterarFoto() {
        const novaFoto = prompt("Insira aqui o link da sua nova foto.");

        if (novaFoto !== "") {
            setFoto(novaFoto);
        }
    }


    return (
        <div class="usuario">
            <img data-test="profile-image" src={foto} alt={nomeUsuario} onClick={alterarFoto} />
            <div class="texto">
                <span>
                    <strong>{nomeUsuario}</strong>
                    <ion-icon data-test="name" name="pencil" onClick={alterarNome}></ion-icon>
                </span>
            </div>
        </div>
    )
}