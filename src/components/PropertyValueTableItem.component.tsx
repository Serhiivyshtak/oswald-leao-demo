// External packages
import {useEffect, useRef, useState, type JSX} from 'react';
import {gsap} from 'gsap';

// Custom types
import type {PropertyValueTableItemObjectType} from '../types/PropertyValueTableItemObject.type';


export function PropertyValueTableItemComponent({id, property, value, imageSrc}: PropertyValueTableItemObjectType): JSX.Element {
    const component = useRef<HTMLDivElement|null>(null);
    const [mouseOver, setMouseOver] = useState<boolean>(false);
    const animationDuration: number = 0.4;


    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.image_container', {width: '20%', duration: animationDuration});
            } else {
                gsap.to('.image_container', {width: 0, duration: animationDuration});
            }
        }, component);
    }, [mouseOver])

    
    return (
        <div 
            ref={component}
            key={id} 
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            className="relative border-b border-light py-compact flex justify-between hover:bg-light/30 duration-150"
            >
            <span 
                className="
                    text-light/30 w-max font-semibold font-additional 
                    text-big_1270 leading-big_1270 
                    1440:text-big_1440 1440:leading-big_1440 
                    1920:text-big_1920 1920:leading-big_1920"
                >
                {property}
            </span>
            <span 
                className="
                    text-light w-max text-right font-secondary max-w-1/2 768:max-w-1/3
                    text-big_1270 leading-big_1270 
                    1440:text-big_1440 1440:leading-big_1440 
                    1920:text-big_1920 1920:leading-big_1920"
                >
                {value}
            </span>
            <div 
                className="image_container absolute bottom-0 left-1/2 -translate-x-1/2 aspect-3/4 bg-cover bg-center bg-no-repeat"
                style={{backgroundImage: `url(${imageSrc})`}} 
                >
            </div>
        </div>
    );
}