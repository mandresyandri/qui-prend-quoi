import "../styles/navbar.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <a href="/" className="logo">Clone Qui Prend Quoi ?</a>
            <ul className="list-menu">
                <li>
                    <a className="liAnchor" href="#">
                        Accueil
                    </a>
                </li>
                <li>
                    <a className="liAnchor" href="#how">
                        Comment ça marche ?
                    </a>
                </li>
                <li>
                    <a className="liAnchor" href="/"> {/* À ajouter plus tard */}
                        Créer une liste gratuitement   
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;