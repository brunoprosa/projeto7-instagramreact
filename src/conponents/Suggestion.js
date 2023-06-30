export default function Suggestion({name, image, reason}) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={image} alt={name} />
                <div class="texto">
                    <div class="nome">{name}</div>
                    <div class="razao">{reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}