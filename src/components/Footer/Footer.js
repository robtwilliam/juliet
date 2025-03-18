import './Footer.css'


function Footer() {
    return (
        <div className="footer">
            <div className="footer-cpy">&copy; Copyright 2025, Juliet Goods LLC</div>

            <div className="footer-logo"><img src={require("../../assets/images/logo-white.png")} height={"50px"} width={"50px"} alt="logo"></img></div>
        </div>
    )
}

export default Footer;