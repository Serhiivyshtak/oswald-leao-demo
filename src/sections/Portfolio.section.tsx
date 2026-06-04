// External packages
import {useEffect, useRef, useState, type JSX} from 'react';
import {t} from 'i18next';

// Custom components
import {RedirectionButtonWithTextAndIconComponent} from '../components/RedirectionButtonWithTextAndIcon.component';
import {ImageViewerComponent} from '../components/ImageViewer.component';

// Custom types
import type {PortfolioImageObjectType} from '../types/PortfolioImageObject.type';

// Custom hooks
import {useRandom} from '../hooks/useRandom.hook';


export function PortfolioSection(): JSX.Element {
    const portfolioImages = t('globalScope.portfolioImages', {returnObjects: true}) as Array<PortfolioImageObjectType>;
    const showMoreButtonContent: string = t('portfolioView.portfolioSection.showMoreButton');
    const [selectedPortfolioImages, setSelectedPortfolioImages] = useState<Array<PortfolioImageObjectType>>([]);
    const {nextUniqueRandom} = useRandom(0, portfolioImages.length - 1);
    const gridColumns: number = 12; 
    const rowsPortion: number = 6;
    const [gridRows, setGridRows] = useState<number>(rowsPortion);
    const gridColumnsTaken = useRef<number>(0);
    const gridRowsTaken = useRef<number>(0);
    const [showImageViewer, setShowImageViewer] = useState<boolean>(false);
    const [clickedImageSrc, setClickedImageSrc] = useState<string>('');


    function fillSelectedPortfolioImages(): void {
        const localArray: Array<PortfolioImageObjectType> = [];

        while (gridRowsTaken.current < gridRows) {
            while (gridColumnsTaken.current < gridColumns) {
                const randomImageIndex = nextUniqueRandom();

                if (portfolioImages[randomImageIndex].orientation === 'landscape' && (gridColumns - gridColumnsTaken.current) < 6) {
                    continue;
                } else if (portfolioImages[randomImageIndex].orientation === 'landscape') {
                    gridColumnsTaken.current += 6;
                } else {
                    gridColumnsTaken.current += 3;
                }

                localArray.push(portfolioImages[randomImageIndex]);
            }

            gridColumnsTaken.current = 0;
            gridRowsTaken.current += 1;
        }

        setSelectedPortfolioImages([...selectedPortfolioImages, ...localArray]);
    }


    function renderShowMoreButton(): JSX.Element | null {
        if (portfolioImages.length - selectedPortfolioImages.length < rowsPortion * 4) {
            return null;
        }

        return (
            <RedirectionButtonWithTextAndIconComponent 
                onClick={() => setGridRows(gridRows + rowsPortion)} 
                href="" 
                text={showMoreButtonContent} 
                isInternal={true}
            />
        );
    }


    function renderSelectedPortfolioImages(): JSX.Element[] {
        return selectedPortfolioImages.map(selectedPortfolioImage => {
            const selectedPortfolioImageStylings: React.CSSProperties = {backgroundImage: `url(${selectedPortfolioImage.srcCompressed})`};
            let selectedPortfolioImageClassList: string = 'row-span-1 bg-cover bg-center bg-no-repeat cursor-pointer';

            if (selectedPortfolioImage.orientation === 'landscape') {
                selectedPortfolioImageClassList += ' ' + 'col-span-12 430:col-span-6 aspect-4/3';
            } else {
                selectedPortfolioImageClassList += ' ' + 'col-span-12 430:col-span-3 aspect-3/4 430:aspect-auto';
            }

            return (
                <div 
                    onClick={() => {setShowImageViewer(true); setClickedImageSrc(selectedPortfolioImage.srcHighQuality)}}
                    className={selectedPortfolioImageClassList} 
                    style={selectedPortfolioImageStylings}
                    key={selectedPortfolioImage.id}
                    >
                </div>
            );
        });
    }


    useEffect(() => {
        fillSelectedPortfolioImages();
    }, [gridRows]);


    return (
        <section 
            className="
                w-full h-max flex flex-col items-center gap-big
                px-compact py-huge 430:px-big 768:p-huge"
            >
            <ImageViewerComponent 
                showImageViewer={showImageViewer} 
                imageSrc={clickedImageSrc} 
                onCloseHandler={() => setShowImageViewer(false)} 
            />
            <div 
                className="
                    w-full h-max 
                    flex flex-col
                    430:grid 430:grid-cols-12 430:auto-rows-fr
                    gap-small 768:gap-compact"
                >
                {renderSelectedPortfolioImages()}
            </div>
            {renderShowMoreButton()}
        </section>
    );
}