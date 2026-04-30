import { useEffect, useRef, type JSX } from "react";
import {gsap} from 'gsap';
import type { CardChildComponentProps } from "../types/CardChildComponentProps.type";
import cssPropertiesService from "../services/cssProperties.service";
import { Icon } from "@iconify/react";


export default function MyPortfolioComponent({mouseOver}: CardChildComponentProps): JSX.Element {
    const component = useRef<HTMLDivElement|null>(null);
    const spacingCompact: number = parseInt(cssPropertiesService.get('--spacing-compact'));
    const spacingLarge: number = parseInt(cssPropertiesService.get('--spacing-large'));
    const animationDuration: number = 0.6;


    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.container', {xPercent: 0, x: 0, duration: animationDuration});
                gsap.to('.redirection_link', {yPercent: 0, y: 0, duration: animationDuration});
            } else {
                gsap.to('.container', {xPercent: -100, x: spacingCompact * -1, duration: animationDuration});
                gsap.to('.redirection_link', {yPercent: 100, y: spacingCompact, duration: animationDuration});
            }
        }, component);
    }, [mouseOver]);

    
    return (
        <div ref={component}>
            <div className="container w-full h-max pt-large pl-compact pr-compact">
                <div className="aspect-4/1 grid grid-rows-1 grid-cols-12">
                    <div className="row-span-1 col-span-6 bg-no-repeat bg-cover bg-[url(/my_potfolio_image_3.png)]"></div>
                    <div className="row-span-1 col-span-2 bg-no-repeat bg-cover bg-[url(/my_potfolio_image_2.png)]"></div>
                    <div className="row-span-1 col-span-4 bg-no-repeat bg-cover bg-[url(/my_potfolio_image_1.png)]"></div>
                </div>
            </div>
            <a className="redirection_link absolute text-light right-compact bottom-compact" href="/portfolio">
                <Icon icon="guidance:left-arrow" width={`${spacingLarge}px`} height={`${spacingLarge}px`} />
            </a>
        </div>
    );
}