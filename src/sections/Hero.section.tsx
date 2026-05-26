// External packages
import {t} from 'i18next';
import {useEffect, useLayoutEffect, useRef, useState, type JSX} from 'react';
import {gsap} from 'gsap';

// Custom components
import {RedirectionButtonWithTextAndIconComponent} from '../components/RedirectionButtonWithTextAndIcon.component';

// Custom hooks
import {useCssProperty} from '../hooks/useCssPropery.hook';


export function HeroSection(): JSX.Element {
    const component = useRef<HTMLElement|null>(null);
    const [showElements, setShowElements] = useState<boolean>(false);
    const mainHeadingContent: string = t('aboutView.heroSection.mainHeading');
    const headingContent: string = t('aboutView.heroSection.heading');
    const descriptionContent: string = t('aboutView.heroSection.description');
    const contactMeLinkContent: string = t('aboutView.heroSection.contactMeLink');
    const hugeSpacing = useCssProperty('--spacing-huge') as number;


    useLayoutEffect(() => {
        gsap.context(() => {
            gsap.to('.element', {opacity: 0, y: hugeSpacing});
        }, component);

        setTimeout(() => {
            setShowElements(true);
        }, 4000);
    }, []);


    useEffect(() => {
        gsap.context(() => {
            if (showElements) {
                gsap.to('.element', {opacity: 1, y: 0, duration: 0.3, stagger: 0.1});
            }
        }, component);
    }, [showElements]);


    return (
        <section 
            ref={component}
            className="
                relative w-full h-max flex items-center px-compact gap-compact
                flex-col 430:flex-row
                py-huge 430:px-big 768:p-huge"
            >
            <div className="h-max flex flex-col items-start gap-middle w-full 430:w-1/2 768:w-7/12">
                <h2 
                    className="
                        element text-light font-secondary font-normal
                        text-h2_1270 leading-h2_1270
                        1440:text-h2_1440 1440:leading-h2_1440
                        1920:text-h2_1920 1920:leading-h2_1920"
                    >
                    {headingContent}
                </h2>
                <p 
                    className="
                        element text-light font-secondary 
                        text-base_1270 leading-base_1270 
                        1440:text-base_1440 1440:leading-base_1440 
                        1920:text-base_1920 1920:leading-base_1920"
                    >
                    {descriptionContent}
                </p>
                <RedirectionButtonWithTextAndIconComponent className="element" href="" text={contactMeLinkContent} isInternal={true} />
            </div>
            <div 
                className="
                    h-max flex gap-compact
                    w-full 430:w-1/2 768:w-5/12
                    flex-row 430:flex-col">
                <div 
                    className="
                        element relative aspect-4/3 bg-cover bg-center bg-no-repeat bg-[url(background_image_6.png)]
                        w-5/12 430:w-3/5"
                    >
                    <h1 
                        className="
                            element absolute w-max -bottom-compact text-light font-normal font-primary
                            text-h1_1270 leading-h1_1270
                            1440:text-h1_1440 1440:leading-h1_1440
                            1920:text-h1_1920 1920:leading-h1_1920
                            hidden 430:block"
                        >
                        {mainHeadingContent}
                    </h1>
                </div>
                <div 
                    className="
                        element aspect-4/3 bg-cover bg-center bg-no-repeat bg-[url(background_image_5.png)]
                        w-7/12 430:w-full"
                    >

                </div>
            </div>
        </section>
    );
}