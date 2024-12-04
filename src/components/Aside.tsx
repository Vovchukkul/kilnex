import { Link } from "react-scroll"
import '../styles/index.scss'
import '../styles/main.scss'

type Props = {
    click: () => void,
}

export const Aside: React.FC<Props> = ({ click }) => {
    return (
        <div className="aside container">
            <nav>
                <ul>
                    <Link to="product" smooth={true} duration={500}>
                        <li onClick={() => click()}>PRODUCT</li>
                    </Link>
                    <Link to="reviews">
                        <li onClick={() => click()}>REVIEWS</li>
                    </Link>
                    <Link to="video">
                        <li onClick={() => click()}>VIDEO</li>
                    </Link>
                    <Link to="description">
                        <li onClick={() => click()}>DESCRIPTION</li>
                    </Link>
                    <Link to="additional">
                        <li onClick={() => click()}>ADDITIONAL PRODUCTS</li>
                    </Link>
                </ul>
            </nav>            
        </div>
    )
}