export default function Sugestao(props) {
    return (
        <>
            <div class="sugestao">
                <div class="usuario">
                    <img src={props.imagemSugestao} alt={props.nomeSugestao} />
                    <div class="texto">
                        <div class="nome">{props.nomeSugestao}</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
        </>
    )
}