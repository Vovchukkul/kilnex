import '../styles/index.scss';
import '../styles/main.scss';
import cover from '../assets/Video.png';
import y_button from '../assets/logos_youtube-icon.svg';
import { useState, useRef } from 'react';
import classNames from 'classnames';
import com3 from '../assets/com3.svg'

export const Fiveth = () => {
    const [isClicked, setIsClicked] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement | null>(null); // Ref to target the iframe

    const handleClicked = () => {
        setIsClicked(true);

        // // Wait a moment to let the iframe load, then trigger the button click
        // setTimeout(() => {
        //     // Access the iframe document
        //     const iframeDocument = iframeRef.current?.contentDocument || iframeRef.current?.contentWindow?.document;
            
        //     if (iframeDocument) {
        //         // Try to find and click the target button inside the iframe
        //         const targetButton = iframeDocument.querySelector('.ytp-button:not([aria-disabled="true"]):not([disabled]):not([aria-hidden="true"])');
        //         if (targetButton) {
        //             (targetButton as HTMLElement).click();      
        //         }
        //     }
        // }, 500); // Timeout to ensure iframe loads
    };

    return (
        <>
            <section className='fiveth container'>
                {/* { video } */}
                <iframe 
                    ref={iframeRef} // Attach the ref here
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/K7u5sfXfAlc" 
                    className={classNames('fiveth_video', { relative: isClicked })}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>

                <img src={cover} className={classNames('fiveth_cover', { none: isClicked })} alt="cover" />
                <img src={y_button} className={classNames('fiveth_y_button', { none: isClicked })} onClick={handleClicked} alt="youtube button" />
            </section>
            <img src={com3} alt="com3" />
        </>
    );
};
