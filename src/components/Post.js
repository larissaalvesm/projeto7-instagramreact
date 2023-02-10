import { useState } from "react"

export default function Post(props) {

    const [postSalvo, setpostSalvo] = useState("bookmark-outline");

    function salvarPost() {
        if (postSalvo === "bookmark-outline") {
            setpostSalvo("bookmark");
        } else {
            setpostSalvo("bookmark-outline");
        }
    }


    return (
        <>
            <div data-test="post" class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.imagemUsuario} alt={props.nomeUsuario} />
                        {props.nomeUsuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img data-test="post-image" src={props.imagemPost} alt={props.nomePost} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon data-test="save-post" name={postSalvo} onClick={salvarPost}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.imagemCurtida} alt={props.nomeCurtida} />
                        <div class="texto">
                            Curtido por <strong>{props.nomeCurtida}</strong> e <strong>outras 101.523 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}