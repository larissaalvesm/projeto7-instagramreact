import Story from "./Story";

export default function Stories() {

    const dadosStories = [
        { imagem: "assets/img/9gag.svg", nomeUsuario: "9gag" },
        { imagem: "assets/img/meowed.svg", nomeUsuario: "meowed" },
        { imagem: "assets/img/barked.svg", nomeUsuario: "barked" },
        { imagem: "assets/img/nathanwpylestrangeplanet.svg", nomeUsuario: "nathanwpylestrangeplanet" },
        { imagem: "assets/img/wawawicomics.svg", nomeUsuario: "wawawicomics" },
        { imagem: "assets/img/respondeai.svg", nomeUsuario: "respondeai" },
        { imagem: "assets/img/filomoderna.svg", nomeUsuario: "filomoderna" },
        { imagem: "assets/img/memeriagourmet.svg", nomeUsuario: "memeriagourmet" }
    ];

    return (
        <div className="stories">
            {dadosStories.map(storie => <Story key={storie.imagem} imagem={storie.imagem} nomeUsuario={storie.nomeUsuario} />)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}