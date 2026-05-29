// External packages
import {useEffect, useRef, type JSX} from 'react';
import {gsap} from 'gsap';
import {t} from 'i18next';

// Custom hooks
import {useCssProperty} from '../hooks/useCssPropery.hook';

// Custom types
import type {CardChildObjectType} from '../types/CardChildObject.type';


export function WhatDoIDoComponent({mouseOver}: CardChildObjectType): JSX.Element {
    const textContent = t('mainView.mainSection.whatDoIDoComponent.text');
    const component = useRef<HTMLDivElement|null>(null);
    const spacingBig: number = useCssProperty('--spacing-big') as number;
    const slowDuration = useCssProperty('--duration-slow') as number;

    
    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.text', {xPercent: 0, x: 0, duration: slowDuration});
            } else {
                gsap.to('.text', {xPercent: -100, x: spacingBig * -1, duration: slowDuration});
            }
        }, component);
    }, [mouseOver]);


    return ( 
        <div ref={component} className="pt-compact px-big pb-big">
            <p 
                className="text text-light font-secondary font-base
                    text-base_1270 leading-base_1270 
                    1440:text-base_1440 1440:leading-base_1440 
                    1920:text-base_1920 1920:leading-base_1920"
                >
                {textContent}
            </p>
        </div>             
    );
}