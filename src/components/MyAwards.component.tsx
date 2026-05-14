// External packages
import {useEffect, useRef, type JSX} from 'react';
import {t} from 'i18next';
import {gsap} from 'gsap';

// Custom hooks
import {useCssProperty} from '../hooks/useCssPropery.hook';

// Custom types
import type {CardChildObjectType} from '../types/CardChildObject.type';
import type {AwardObjectType} from '../types/AwardObject.type';


export function MyAwardsComponent({mouseOver}: CardChildObjectType): JSX.Element {
    const awards: Array<AwardObjectType> = t('mainView.mainSection.myAwardsComponent.awards', {returnObjects: true}) as Array<AwardObjectType>;
    const component = useRef<HTMLDivElement|null>(null);
    const spacingBig: number = useCssProperty('--spacing-big') as number;
    const animationDuration: number = 0.6;


    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.container', {xPercent: 0, x: 0, duration: animationDuration});
            } else {
                gsap.to('.container', {xPercent: -100, x: spacingBig * -1, duration: animationDuration});
            }
        }, component);
    }, [mouseOver]);


    function renderAwards(): JSX.Element[] {
        return awards.map((award: AwardObjectType) => <li key={award.id}>{award.amount}x {award.title}</li>);
    }


    return (
        <div ref={component} className="px-big pt-compact pb-big">
            <ul 
                className="container block text-light font-secondary list-decimal list-inside list-image-[url(/list_bullet.png)]
                    text-base_1270 leading-base_1270 
                    1440:text-base_1440 1440:leading-base_1440 
                    1920:text-base_1920 1920:leading-base_1920"
                >
                {renderAwards()}
            </ul>
        </div>
    );
}