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
    const slowDuration = useCssProperty('--duration-slow') as number;


    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.container', {xPercent: 0, x: 0, duration: slowDuration});
            } else {
                gsap.to('.container', {xPercent: -100, x: spacingBig * -1, duration: slowDuration});
            }
        }, component);
    }, [mouseOver]);


    function renderAwards(): JSX.Element[] {
        return awards.map((award: AwardObjectType) => <li key={award.id}>{award.amount}x {award.title}</li>);
    }


    return (
        <div ref={component} className="px-big pt-compact pb-big">
            <ul 
                className="container block text-light font-secondary list-decimal list-inside
                    text-base_1270 leading-base_1270 
                    1440:text-base_1440 1440:leading-base_1440 
                    1920:text-base_1920 1920:leading-base_1920"
                style={{listStyleImage: `url(${import.meta.env.BASE_URL}list_bullet.png)`}}
                >
                {renderAwards()}
            </ul>
        </div>
    );
}