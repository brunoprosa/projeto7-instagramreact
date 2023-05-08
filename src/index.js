import  ReactDOM  from "react-dom";
import App from "./conponents/App";

function Index(){
    return (
        <body>
            <App />
            <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
        </body>
    );
}

ReactDOM.render(<App /> , document.querySelector(".root"));