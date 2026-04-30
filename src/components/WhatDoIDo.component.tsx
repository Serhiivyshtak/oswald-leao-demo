import { useEffect, useRef, type JSX } from "react";
import type { CardChildObjectType } from "../types/CardChildObject.type";
import {gsap} from 'gsap';
import cssPropertiesService from "../services/cssProperties.service";
import { useTranslation } from "react-i18next";


export default function WhatDoIDoComponent({mouseOver}: CardChildObjectType): JSX.Element {
    const {t} = useTranslation();
    const textContent = t('whatDoIDoCardText');
    const component = useRef<HTMLDivElement|null>(null);
    const spacingCompact: number = parseInt(cssPropertiesService.get('--spacing-compact'));
    const animationDuration: number = 0.6;

    
    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.text', {xPercent: 0, x: 0, duration: animationDuration});
            } else {
                gsap.to('.text', {xPercent: -100, x: spacingCompact * -1, duration: animationDuration});
            }
        }, component);
    }, [mouseOver]);


    return ( 
        <div ref={component}>
            <p className="text text-light font-secondary font-base mt-large ml-compact mr-compact">
                {textContent}
            </p>
        </div>             
    );
}