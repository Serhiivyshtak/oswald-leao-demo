import { useEffect, useRef, type JSX } from "react";
import {gsap} from 'gsap';
import type { CardChildComponentProps } from "../types/CardChildComponentProps.type";
import cssPropertiesService from "../services/cssProperties.service";
import { useTranslation } from "react-i18next";


export default function MyAwardsComponent({mouseOver}: CardChildComponentProps): JSX.Element {
    const {t} = useTranslation();
    const awards: Array<Object> = t('awards', {returnObjects: true}) as Array<Object>;
    const component = useRef<HTMLDivElement|null>(null);
    const spacingCompact: number = parseInt(cssPropertiesService.get('--spacing-compact'));
    const animationDuration: number = 0.6;


    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.container', {xPercent: 0, x: 0, duration: animationDuration});
            } else {
                gsap.to('.container', {xPercent: -100, x: spacingCompact * -1, duration: animationDuration});
            }
        }, component);
    }, [mouseOver]);


    function renderAwards(): JSX.Element[] {
        return awards.map((award: any) => <li key={award.title}>{award.amount}x {award.title}</li>);
    }


    return (
        <div ref={component}>
            <ul className="container text-light font-secondary font-base mt-large ml-compact mr-compact list-decimal list-inside list-image-[url(/list_bullet.png)]">
                {renderAwards()}
            </ul>
        </div>
    );
}