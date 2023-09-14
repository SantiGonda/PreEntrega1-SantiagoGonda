import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";

function App() {

    return (
        <div>
            <section className="hero is-primary">
                <NavBar />
            </section>
            <div className="container">
<ItemListContainer />
            </div>
        </div>
    )
};
export default App;
