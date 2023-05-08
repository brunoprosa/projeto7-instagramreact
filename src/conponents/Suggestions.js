import Suggestion1 from "./Suggestion1";
import Suggestion2 from "./Suggestion2";
import Suggestion3 from "./Suggestion3";

export default function Suggestions() {
    const sugestoes = [
        { img: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes" },
        { img: "assets/img/chibirdart.svg", nome: "chibirdart" },
        { img: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar" },
        { img: "assets/img/adorable_animals.svg", nome: "adorable_animals" },
        { img: "assets/img/smallcutecats.svg", nome: "smallcutecats" }
    ];

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Suggestion1 />
            <Suggestion2 />
            <Suggestion3 />
        </div>
    );
}