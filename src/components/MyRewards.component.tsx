import { useEffect, useRef, type JSX } from "react";
import {gsap} from 'gsap';
import type { CardChildComponentProps } from "../types/CardChildComponentProps.type";
import cssPropertiesService from "../services/cssProperties.service";


export default function MyRewardsComponent({mouseOver}: CardChildComponentProps): JSX.Element {
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


    return (
        <div ref={component}>
            <ul className="container text-light font-secondary font-base mt-large ml-compact mr-compact list-decimal list-inside list-image-[url(/list_bullet.png)]">
                <li>
                    1x Tokyo International Foto Awards, Japan
                </li>
                <li>
                    3x Photographic Society of Japan awards, Japan
                </li>
                <li>
                    1x Photo City Sagamihara, Japan
                </li>
                <li>
                    1x Paris Photo–Aperture Foundation PhotoBook Awards, France
                </li>
            </ul>
        </div>
    );
}