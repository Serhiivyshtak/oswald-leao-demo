// External packages
import {type JSX} from 'react';

// Custom types
import type {PortfolioImageObjectType} from '../types/PortfolioImageObject.type';
import {cssBackgroundImage} from '../services/assetUrl.service';


export function PortfolioImageComponent({srcCompressed, orientation, onClick}: PortfolioImageObjectType): JSX.Element {
    const selectedPortfolioImageStylings: React.CSSProperties = {backgroundImage: cssBackgroundImage(srcCompressed)};
    let selectedPortfolioImageClassList: string = 'row-span-1 bg-cover bg-center bg-no-repeat cursor-pointer';


    if (orientation === 'landscape') {
        selectedPortfolioImageClassList += ' ' + 'col-span-12 430:col-span-6 aspect-4/3';
    } else {
        selectedPortfolioImageClassList += ' ' + 'col-span-12 430:col-span-3 aspect-3/4 430:aspect-auto';
    }


    return (
        <div
            onClick={onClick}
            className={selectedPortfolioImageClassList} 
            style={selectedPortfolioImageStylings}
            >
        </div>
    );
}