import '../styles/index.scss';
import '../styles/main.scss';
import cover from '../assets/Video.png';
import y_button from '../assets/logos_youtube-icon.svg';
import { useState, useRef } from 'react';
import classNames from 'classnames';
import com3 from '../assets/com3.svg'

export const Fiveth = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [iframeSrc, setIframeSrc] = useState("https://www.youtube.com/embed/K7u5sfXfAlc");

    const handleClicked = () => {
        setIsClicked(true);

        // Update the iframe source to include autoplay
        setIframeSrc("https://www.youtube.com/embed/K7u5sfXfAlc?autoplay=1");
    };

    return (
        <>
            <section className='fiveth container' id='video'>
                {/* { video } */}
                <iframe 
                    width="560" 
                    height="315" 
                    src={iframeSrc}
                    className={classNames('fiveth_video', { relative: isClicked })}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>

                <img src={cover} className={classNames('fiveth_cover', { none: isClicked })} alt="cover" />
                <img src={y_button} className={classNames('fiveth_y_button', { none: isClicked })} onClick={handleClicked} alt="youtube button" />
            </section>
            <img src={com3} alt="com3" className='com-45' />
        </>
    );
};
