import "../styles/index.scss"
import "../styles/main.scss"
import comment_bottom from "../assets/bottom.svg"

export const Comment = () => {
    return (
        <div className="comment_wrap">
            <div className="third_bottom_comment">
                <div className="third_bottom_wrap">
                    <div className="stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                    </div>
                    <span>21.10.2023</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus.</p>
                <div className="third_bottom_second_wrap">
                    <span>Oleksandr</span>
                    <span>aurumbyse@gmail.com</span>
                </div>
            </div>
            <img src={comment_bottom} alt="comment" />
        </div>
    )   
}