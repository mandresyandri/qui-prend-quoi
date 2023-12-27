import '../styles/footer.css';

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
            <a className="cofeeToDev" href="/">
                Payez un café au développeur :)
            </a>
        </footer>
    )
}

export default Footer;