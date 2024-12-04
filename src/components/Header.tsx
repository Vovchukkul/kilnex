import '../styles/index.scss'
import '../styles/main.scss'
import logo from '../assets/logo_kilnex.svg';
import { Link, animateScroll as scroll } from 'react-scroll';
import classNames from 'classnames';

import burger from "../assets/burger.svg"
import close from "../assets/close.svg"

type Props = {
    click: () => void,
    isShowNav: boolean
}

export const Header: React.FC<Props> = ({ click, isShowNav }) => {
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
            <div style={{
                backgroundImage: `url(${isShowNav ? close : burger})` 
            }} className={classNames("header_icon")} onClick={() => click()}></div>

            <a href="tel:11234567890">+1(123)456-7890</a>
        </header>
    )
}