// External packages
import {useEffect, useRef, type JSX} from 'react';
import {gsap} from 'gsap';
import {t} from 'i18next';

// Custom hooks
import {useCssProperty} from '../hooks/useCssPropery.hook';

// Custom types
import type {CardChildObjectType} from '../types/CardChildObject.type';

// Custom components
import {RedirectionLinkWithIconComponent} from './RedirectionLinkWithIcon.component';


export function WhoAmIComponent({mouseOver}: CardChildObjectType): JSX.Element {
    const textContent: string = t('whoAmICardText');
    const component = useRef<HTMLDivElement|null>(null);
    const spacingBig: number = useCssProperty('--spacing-big') as number;
    const spacingLarge: number = useCssProperty('--spacing-large') as number;
    const animationDuration: number = 0.6;

    
    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.text', {xPercent: 0, x: 0, duration: animationDuration});
                gsap.to('.redirection_link', {yPercent: 0, y: 0, duration: animationDuration});
            } else {
                gsap.to('.text', {xPercent: -100, x: spacingBig * -1, duration: animationDuration});
                gsap.to('.redirection_link', {yPercent: 100, y: spacingBig, duration: animationDuration});
            }
        }, component);
    }, [mouseOver]);


    return (
        <div ref={component} className="flex flex-col items-end pt-compact px-big pb-big gap-small 768:pb-0">
            <p 
                className="
                    text text-light font-secondary font-base
                    text-base_1270 leading-base_1270 
                    1440:text-base_1440 1440:leading-base_1440 
                    1920:text-base_1920 1920:leading-base_1920"
                >
                {textContent}
            </p>
            <RedirectionLinkWithIconComponent
                href="/about" 
                isInternal={true}
                size={spacingLarge}
                icon="guidance:left-arrow"
                className="redirection_link absolute right-big bottom-big" 
            />
        </div>
    );
}