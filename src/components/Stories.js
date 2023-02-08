import Story from "./Story";

export default function Stories() {
    return (
        <div class="stories">

            <Story imagem="assets/img/9gag.svg" nomeUsuario="9gag" />
            <Story imagem="assets/img/meowed.svg" nomeUsuario="meowed" />
            <Story imagem="assets/img/barked.svg" nomeUsuario="barked" />
            <Story imagem="assets/img/nathanwpylestrangeplanet.svg" nomeUsuario="nathanwpylestrangeplanet" />
            <Story imagem="assets/img/wawawicomics.svg" nomeUsuario="wawawicomics" />
            <Story imagem="assets/img/respondeai.svg" nomeUsuario="respondeai" />
            <Story imagem="assets/img/filomoderna.svg" nomeUsuario="filomoderna" />
            <Story imagem="assets/img/memeriagourmet.svg" nomeUsuario="memeriagourmet" />

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}