// Extermal packages
import {useEffect, useRef, type JSX} from 'react';
import {gsap} from 'gsap';
import {Icon} from '@iconify/react';

// Custom hooks
import {useCssProperty} from '../hooks/useCssPropery.hook';

// Custom types
import type { CardChildObjectType } from '../types/CardChildObject.type';


export default function MyPortfolioComponent({mouseOver}: CardChildObjectType): JSX.Element {
    const component = useRef<HTMLDivElement|null>(null);
    const spacingBig: number = useCssProperty('--spacing-big') as number;
    const spacingLarge: number = useCssProperty('--spacing-large') as number;
    const animationDuration: number = 0.6;


    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.redirection_link', {yPercent: 0, y: 0, duration: animationDuration});
            } else {
                gsap.to('.redirection_link', {yPercent: 100, y: spacingBig, duration: animationDuration});
            }
        }, component);
    }, [mouseOver]);

    
    return (
        <div ref={component} className="flex w-full h-full">
            <a className="redirection_link absolute text-light right-big bottom-big" href="/portfolio">
                <Icon icon="guidance:left-arrow" width={`${spacingLarge}px`} height={`${spacingLarge}px`} />
            </a>
        </div>
    );
}