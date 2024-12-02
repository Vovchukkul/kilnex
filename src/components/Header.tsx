import '../styles/index.scss'
import '../styles/main.scss'
import logo from '../assets/logo_kilnex.svg';
import { Link, animateScroll as scroll } from 'react-scroll';

export const Header = () => {
    return (
        <header className='header container'>
            <div className="header_logo">
                <a href="/"><img className='header_logo' src={logo} alt="logo1" /></a>
            </div>

            <nav>
                <ul>
                    <Link to="product" smooth={true} duration={500}>
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
            </nav>

            <a href="tel:11234567890">+1(123)456-7890</a>
        </header>
    )
}