export default function Story({img, usuario}) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={img} alt={usuario} />
            </div>
            <div class="usuario">
                {usuario}
            </div>
        </div>
    );
}