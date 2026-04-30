import { useEffect, useRef, type JSX } from "react";
import {gsap} from 'gsap';
import { Icon } from "@iconify/react";
import type { CardChildComponentProps } from "../types/CardChildComponentProps.type";
import cssPropertiesService from '../services/cssProperties.service';
import { useTranslation } from "react-i18next";


export default function WhoAmIComponent({mouseOver}: CardChildComponentProps): JSX.Element {
    const {t} = useTranslation();
    const textContent: string = t('whoAmICardText');
    const component = useRef<HTMLDivElement|null>(null);
    const spacingCompact: number = parseInt(cssPropertiesService.get('--spacing-compact'));
    const spacingLarge: number = parseInt(cssPropertiesService.get('--spacing-large'));
    const animationDuration: number = 0.6;

    
    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.text', {xPercent: 0, x: 0, duration: animationDuration});
                gsap.to('.redirection_link', {yPercent: 0, y: 0, duration: animationDuration});
            } else {
                gsap.to('.text', {xPercent: -100, x: spacingCompact * -1, duration: animationDuration});
                gsap.to('.redirection_link', {yPercent: 100, y: spacingCompact, duration: animationDuration});
            }
        }, component);
    }, [mouseOver]);


    return (
        <div ref={component}>
            <p className="text text-light font-secondary font-base mt-large ml-compact mr-compact">
                {textContent}
            </p>
            <a className="redirection_link absolute text-light right-compact bottom-compact" href="/about">
                <Icon icon="guidance:left-arrow" width={`${spacingLarge}px`} height={`${spacingLarge}px`} />
            </a>
        </div>
    );
}