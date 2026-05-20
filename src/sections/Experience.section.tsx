// External packages
import {t} from 'i18next';
import type {JSX} from 'react';

// Custom components
import {TimePeriodTableComponent} from '../components/TimePeriodTable.component';


export function ExperienceSection(): JSX.Element {
    const descriptionContent: string = t('aboutView.experienceSection.description');
    const headingContent: string = t('aboutView.experienceSection.heading');

    return (
        <section className="w-screen h-screen p-huge flex flex-col justify-end bg-no-repeat bg-cover bg-center bg-green-500/50">
            <div className="w-full h-max flex gap-compact">
                <div className="w-7/12 h-max flex flex-col gap-big">
                    <TimePeriodTableComponent tableDataLocation={'aboutView.experienceSection.table'} />
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