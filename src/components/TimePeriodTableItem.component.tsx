// External packages
import type {JSX} from 'react';

// Custom types
import type {TimePeroidTableItemObjectType} from '../types/TimePeriodTableItemObject.type';


export function TimePeriodTableItemComponent({id, timePeriod, heading, subheading}: TimePeroidTableItemObjectType): JSX.Element {
    return (
        <div 
            className="w-full border-b border-light flex flex-col gap-small py-compact hover:bg-light/30 duration-150"
            key={id}
            >
            <span 
                className="
                    font-semibold font-additional text-light/30 
                    text-big_1270 leading-big_1270
                    1440:text-big_1440 1440:leading-big_1440
                    1920:text-big_1920 1920:leading-big_1920"
                >
                {timePeriod}
            </span>
            <span 
                className="
                    text-light font-normal font-primary
                    text-h2_1270 leading-h2_1270
                    1440:text-h2_1440 1440:leading-h2_1440
                    1920:text-h2_1920 1920:leading-h2_1920"
                >
                {heading}
            </span>
            <span 
                className="
                    text-light font-normal font-secondary 
                    text-base_1270 leading-base_1270 
                    1440:text-base_1440 1440:leading-base_1440 
                    1920:text-base_1920 1920:leading-base_1920"
                >
                {subheading}
            </span>
        </div>
    );
}