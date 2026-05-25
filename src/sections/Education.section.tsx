// External packages
import {t} from 'i18next';
import type {JSX} from 'react';

// Custom components
import {TimePeriodTableComponent} from '../components/TimePeriodTable.component';


export function EducationSection(): JSX.Element {
    const descriptionContent: string = t('aboutView.educationSection.description');
    const headingContent: string = t('aboutView.educationSection.heading');

    return (
        <section className="w-screen h-[120vh] p-huge flex flex-col justify-end bg-no-repeat bg-cover bg-center bg-[url(background_image_3.png)]">
            <div className="w-full h-max flex gap-compact">
                <div className="w-7/12 h-max flex flex-col gap-big">
                    <TimePeriodTableComponent tableDataLocation={'aboutView.educationSection.table'} />
                    <p 
                        className=" 
                            text-light font-secondary 
                            text-base_1270 leading-base_1270 
                            1440:text-base_1440 1440:leading-base_1440 
                            1920:text-base_1920 1920:leading-base_1920"
                        >
                        {descriptionContent}
                    </p>
                </div>
                <div className="w-5/12 h-max">
                    <h2 
                        className="
                            font-primary font-normal text-light 
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