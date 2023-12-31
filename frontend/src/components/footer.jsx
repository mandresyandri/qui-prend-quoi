import '../styles/footer.css';
import BuyMeaCoffee from './buyMeaCoffee';


const Footer = () => {
    // Setting the date
    let now = new Date();
    now = now.getFullYear();
    return (
        <footer>
            <p>
                ©{ now } Clone de&nbsp;
                <a 
                className="linkFooter" 
                href="https://www.qui-prend-quoi.com/"
                target='_blank'>
                    qui-prend-quoi.com
                </a> - créateur de liste collaborative en toute simplicité.
            </p>
            <BuyMeaCoffee/>
        </footer>
    )
}

export default Footer;