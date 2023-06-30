import Post from "./Post";

export default function Posts() {
    const posts = [{
        imgUsuario: "assets/img/meowed.svg", nomeUsuario: "meowed", imgConteudo: "assets/img/gato-telefone.svg",
        altConteudo: "gato-telefone", imgCurtidas: "assets/img/respondeai.svg", altCurtidas: "respondeai"
    },
    {
        imgUsuario: "assets/img/barked.svg", nomeUsuario: "barked", imgConteudo: "assets/img/dog.svg",
        altConteudo: "dog", imgCurtidas: "assets/img/adorable_animals.svg", altCurtidas: "adorable_animals"
    },
    {
        imgUsuario: "assets/img/meowed.svg", nomeUsuario: "meowed", imgConteudo: "assets/img/gato-telefone.svg", 
        altConteudo: "gato-telefone", imgCurtidas: "assets/img/memeriagourmet.svg", altCurtidas: "memeriagourmet"
    }
    ]
    return (
        <div class="posts">
            {posts.map((post) => (
                <Post key = {post.altCurtidas} post = {post}/>
            ))}
        </div>
    );
}