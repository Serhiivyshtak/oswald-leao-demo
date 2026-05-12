// External packages
import {forwardRef, useEffect, useImperativeHandle, useRef, useState, type JSX} from 'react';
import {Icon} from '@iconify/react';
import {gsap} from 'gsap';

// Custom hooks
import {useDomInfo} from '../hooks/useDomInfo';

// Custom types
import type {RedirectionLinkObjectType} from '../types/RedirectionLinkWithIconObject.type';
import type {DomInfoObjectType} from '../types/DomInfoObject.type';


export const RedirectionLinkWithIconComponent = forwardRef(({href, icon, size, className}: RedirectionLinkObjectType, forwardRef): JSX.Element => {
    const redirectionLinkClassList: string = 'text-light overflow-hidden' + ' ' + className;
    const redirectionLinkStylings: React.CSSProperties = {height: `${size}px`, width: `${size}px`};
    const [mouseOver, setMouseOver] = useState<boolean>(false);
    const component = useRef<HTMLAnchorElement|null>(null);
    const animationDuration: number = 0.4;
    const {isMobile} = useDomInfo() as DomInfoObjectType;


    useImperativeHandle(forwardRef, () => component.current);


    function renderIcon(): JSX.Element|string {
        return (
            <>
                <Icon className="icon" icon={icon as string} width={`${size}px`} height={`${size}px`}/>
                <Icon className="icon" icon={icon as string} width={`${size}px`} height={`${size}px`}/>
            </>
        );
    }

    
    useEffect(() => {
        gsap.context(() => {
            if (mouseOver && !isMobile) {
                gsap.to('.icon', {yPercent: 100 as number * -1, duration: animationDuration});
            } else {
                gsap.to('.icon', {yPercent: 0, duration: animationDuration});
            }
        }, component)
    }, [mouseOver]);


    return (
        <a 
            ref={component} 
            href={href} 
            className={redirectionLinkClassList}
            style={redirectionLinkStylings}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            >
            {renderIcon()}
        </a>
    );
});