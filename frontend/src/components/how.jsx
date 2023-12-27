import '../styles/how.css';
import Button from './button';

const How = () => {
    return (
        <div id="how">
            <div className="how">
                <h2 className="headingHow">Comment ça marche ?</h2>
                <p className="howParagraph">Un repas entre potes à organiser ? Des vacances en groupe ?</p>
                <p className="howParagraph">Le clone de Qui-prend-quoi.com te permet d'organiser simplement ton évènement en listant ce qu'il faut apporter : aliments, objets, c'est toi qui décides !</p>
                <p className="howParagraph">Crée ta liste et partage-la avec les participants. Libre à chacun ensuite de choisir ce qu'il ramènera le jour J.</p>
                <p className="howParagraph">Mieux on s'organise, plus on profite du moment !</p>
                <Button/>
            </div>
            <div className='steps'>
                <div className="box one">
                    <h3 className="boxTitle">1. Crée ta liste</h3>
                    <p className="boxText">Donne lui un nom, une description puis détaille ce qu'il est nécessaire de ramener.</p>
                </div>
                <div className="box two">
                    <h3 className="boxTitle">2. Partage ta liste</h3>
                    <p className="boxText">Par Facebook, email, SMS ou Whatsapp, envoie le lien à l'ensemble des participants.</p>
                </div>
                <div className="box three">
                    <h3 className="boxTitle">3. Profite du moment</h3>
                    <p className="boxText">Chaque participant choisit simplement ce qu'il ramène pour le jour J. Il n'y a plus qu'à profiter !</p>
                </div>
            </div>
        </div>
    )
}

export default How;