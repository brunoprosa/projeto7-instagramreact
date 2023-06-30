import { useState } from "react";

export default function Post({post}) {
    console.log(post);

    let [curtidas, setCurtidas] = useState(58931);
    let [salvo, setSalvo] = useState("bookmark-outline");
    let [like, setLike] = useState("heart-outline");
    let [cor, setCor] = useState("preto");

    function salvarPost() {
        if (salvo === "bookmark-outline") setSalvo("bookmark");
        if (salvo === "bookmark") setSalvo("bookmark-outline");
    }

    function darLike(parametro) {
        if (like === "heart-outline") {
            setLike("heart");
            setCor("vermelho");
            setCurtidas(curtidas + 1);
        }
        if (like == "heart" && parametro === "icone") {
            setLike("heart-outline");
            setCor("preto");
            setCurtidas(curtidas - 1);
        }
    }

    return (
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={post.imgUsuario} alt={post.nomeUsuario} />
                    {post.nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" src={post.imgConteudo} alt={post.altConteudo} onClick={() => darLike("img")} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={like} class={cor} data-test="like-post" onClick={() => darLike("icone")} ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={salvo} data-test="save-post" onClick={salvarPost} ></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={post.imgCurtidas} alt={post.altCurtidas} />
                    <div class="texto">
                        Curtido por <strong>{post.altCurtidas}</strong> e <strong data-test="likes-number">outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}