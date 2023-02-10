export default function Story(props) {
    return (
        <>
            <div className="story">
                <div className="imagem">
                    <img src={props.imagem} alt={props.nomeUsuario} />
                </div>
                <div className="usuario">
                    {props.nomeUsuario}
                </div>
            </div>
        </>
    )
}