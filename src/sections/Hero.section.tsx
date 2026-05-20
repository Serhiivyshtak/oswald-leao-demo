// External packages
import {Icon} from '@iconify/react';
import {t} from 'i18next';
import type {JSX} from 'react';
import {Link} from 'react-router-dom';

// Custom components
import {RedirectionButtonWithTextAndIconComponent} from '../components/RedirectionButtonWithTextAndIcon.component';


export function HeroSection(): JSX.Element {
    const mainHeadingContent: string = t('aboutView.heroSection.mainHeading');
    const headingContent: string = t('aboutView.heroSection.heading');
    const descriptionContent: string = t('aboutView.heroSection.description');
    const contactMeLinkContent: string = t('aboutView.heroSection.contactMeLink');


    return (
        <section className="relative w-full h-max p-huge flex gap-compact items-center">
            <Icon icon="boxicons:shape-unite" className="absolute top-huge left-huge w-big h-big text-light" />
            <div className="w-7/12 h-max flex flex-col items-start gap-middle">
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
            <div className="w-5/12 h-max flex flex-col gap-compact">
                <div className="relative w-3/5 aspect-4/3 bg-cover bg-center bg-no-repeat bg-indigo-500/50">
                    <h1 
                        className="
                            absolute -bottom-compact text-light font-normal font-primary
                            text-h1_1270 leading-h1_1270
                            1440:text-h1_1440 1440:leading-h1_1440
                            1920:text-h1_1920 1920:leading-h1_1920"
                        >
                        {mainHeadingContent}
                    </h1>
                </div>
                <div className="w-full aspect-4/3 bg-cover bg-center bg-no-repeat bg-indigo-500/50">

                </div>
            </div>
        </section>
    );
}