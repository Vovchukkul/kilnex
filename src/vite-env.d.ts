/// <reference types="vite/client" />
declare module 'react-dom/client'
declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module 'react-360-view';
declare module 'react-360-view' {
    import React from 'react';

    interface ThreeSixtyProps {
        amount: number;
        fileName: string;
        spinReverse?: boolean;
        loop?: boolean;
        autoplay?: boolean;
        autoplaySpeed?: number;
        onSpinStart?: () => void;
        onSpinEnd?: () => void;
        styles?: React.CSSProperties;
    }

    const ThreeSixty: React.FC<ThreeSixtyProps>;
    export default ThreeSixty;
}