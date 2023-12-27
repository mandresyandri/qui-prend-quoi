import "../styles/header.css";
import Typewriter from 'typewriter-effect';
import Button from './button';

const Header = () => {
    return (
        <header>
            <div className="bg-img">
                <div className="bg-text">
                    <div className="textContent">
                        <p className="leadText">
                            Besoin de créer une liste participative en 5 min ? 
                        </p>
                        <div className="h1Text">
                            <h1 className="headingText">
                                Créez une liste collaborative pour&nbsp;
                            </h1> 
                            {/* Typewritter effect */}
                            <Typewriter 
                                classname="headingTextdynamic"
                                options={{
                                    strings:["un dîner", "un apéro", "un anniversaire"], 
                                    autoStart: true, 
                                    loop: true
                                }}
                            />
                        </div>
                        <Button className="headingButton"/>
                        <p className="leadText bottomText">S'occuper d'une liste n'a jamais été aussi simple !</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;