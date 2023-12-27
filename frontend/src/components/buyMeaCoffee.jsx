import '../styles/buyMeaCoffee.css';
import { IoIosCloseCircle } from "react-icons/io";

const BuyMeaCoffee = () => {
    return (
        <div className="modalBuyCoffee">
            <IoIosCloseCircle className="closeBtn" />
            <h2>
                Soutenez nous ! 
            </h2>    
            <p>
                Clone de Qui-prend-quoi est un service totalement gratuit et sans publicité. 
                Vous pouvez soutenir le développeur en faisant un don ou en donnant un avis. 
            </p>    
            <p>
                Un grand merci pour votre générosité ! :)
            </p>
            <div className="choiceButton">
                {/* Redirection Paypal */}
                <button className="gift">
                    <a className="choiceButtonAnchor" href="#">
                        Faire un don
                    </a>
                </button>
                
                {/* BIENTOT !! Redirection Page get avis ()> Portfolio  */}
                <button className="review">
                    <a className="choiceButtonAnchor" href="#"> 
                        Donner un avis
                    </a>
                </button>
            </div>
        </div>
    )
}

export default BuyMeaCoffee;