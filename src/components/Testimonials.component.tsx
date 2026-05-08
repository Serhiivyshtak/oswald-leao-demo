// External packages
import {useEffect, useRef, useState, type JSX} from 'react';
import {useTranslation} from 'react-i18next';
import {gsap} from 'gsap';

// Custom hooks
import {useCssProperty} from '../hooks/useCssPropery.hook';

//Custom types
import type {CardChildObjectType} from '../types/CardChildObject.type';
import type {TestimonialObjectType} from '../types/TestimonialObject.type';


export default function TestimonialsComponent({mouseOver}: CardChildObjectType): JSX.Element {
    const {t} = useTranslation();
    const testimonials: Array<TestimonialObjectType> = t('testimonials', {returnObjects: true}) as Array<TestimonialObjectType>;
    const component = useRef(null);
    const spacingBig: number = useCssProperty('--spacing-big') as number;
    const animationDuration: number = 0.6;
    const [testimonialIndex, setTestimonialIndex] = useState<number>(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIndex(previousTestimonialIndex => previousTestimonialIndex < testimonials.length - 1 ? previousTestimonialIndex + 1 : 0);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);


    useEffect(() => {
        gsap.context(() => {
            gsap.fromTo('.text', {opacity: 0}, {opacity: 1, duration: animationDuration});
        }, component);
    }, [testimonialIndex]);


    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.text', {xPercent: 0, x: 0, duration: animationDuration});
            } else {
                gsap.to('.text', {xPercent: 100, x: spacingBig, duration: animationDuration});
            }
        }, component);
    }, [mouseOver]);
    

    return (
        <>
            <div ref={component}>
                <p 
                    className="text absolute font-secondary w-1/2 h-max text-right bottom-big right-big
                        text-base_1270 leading-base_1270 
                        1440:text-base_1440 1440:leading-base_1440 
                        1920:text-base_1920 1920:leading-base_1920"
                    >
                    <span className="text-light">
                        {testimonials[testimonialIndex].text}
                    </span>
                    <span className="text-light">
                        -
                    </span>
                    <span className="text-gray">
                        {testimonials[testimonialIndex].author}
                    </span>
                </p>
            </div>
        </>
    );
}