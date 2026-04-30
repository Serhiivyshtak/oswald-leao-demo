import { useEffect, useRef, type JSX } from "react";
import {gsap} from 'gsap';
import type { CardChildComponentProps } from "../types/CardChildComponentProps.type";
import cssPropertiesService from "../services/cssProperties.service";
import { useTranslation } from "react-i18next";


export default function TestimonialsComponent({mouseOver}: CardChildComponentProps): JSX.Element {
    const {t} = useTranslation();
    const testimonials: Array<any> = t('testimonials', {returnObjects: true}) as Array<any>;
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


    function renderRandomTestimonial() {
        const randomTestimonialIndex: number = Math.floor(Math.random() * testimonials.length);

        return (
            <p className="text absolute font-secondary font-base w-1/2 h-max text-right bottom-compact right-compact">
                <span className="text-light">
                    {testimonials[randomTestimonialIndex].text}
                </span>
                <span className="text-light">
                    -
                </span>
                <span className="text-gray">
                    {testimonials[randomTestimonialIndex].author}
                </span>
            </p>
        );
    }
    

    return (
        <>
            <div ref={component}>
                {renderRandomTestimonial()}
            </div>
        </>
    );
}