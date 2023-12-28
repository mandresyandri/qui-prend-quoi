import "../styles/navbar.css";
import "../styles/button.css";
import React, {useState} from "react";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
    // Setting the modal window 
    const [modal, setModal] = useState(false);

    // Onclick parameters
    const openModal = () => {
        setModal(!modal)
    }

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
                    <a className="liAnchor" onClick={openModal}>
                        Créer une liste gratuitement
                    </a>
                    {
                        modal && (
                            <div className="modalForm">
                                <IoIosCloseCircle className="closeBtn" onClick={openModal} />
                                <h2>Créer une liste</h2>
                                <form>
                                    <div className="listName">
                                        <span className="formText">Nom de votre liste</span>
                                        <input type="text" placeholder="Veuillez indiquer le nom de votre liste"/>
                                    </div>
                                    <div className="listDescription">
                                        <span className="formText">Description</span>
                                        <textarea placeholder="Renseignez vos informations pratiques..."></textarea>
                                    </div>
                                    <input id="submit" type="submit" value="valider" />
                                </form>
                                <div className="boxInfo">
                                    Votre liste sera disponible pendant 60 jours. <br/>
                                    Elle sera automatiquement supprimée passée cette date.
                                </div>
                            </div>
                            )
                    }
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;