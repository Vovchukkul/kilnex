import '../styles/index.scss'
import '../styles/main.scss'
import logo from '../assets/logo.svg';
import logo_text from '../assets/logo_text.svg';

export const Header = () => {
    return (
        <header className='header container'>
            <div className="header_logo">
                <a href="/"><img className='header_logo_img' src={logo} alt="logo1" /></a>
                <a href="/"><img className='header_logo_text' src={logo_text} alt="logo2" /></a>
            </div>

            <nav>
                <ul>
                    <li>PRODUCT</li>
                    <li>REVIEWS</li>
                    <li>VIDEO</li>
                    <li>DESCRIPTION</li>
                    <li>ADDITIONAL PRODUCTS</li>
                </ul>
            </nav>

            <a href="tel:11234567890">+1(123)456-7890</a>
        </header>
    )
}