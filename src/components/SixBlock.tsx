import React from 'react';
import '../styles/index.scss';
import '../styles/main.scss';

type Props = {
    h3: string,
    p: string,
    array_of_li: string[],
    img: string,
}

export const SixBlock: React.FC<Props> = ({ h3, p, array_of_li, img}) => {
    return (
        <article className="six_block">
            <div className="six_block_wrap">
                <h3>{h3}</h3>
                <p>
                    {p}
                </p>
                <ul>
                    {array_of_li.map((li) => (
                        <li>{li}</li>
                    ))}
                </ul>
            </div>
            <img src={img} alt="photo" />
        </article>
    )
}