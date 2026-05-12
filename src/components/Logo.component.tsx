// External packages
import {useEffect, useLayoutEffect, useRef, useState, type JSX} from 'react';
import {t} from 'i18next';
import {gsap} from 'gsap';

// Custom hooks
import {useDomInfo} from '../hooks/useDomInfo';

// Custom types
import type {LogoObjectType} from '../types/LogoObject.type';
import type {DomInfoObjectType} from '../types/DomInfoObject.type';


export function LogoComponent({className}: LogoObjectType): JSX.Element {
    const component = useRef<HTMLAnchorElement|null>(null);
    const singleLineLogoText = useRef<HTMLParagraphElement|null>(null);
    const logoText: string = t('logoText');
    const logoClassList: string = 'font-primary font-normal text-light flex flex-col overflow-hidden w-max text-h1_1270 leading-h1_1270 1440:text-h1_1440 1440:leading-h1_1440 1920:text-h1_1920 1920:leading-h1_1920' + ' ' + className;
    const [logoHeight, setLogoHeight] = useState<number>(0);
    const [mouseOver, setMouseOver] = useState<boolean>(false);
    const animationDuration: number = 0.4;
    const {windowWidth, isMobile} = useDomInfo() as DomInfoObjectType;

    
    useLayoutEffect(() => {
        setLogoHeight(singleLineLogoText.current?.offsetHeight as number);
    });


    useEffect(() => {
        setLogoHeight(singleLineLogoText.current?.offsetHeight as number);
    }, [windowWidth]);


    useEffect(() => {
        gsap.context(() => {
            if (mouseOver && !isMobile) {
                gsap.to('.logo_text', {yPercent: -100, duration: animationDuration});
            } else {
                gsap.to('.logo_text', {yPercent: 0, duration: animationDuration});
            }
        }, component)
    }, [mouseOver]);


    return (
        <>
            <a 
                href="/"
                ref={component}  
                className={logoClassList} 
                style={{height: `${logoHeight}px`}}
                onMouseEnter={() => setMouseOver(true)} 
                onMouseLeave={() => setMouseOver(false)}
                >
                <p ref={singleLineLogoText} className="logo_text">{logoText}</p>
                <p className="logo_text">{logoText}</p>
            </a>
        </>
    );
}