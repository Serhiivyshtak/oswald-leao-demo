// External packages
import {useEffect, useLayoutEffect, useRef, useState, type JSX} from 'react';
import {Link} from 'react-router-dom';
import {Icon} from '@iconify/react';
import {gsap} from 'gsap';

// Custom types
import type {RedirectionButtonWithTextAndIconObjectType} from '../types/RedirectionButtonWithTextAndIconObject.type';
import type { DomInfoObjectType } from '../types/DomInfoObject.type';

// Custom hooks
import {useDomInfo} from '../hooks/useDomInfo';


export function RedirectionButtonWithTextAndIconComponent({href, text, isInternal, className}: RedirectionButtonWithTextAndIconObjectType): JSX.Element {
    const component = useRef<HTMLAnchorElement|null>(null);
    const redirectionButtonSignleLine = useRef<HTMLDivElement|null>(null);
    const redirectionButtonClassList: string = className + ' ' + 'text-light font-semibold uppercase cursor-pointer text-big_1270 leading-big_1270 1440:text-big_1440 1440:leading-big_1440 1920:text-big_1920 1920:leading-big_1920 overflow-hidden';
    const [mouseOver, setMouseOver] = useState<boolean>(false);
    const [redirectionButtonHeight, setRedirectionButtonHeight] = useState<number>(0);
    const {windowWidth, isMobile} = useDomInfo() as DomInfoObjectType;
    const animationDuration: number = 0.4;


    useLayoutEffect(() => {
        setRedirectionButtonHeight(redirectionButtonSignleLine.current?.offsetHeight as number);
    });


    useEffect(() => {
        setRedirectionButtonHeight(redirectionButtonSignleLine.current?.offsetHeight as number);
    }, [windowWidth]);


    useEffect(() => {
        gsap.context(() => {
            if (mouseOver && !isMobile) {
                gsap.to('.redirection_button_single_line', {yPercent: -100, duration: animationDuration});
            } else {
                gsap.to('.redirection_button_single_line', {yPercent: 0, duration: animationDuration});
            }
        }, component)
    }, [mouseOver]);


    if (isInternal) {
        return (
            <Link 
                ref={component}
                className={redirectionButtonClassList} 
                style={{height: `${redirectionButtonHeight}px`}}
                to={href}
                onMouseEnter={() => setMouseOver(true)} 
                onMouseLeave={() => setMouseOver(false)}
                >
                <div ref={redirectionButtonSignleLine} className="redirection_button_single_line flex gap-small items-center">
                    <p>{text}</p>
                    <Icon className="text-light w-big h-big" icon="guidance:left-arrow" />
                </div>
                <div className="redirection_button_single_line flex gap-small">
                    <p>{text}</p>
                    <Icon className="text-light w-big h-big" icon="guidance:left-arrow" />
                </div>
            </Link>
        );
    } else {
        return (
            <a 
                ref={component}
                className={redirectionButtonClassList} 
                style={{height: `${redirectionButtonHeight}px`}}
                href={href}
                onMouseEnter={() => setMouseOver(true)} 
                onMouseLeave={() => setMouseOver(false)}
                >
                <div ref={redirectionButtonSignleLine} className="redirection_button_single_line flex gap-small items-center">
                    <p>{text}</p>
                    <Icon className="text-light w-big h-big" icon="guidance:left-arrow" />
                </div>
                <div className="redirection_button_single_line flex gap-small">
                    <p>{text}</p>
                    <Icon className="text-light w-big h-big" icon="guidance:left-arrow" />
                </div>
            </a>
        );
    }
}