// External packages
import {t} from 'i18next';
import type {JSX} from 'react';

// Custom components
import {RedirectionButtonWithTextAndIconComponent} from '../components/RedirectionButtonWithTextAndIcon.component';


export function HeroSection(): JSX.Element {
    const mainHeadingContent: string = t('aboutView.heroSection.mainHeading');
    const headingContent: string = t('aboutView.heroSection.heading');
    const descriptionContent: string = t('aboutView.heroSection.description');
    const contactMeLinkContent: string = t('aboutView.heroSection.contactMeLink');


    return (
        <section 
            className="
                relative w-full h-max flex items-center px-compact gap-compact
                flex-col 430:flex-row
                py-huge 430:px-big 768:p-huge"
            >
            <div className="h-max flex flex-col items-start gap-middle w-full 430:w-1/2 768:w-7/12">
                <h2 
                    className="
                        text-light font-secondary font-normal
                        text-h2_1270 leading-h2_1270
                        1440:text-h2_1440 1440:leading-h2_1440
                        1920:text-h2_1920 1920:leading-h2_1920"
                    >
                    {headingContent}
                </h2>
                <p 
                    className="text-light font-secondary 
                        text-base_1270 leading-base_1270 
                        1440:text-base_1440 1440:leading-base_1440 
                        1920:text-base_1920 1920:leading-base_1920"
                    >
                    {descriptionContent}
                </p>
                <RedirectionButtonWithTextAndIconComponent href="" text={contactMeLinkContent} isInternal={true} />
            </div>
            <div 
                className="
                    h-max flex gap-compact
                    w-full 430:w-1/2 768:w-5/12
                    flex-row 430:flex-col">
                <div 
                    className="
                        relative aspect-4/3 bg-cover bg-center bg-no-repeat bg-[url(background_image_6.png)]
                        w-5/12 430:w-3/5"
                    >
                    <h1 
                        className="
                            absolute w-max -bottom-compact text-light font-normal font-primary
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
                        aspect-4/3 bg-cover bg-center bg-no-repeat bg-[url(background_image_5.png)]
                        w-7/12 430:w-full"
                    >

                </div>
            </div>
        </section>
    );
}