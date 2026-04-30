import { useEffect, useRef, type JSX } from "react";
import type { CardChildComponentProps } from "../types/CardChildComponentProps.type";
import {gsap} from 'gsap';
import cssPropertiesService from "../services/cssProperties.service";


export default function WhatDoIDoComponent({mouseOver}: CardChildComponentProps): JSX.Element {
    const component = useRef<HTMLDivElement|null>(null);
    const spacingCompact: number = parseInt(cssPropertiesService.get('--spacing-compact'));
    const animationDuration: number = 0.6;

    
    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.content_text', {xPercent: 0, x: 0, duration: animationDuration});
            } else {
                gsap.to('.content_text', {xPercent: -100, x: spacingCompact * -1, duration: animationDuration});
            }
        }, component);
    }, [mouseOver]);


    return ( 
        <div ref={component}>
            <p className="content_text text-light font-secondary font-base mt-large ml-compact mr-compact">
                I work across portrait, lifestyle, editorial, and street photography. I collaborate with creative agencies, independent brands, musicians, and magazines to produce images that feel natural, honest, and visually striking.            </p>  
        </div>             
    );
}