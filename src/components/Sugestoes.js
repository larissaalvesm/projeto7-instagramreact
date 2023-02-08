import Sugestao from "./Sugestao";

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <Sugestao imagemSugestao="assets/img/bad.vibes.memes.svg" nomeSugestao="bad.vibes.memes" />
            <Sugestao imagemSugestao="assets/img/chibirdart.svg" nomeSugestao="chibirdart" />
            <Sugestao imagemSugestao="assets/img/razoesparaacreditar.svg" nomeSugestao="razoesparaacreditar" />
            <Sugestao imagemSugestao="assets/img/adorable_animals.svg" nomeSugestao="adorable_animals" />
            <Sugestao imagemSugestao="assets/img/smallcutecats.svg" nomeSugestao="smallcutecats" />
        </div>
    )
}