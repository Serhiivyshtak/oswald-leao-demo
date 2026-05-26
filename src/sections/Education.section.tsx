// External packages
import {t} from 'i18next';
import {useEffect, useRef, type JSX} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

// Custom components
import {TimePeriodTableComponent} from '../components/TimePeriodTable.component';


export function EducationSection(): JSX.Element {
    const descriptionContent: string = t('aboutView.educationSection.description');
    const headingContent: string = t('aboutView.educationSection.heading');
    const component = useRef<HTMLElement|null>(null);


    gsap.registerPlugin(ScrollTrigger);


    useEffect(() => {
        gsap.context(() => {
            gsap.fromTo('.element', {
                y: 128,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.3,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.trigger_element',
                    start: 'top 70%',
                    end: 'top 10%',
                    toggleActions: 'play none none reverse',
                    scrub: true,
                    markers: true
                }
            });
        }, component);
    }, []);

    return (
        <section 
            ref={component}
            className="
                w-screen flex flex-col justify-end 
                bg-no-repeat bg-cover bg-center bg-[url(background_image_3.png)] 
                h-max 768:h-[120vh]
                px-compact py-huge 430:px-big 768:p-huge"
                >
            <div className="trigger_element w-full h-max flex flex-col gap-[128px] 768:flex-row 768:gap-compact">
                <div className="w-full h-max block 768:hidden">
                    <h2 
                        className="
                            element font-primary font-normal text-light 
                            text-h1_1270 leading-h1_1270 
                            1440:text-h1_1440 1440:leading-h1_1440 
                            1920:text-h1_1920 1920:leading-h1_1920"
                        >
                        {headingContent}
                    </h2>
                </div>
                <div className="h-max flex flex-col gap-big w-full 768:w-7/12">
                    <TimePeriodTableComponent className="element" tableDataLocation={'aboutView.educationSection.table'} />
                    <p 
                        className=" 
                            element text-light font-secondary 
                            text-base_1270 leading-base_1270 
                            1440:text-base_1440 1440:leading-base_1440 
                            1920:text-base_1920 1920:leading-base_1920"
                        >
                        {descriptionContent}
                    </p>
                </div>
                <div className="w-5/12 h-max hidden 768:block">
                    <h2 
                        className="
                            element font-primary font-normal text-light 
                            text-h1_1270 leading-h1_1270 
                            1440:text-h1_1440 1440:leading-h1_1440 
                            1920:text-h1_1920 1920:leading-h1_1920"
                        >
                        {headingContent}
                    </h2>
                </div>
            </div>
        </section>
    );
}