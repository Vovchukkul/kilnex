// import ThreeSixty from 'react-360-view';
import { useState } from 'react';
import "../styles/index.scss";
import "../styles/main.scss";


export const ProductView = () => {
    const [currentFrame, setCurrentFrame] = useState(1);
    const [dragOffset, setDragOffset] = useState(0); 
    const totalFrames = 10; 
    const threshold = 20;

    const handleDrag = (event: { movementX: any; }) => {
        const movement = event.movementX; 
        setDragOffset((prev) => prev + movement); 

        if (Math.abs(dragOffset + movement) >= threshold) {
            const direction = dragOffset + movement > 0 ? 1 : -1; 
            setCurrentFrame((prev) =>
                direction > 0
                    ? (prev % totalFrames) + 1 
                    : prev - 1 < 1
                    ? totalFrames
                    : prev - 1 
            );
            setDragOffset(0); 
        }
    };

    return (
        <div
            className="product-slider"
            onMouseMove={handleDrag}
            style={{ cursor: 'grab', overflow: 'hidden' }}
        >
            <img
                src={`/assets/360/image-${currentFrame}.jpg`}
                alt={`Frame ${currentFrame}`}
                style={{ width: '100%' }}
            />
        </div>
    );
};
