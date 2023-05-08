import Story1 from "./Story1";
import Story2 from "./Story2";
import Story3 from "./Story3";

export default function Stories() {
    const stories = [{ img: "assets/img/9gag.svg", usuario: "9gag" },
    { img: "assets/img/meowed.svg", usuario: "meowed" },
    { img: "assets/img/barked.svg", usuario: "barked" },
    { img: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
    { img: "assets/img/wawawicomics.svg", usuario: "wawawicomics" },
    { img: "assets/img/respondeai.svg", usuario: "respondeai" },
    { img: "assets/img/filomoderna.svg", usuario: "filomoderna" },
    { img: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet" }]

    return (
    <div class="stories">
        <Story1 />
        <Story2 />
        <Story3 />

        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>);
}