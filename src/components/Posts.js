import Post from "./Post";

export default function Posts() {
    return (
        <div class="posts">
            <Post imagemUsuario="assets/img/meowed.svg" nomeUsuario="meowed" imagemPost="assets/img/gato-telefone.svg" nomePost="gato-telefone" imagemCurtida="assets/img/respondeai.svg" nomeCurtida="respondeai" />
            <Post imagemUsuario="assets/img/barked.svg" nomeUsuario="barked" imagemPost="assets/img/dog.svg" nomePost="dog" imagemCurtida="assets/img/adorable_animals.svg" nomeCurtida="adorable_animals" />
        </div>
    )
}