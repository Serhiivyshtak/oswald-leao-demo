// External packages
import {useEffect, useRef, useState, useLayoutEffect, type JSX} from 'react';
import {t} from 'i18next';
import {gsap} from 'gsap';

// Custom hooks
import {useCssProperty} from '../hooks/useCssPropery.hook';
import {useRandom} from '../hooks/useRandom.hook';

// Custom types
import type {CardChildObjectType} from '../types/CardChildObject.type';
import type {PortfolioImageObjectType} from '../types/PortfolioImageObject.type';

// Custom components
import {RedirectionLinkWithIconComponent} from './RedirectionLinkWithIcon.component';


export function MyPortfolioComponent({mouseOver, cardHeight, windowWidth, headHeight}: CardChildObjectType): JSX.Element {
    const component = useRef<HTMLDivElement|null>(null);
    const redirectionButton = useRef<HTMLAnchorElement|null>(null);
    const [redirectionButtonHeight, setRedirectionButtonHeight] = useState<number>(0);
    const [imagesContainerHeight, setImagesContainerHeight] = useState<number>(0);
    const spacingBig: number = useCssProperty('--spacing-big') as number;
    const spacingCompact: number = useCssProperty('--spacing-compact') as number;
    const spacingLarge: number = useCssProperty('--spacing-large') as number;
    const spacingHuge: number = useCssProperty('--spacing-huge') as number;
    const breakpoint768 = useCssProperty('--breakpoint-768') as number;
    const animationDuration: number = 0.6;
    const portfolioImages = t('portfolioImages', {returnObjects: true}) as Array<PortfolioImageObjectType>;
    const [selectedPortfolioImages, setSelectedPortfolioImages] = useState<Array<PortfolioImageObjectType>>([]);
    const {nextUniqueRandom} = useRandom(0, portfolioImages.length - 1);


    function fillSelectedPortfolioImages(): void {
        const gridColumns: number = 12;
        let gridColumnsTaken: number = 0;

        const localArray: Array<PortfolioImageObjectType> = [];

        while (gridColumnsTaken < gridColumns) {
            const randomImageIndex = nextUniqueRandom();

            if (portfolioImages[randomImageIndex].orientation === 'landscape' && (gridColumns - gridColumnsTaken) < 6) {
                continue;
            } else if (portfolioImages[randomImageIndex].orientation === 'landscape') {
                gridColumnsTaken += 6;
            } else {
                gridColumnsTaken += 3;
            }

            localArray.push(portfolioImages[randomImageIndex]);
        }

        setSelectedPortfolioImages(localArray);
    }


    useLayoutEffect(() => {
        setRedirectionButtonHeight(redirectionButton.current?.offsetHeight as number);
    });


    useEffect(() => {
        fillSelectedPortfolioImages();
    }, []);


    useEffect(() => {
        if (windowWidth as number <= breakpoint768) {
            setImagesContainerHeight(spacingHuge * 2);
            return;
        } 

        setImagesContainerHeight((cardHeight as number) - (headHeight as number) - redirectionButtonHeight - spacingBig - (2 * spacingCompact));
    }, [cardHeight, headHeight, redirectionButtonHeight]);


    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.redirection_link', {yPercent: 0, y: 0, duration: animationDuration});
                gsap.to('.images_container', {xPercent: 0, x: 0, duration: animationDuration});
            } else {
                gsap.to('.redirection_link', {yPercent: 100, y: spacingBig, duration: animationDuration});
                gsap.to('.images_container', {xPercent: -100, x: spacingBig * - 1, duration: animationDuration});
            }
        }, component);
    }, [mouseOver]);


    function renderSelectedPortfolioImages(): JSX.Element[] {
        return selectedPortfolioImages.map(selectedPortfolioImage => {
            const selectedPortfolioImageStylings: React.CSSProperties = {backgroundImage: `url(${selectedPortfolioImage.src})`};
            let selectedPortfolioImageClassList: string = 'bg-cover bg-center bg-no-repeat';

            if (selectedPortfolioImage.orientation === 'landscape') {
                selectedPortfolioImageClassList += ' ' + 'col-span-6';
            } else {
                selectedPortfolioImageClassList += ' ' + 'col-span-3';
            }

            return (
                <div 
                    className={selectedPortfolioImageClassList} 
                    style={selectedPortfolioImageStylings}
                    key={selectedPortfolioImage.id}
                    >
                </div>
            );
        });
    }

    
    return (
        <div ref={component} className="flex flex-col items-end pt-compact px-big pb-big gap-small 768:pb-0">
            <div 
                className="images_container w-full gap-small grid grid-rows-1 grid-cols-12"
                style={{height: `${imagesContainerHeight}px`}}
                >
                    {renderSelectedPortfolioImages()}
            </div>
            <RedirectionLinkWithIconComponent
                href="/about" 
                ref={redirectionButton}
                size={spacingLarge}
                icon="guidance:left-arrow" 
                className="redirection_link 768:absolute right-big bottom-big" 
            />
        </div>
    );
}