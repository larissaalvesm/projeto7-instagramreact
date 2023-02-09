export default function Usuario(props) {
    return (
        <div class="usuario">
            <img data-test="profile-image" src={props.imagemUsuario} alt={props.nomeImagemUsuario} />
            <div class="texto">
                <span>
                    <strong>{props.nomeUsuario}</strong>
                    <ion-icon data-test="edit-name" name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}