import type { JSX } from 'react';
import type { FixedBackgroundObjectType } from '../types/FixedBackgroundObject.type';

export default function FixedBackground({ backgroundImageUrl }: FixedBackgroundObjectType): JSX.Element {
    const componentStylings: React.CSSProperties = { backgroundImage: `url(${backgroundImageUrl})` };
    return (
        <div 
            className="w-screen h-screen fixed top-0 left-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={componentStylings}
        ></div>
    );
}
