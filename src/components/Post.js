import { useState } from "react"

export default function Post(props) {

    const [postSalvo, setpostSalvo] = useState("bookmark-outline");
    const [postCurtido, setpostCurtido] = useState("heart-outline");
    const [numeroCurtidas, setNumeroCurtidas] = useState(10);

    function salvarPost() {
        if (postSalvo === "bookmark-outline") {
            setpostSalvo("bookmark");
        } else {
            setpostSalvo("bookmark-outline");
        }
    }

    function curtirDescurtirPost() {
        if (postCurtido === "heart-outline") {
            setpostCurtido("heart");
            setNumeroCurtidas(numeroCurtidas + 1);
        } else {
            setpostCurtido("heart-outline")
            setNumeroCurtidas(numeroCurtidas - 1);
        }
    }

    function apenasCurtirPost() {
        if (postCurtido === "heart-outline") {
            setpostCurtido("heart");
            setNumeroCurtidas(numeroCurtidas + 1);
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
                    <img data-test="post-image" src={props.imagemPost} alt={props.nomePost} onClick={apenasCurtirPost} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon data-test="like-post" name={postCurtido} onClick={curtirDescurtirPost} class={postCurtido === "heart" ? "vermelho" : "nenhum"}></ion-icon>
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
                            Curtido por <strong>{props.nomeCurtida}</strong> e <strong data-test="likes-number">outras {numeroCurtidas} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}