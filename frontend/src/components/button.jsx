import "../styles/button.css";
import { IoIosCloseCircle } from "react-icons/io";
import React, { useState } from "react";

const CtaButton = () => {
    // modal part js
    const [modal, setModal] = useState(false);

    const openBox = () => {
        setModal(!modal)
    }

    return (
        <>
            <div className="ctaButton" onClick={openBox}>Créer une liste gratuitement</div>
            {/* Modal part  */}
            {
                modal && (
                <div className="modalForm">
                    <IoIosCloseCircle className="closeBtn" onClick={openBox} />
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
        </>
    )
}

export default CtaButton;