import Sugestao from "./Sugestao";

export default function Sugestoes() {

    const dadosSugestoes = [
        { imagemSugestao: "assets/img/bad.vibes.memes.svg", nomeSugestao: "bad.vibes.memes" },
        { imagemSugestao: "assets/img/chibirdart.svg", nomeSugestao: "chibirdart" },
        { imagemSugestao: "assets/img/razoesparaacreditar.svg", nomeSugestao: "razoesparaacreditar" },
        { imagemSugestao: "assets/img/adorable_animals.svg", nomeSugestao: "adorable_animals" },
        { imagemSugestao: "assets/img/smallcutecats.svg", nomeSugestao: "smallcutecats" }
    ];

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {dadosSugestoes.map((sugestao) => <Sugestao key={sugestao.nomeSugestao} imagemSugestao={sugestao.imagemSugestao} nomeSugestao={sugestao.nomeSugestao} />)}
        </div>
    )
}