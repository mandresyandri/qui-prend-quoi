import "../styles/navbar.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <a href="/" className="logo">Qui prends quoi ?</a>
            <ul className="list-menu">
                <li>Accueil</li>
                <li>Comment ça marche ?</li>
                <li>Créer une liste gratuitement</li>
            </ul>
        </nav>
    );
}

export default Navbar;