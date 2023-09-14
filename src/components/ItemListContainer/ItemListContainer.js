import ProfileCard from "./../cartWidget/ProfileCard"
import KrypImg from "./img/cards/IMG_0325.JPG";
import CookImg from "./img/cards/IMG_0330.JPG";
import GorImg from "./img/cards/IMG_0315.JPG";

function ItemListContainer() {

    return (
        <section className="columns m-1">
            <div className="column is-4">
                <ProfileCard titulo="Kryptonite" desc="Sativa" img={KrypImg}/>
            </div>
            <div className="column is-4">
                <ProfileCard titulo="Cookies" desc="Índica" img={CookImg}/>
            </div>
            <div className="column is-4">
                <ProfileCard titulo="Gorilla" desc="Híbrida" img={GorImg}/>
            </div>
        </section>
    )
}

export default ItemListContainer