import "../styles/main.scss"
import "../styles/index.scss"
import logo from "../assets/logo.svg"
import logo_text from "../assets/logo_text.svg"
import insta from "../assets/instagram.svg"
import face from "../assets/facebook.svg"
import youtube from "../assets/youtube.svg"
import { Link } from "react-scroll"

export const Footer = () => {
    return (
        <footer>
            <div className="footer_wrap container">
                <div className="footer_logo">
                    <img src={logo} alt="logo" />
                    <img src={logo_text} alt="logo_text" />
                </div>
                <ul>
                    <Link to="product">
                        <li>PRODUCT</li>
                    </Link>
                    <Link to="reviews">
                        <li>REVIEWS</li>
                    </Link>
                    <Link to="video">
                        <li>VIDEO</li>
                    </Link>
                    <Link to="description">
                        <li>DESCRIPTION</li>
                    </Link>
                    <Link to="additional">
                        <li>ADDITIONAL PRODUCTS</li>
                    </Link>
                </ul>
                <ul>
                    <a href="">
                        <li>SHIPPING</li>
                    </a>
                    <a href="">
                        <li>PAYMENT</li>
                    </a>
                    <a href="">
                        <li>HOW TO ORDER</li>
                    </a>
                    <a href="">
                        <li>USER AGREEMENT</li>
                    </a>
                    <a href="">
                        <li>ADDITIONAL PRODUCTS</li>
                    </a>
                    <a href="">
                        <li>RETURN</li>
                    </a>
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