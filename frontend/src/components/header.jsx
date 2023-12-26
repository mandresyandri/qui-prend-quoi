import "../styles/header.css";
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <header>
            <div className="bg-img">
                <div className="bg-text">
                    <p className="leadText">
                        Besoin de créer une liste participative en 5 min ? 
                    </p>
                    <h1 className="headingText">Créez une liste collaborative pour</h1> 
                    {/* Type writter effect */}
                    <Typewriter 
                        options={{
                            strings:["un dîner", "un apéro","un anniversaire"], 
                            autoStart: true, 
                            loop: true
                        }}
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;