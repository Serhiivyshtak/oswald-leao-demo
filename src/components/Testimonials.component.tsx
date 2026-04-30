import { useEffect, useRef, type JSX } from "react";
import {gsap} from 'gsap';
import type { CardChildComponentProps } from "../types/CardChildComponentProps.type";
import cssPropertiesService from "../services/cssProperties.service";


export default function TestimonialsComponent({mouseOver}: CardChildComponentProps): JSX.Element {
    const component = useRef(null);
    const spacingCompact: number = parseInt(cssPropertiesService.get('--spacing-compact'));
    const animationDuration: number = 0.6;


    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.text', {xPercent: 0, x: 0, duration: animationDuration});
            } else {
                gsap.to('.text', {xPercent: 100, x: spacingCompact, duration: animationDuration});
            }
        }, component);
    }, [mouseOver]);
    

    return (
        <>
            <div ref={component}>
                <p className="text absolute font-secondary font-base w-1/2 h-max text-right bottom-compact right-compact">
                    <span className="text-light">
                        “Oswald has a rare talent for making every shot feel natural and honest.”
                    </span>
                    <span className="text-light">
                        -
                    </span>
                    <span className="text-gray">
                        Leah Kessler from Urban Bloom Agency.
                    </span>
                </p>
            </div>
        </>
    );
}