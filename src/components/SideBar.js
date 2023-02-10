import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";
import React from "react";

export default function SideBar() {

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
        <div className="sidebar">
            <Usuario nomeUsuario={nomeUsuario} foto={foto} alterarNome={alterarNome} alterarFoto={alterarFoto} />

            <Sugestoes />

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}