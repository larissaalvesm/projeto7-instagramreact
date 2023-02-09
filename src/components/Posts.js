import Post from "./Post";

export default function Posts() {

    const dadosPosts = [
        { imagemUsuario: "assets/img/meowed.svg", nomeUsuario: "meowed", imagemPost: "assets/img/gato-telefone.svg", nomePost: "gato-telefone", imagemCurtida: "assets/img/respondeai.svg", nomeCurtida: "respondeai" },
        { imagemUsuario: "assets/img/barked.svg", nomeUsuario: "barked", imagemPost: "assets/img/dog.svg", nomePost: "dog", imagemCurtida: "assets/img/adorable_animals.svg", nomeCurtida: "adorable_animals" },
        { imagemUsuario: "assets/img/meowed.svg", nomeUsuario: "meowed", imagemPost: "assets/img/gato-telefone.svg", nomePost: "gato-telefone", imagemCurtida: "assets/img/respondeai.svg", nomeCurtida: "respondeai" }

    ];

    return (
        <div class="posts">
            {dadosPosts.map((post) => <Post imagemUsuario={post.imagemUsuario} nomeUsuario={post.nomeUsuario} imagemPost={post.imagemPost} nomePost={post.nomePost} imagemCurtida={post.imagemCurtida} nomeCurtida={post.nomeCurtida} />)}
        </div>
    )
}