export default function Usuario(props) {

    return (
        <div className="usuario">
            <img data-test="profile-image" src={props.foto} alt={props.nomeUsuario} onClick={props.alterarFoto} />
            <div className="texto">
                <span>
                    <strong data-test="name">{props.nomeUsuario}</strong>
                    <ion-icon data-test="edit-name" name="pencil" onClick={props.alterarNome}></ion-icon>
                </span>
            </div>
        </div>
    )
}