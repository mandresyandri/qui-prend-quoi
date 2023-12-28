import '../styles/buyMeaCoffee.css';
import { IoIosCloseCircle } from "react-icons/io";
import React, { useState } from 'react';

const BuyMeaCoffee = () => {
    // Setting the modal window 
    const [modal, setModal] = useState(false);

    // Onclick parameters
    const openModal = () => {
        setModal(!modal)
    }

    return (
        <>
        <a className="cofeeToDev" onClick={openModal}>
                Payez un café au développeur ou donner un avis :)
        </a>
        {/* Conditionnal for modal */}
        {
            modal && (
                <div className="modalBuyCoffee">
                    <IoIosCloseCircle className="closeBtn" onClick={openModal}/>
                    <h2>
                        Soutenez le développeur ! 
                    </h2>    
                    <p>
                        Clone de Qui-prend-quoi est un service totalement gratuit et sans publicité. 
                        Vous pouvez soutenir le développeur en faisant un don ou en donnant un avis. 
                    </p>    
                    <p>
                        Un grand merci pour votre générosité ! :)
                    </p>
                    <div className="choiceButton">
                        <div className="gift">
                            <a className="choiceButtonAnchor" href="https://paypal.me/mandresyandriFR?country.x=FR&locale.x=fr_FR" target="_blank" rel="nofollow">
                                Faire un don
                            </a>
                        </div>
                        
                        {/* BIENTOT !! Redirection Page get avis ()> Portfolio */}
                        <div className="review">
                            <a className="choiceButtonAnchor" href="#" rel="nofollow"> 
                                Donner un avis
                            </a>
                        </div>
                    </div>
                </div>
            )
        }

        
        </>
        
    )
}

export default BuyMeaCoffee;