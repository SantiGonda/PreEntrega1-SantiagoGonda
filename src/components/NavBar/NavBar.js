import ImgGreen from "./imgNav/GS-logo-negro.png";

function NavBar() {
    return (
        <nav className="hero-body navbar">
            <div className="navbar-brand">
                <img src={ImgGreen} alt="LogoGreen" width="200" height="28" />
                </div>
            <div className="navbar-item">
                <p className="title">Club cannábico GreenSheep</p>
            </div>
        </nav>
    )
}

export default NavBar

