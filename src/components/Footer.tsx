import "../styles/main.scss"
import "../styles/index.scss"
import logo from "../assets/logo.svg"
import logo_text from "../assets/logo_text.svg"
import insta from "../assets/instagram.svg"
import face from "../assets/facebook.svg"
import youtube from "../assets/youtube.svg"

export const Footer = () => {
    return (
        <footer>
            <div className="footer_wrap">
                <div className="footer_logo">
                    <img src={logo} alt="logo" />
                    <img src={logo_text} alt="logo_text" />
                </div>
                <ul>
                    <li>PRODUCT</li>
                    <li>REVIEWS</li>
                    <li>VIDEO</li>
                    <li>DESCRIPTION</li>
                    <li>ADDITIONAL PRODUCTS</li>
                </ul>
                <ul>
                    <li>SHIPPING</li>
                    <li>PAYMENT</li>
                    <li>HOW TO ORDER</li>
                    <li>USER AGREEMENT</li>
                    <li>ADDITIONAL PRODUCTS</li>
                    <li>RETURN</li>
                </ul>
                <div className="footer_block">
                    <p>WE ARE IN SOCIAL NETWORKS:</p>
                    <ul>
                        <li><a href="/"><img src={insta} alt="instagram" /></a></li>
                        <li><a href="/"><img src={face} alt="facebook" /></a></li>
                        <li><a href="/"><img src={youtube} alt="youtube" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer_copyright">
                <p>2023 All right reserved. Development and improvement of <span>QuatroIT</span></p>
            </div>
        </footer>
    )
}