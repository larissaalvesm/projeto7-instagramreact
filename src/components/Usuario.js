export default function Usuario() {

    let nomeUsuario = prompt("Qual é o seu nome?");
    let novaFoto = prompt("Insira aqui o link da sua nova foto.");

    const nomeInicial = "usuario_sem_nome";
    const fotoInicial = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDexwez6fwjsz-N3lcR3P5xcQH5enbLr9Og&usqp=CAU";

    return (
        <div class="usuario">
            <img data-test="profile-image" src={novaFoto !== "" ? novaFoto : fotoInicial} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong>{nomeUsuario !== "" ? nomeUsuario : nomeInicial}</strong>
                    <ion-icon data-test="edit-name" name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}