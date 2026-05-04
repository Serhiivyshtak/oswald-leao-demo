import {useEffect, useRef, useState, type JSX} from 'react';
import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import { t } from 'i18next';
import cssPropertiesService from '../services/cssProperties.service';
import type {CardObjectType} from '../types/CardObject.type';
import WhoAmIComponent from './WhoAmI.component';
import WhatDoIDoComponent from './WhatDoIDo.component';
import WhereToFindMeComponent from './WhereToFindMe.component';
import MyAwardsComponent from './MyAwards.component';
import MyPortfolioComponent from './MyPortfolio.component';
import TestimonialsComponent from './Testimonials.component';


export default function Card({id, title, positioningStylings, childComponentName, isVertical, hasLogo}: CardObjectType): JSX.Element {
    const component = useRef<HTMLDivElement | null>(null);
    const {contextSafe} = useGSAP({scope: component});
    const [mouseOver, setMouseOver] = useState<boolean>(false);
    const spacingCompact: number = parseInt(cssPropertiesService.get('--spacing-compact'));
    const componentClassList: string = `relative ring-[0.5px] ring-gray overflow-hidden duration-300 ${positioningStylings}`;
    const animationDuration: number = 0.4;


    //region main heading return
    function renderMainHeading(): JSX.Element {
        const mainHeading = useRef<HTMLDivElement | null>(null);
        const mainHeadingStylings: React.CSSProperties = {};

        if (isVertical) {
            mainHeadingStylings.transform = `rotateZ(-90deg) translateX(100%)`;
            mainHeadingStylings.transformOrigin = 'bottom right';
        }

        return (
            <h2 ref={mainHeading} style={mainHeadingStylings} className="main_heading absolute text-gray font-secondary bottom-compact right-compact">
                <span className="text-small">{'0' + id + ' '}</span>
                <span className="text-base">{title}</span>
            </h2>
        );
    }


    //region head return
    function renderHead(): JSX.Element {
        const head = useRef<HTMLDivElement | null>(null);
        const [headHeight, setHeadHeight] = useState<number | undefined>(0);
        const headStylings: React.CSSProperties = {};
        let secondHeadingClassList: string = 'head__second_heading font-primary font-normal text-huge text-light leading-huge';

        useEffect(() => {
            setHeadHeight(head.current?.parentElement?.offsetHeight);

            gsap.context(() => {
                gsap.to('.head__first_heading', {yPercent: -100, y: spacingCompact * -1});

                if (isVertical) {
                    gsap.to('.head__second_heading', {xPercent: 100, x: spacingCompact});
                    return;
                }

                gsap.to('.head__second_heading', {xPercent: -100, x: spacingCompact * -1});
            }, component);
        }, []);

        if (isVertical) {
            headStylings.transform = `rotateZ(-90deg) translateX(-100%)`;
            headStylings.transformOrigin = 'top left';
            headStylings.width = `${headHeight}px`;
            headStylings.alignItems = 'end';

            secondHeadingClassList += ' ' + 'text-right';
        }

        return (
            <div ref={head} style={headStylings} className="h-max w-full flex flex-col px-compact pt-compact">
                <p className="head__first_heading font-additional font-black text-huge text-gray leading-huge">
                    {'0' + id}
                </p>
                <p className={secondHeadingClassList}>{title}</p>
            </div>
        );
    }


    //region child component return
    function renderChildComponent(): JSX.Element {
        const childComponents: Record<string, JSX.Element> = {
            whoAmI: <WhoAmIComponent mouseOver={mouseOver}/>,
            whatDoIDo: <WhatDoIDoComponent mouseOver={mouseOver}/>,
            whereToFindMe: <WhereToFindMeComponent mouseOver={mouseOver}/>,
            myAwards: <MyAwardsComponent mouseOver={mouseOver}/>,
            myPortfolio: <MyPortfolioComponent mouseOver={mouseOver}/>,
            testimonials: <TestimonialsComponent mouseOver={mouseOver}/>,
            test: <></>
        }

        if (!childComponents[childComponentName]) {
            throw new Error('childComponentName doesn\'t exist');
        }

        return childComponents[childComponentName];
    }


    //region logo return
    function renderLogo(): JSX.Element|null {
        if (!hasLogo) {
            return null;
        }

        const textContent = t('logoText');

        return (
            <p className="logo absolute font-primary font-normal text-huge top-compact left-compact text-light flex">
                {textContent}
            </p>
        );
    }


    //region onMouseEnterHandler
    const componentOnMouseEnterHandler = contextSafe(() => {
        setMouseOver(true);

        gsap.to('.head__first_heading', {yPercent: 0, y: 0, duration: animationDuration});
        gsap.to('.head__second_heading', {xPercent: 0, x: 0, duration: animationDuration});

        if (isVertical) {
            gsap.to('.main_heading', {xPercent: 100, x: spacingCompact, duration: animationDuration});
        } else {
            gsap.to('.main_heading', {yPercent: 100, y: spacingCompact, duration: animationDuration});
        }

        if (hasLogo) {
            gsap.to('.logo', {yPercent: -100, y: spacingCompact * -1, duration: animationDuration});
        }
    });

    
    //region onMouseLeaveHandler
    const componentOnMouseLeaveHandler = contextSafe(() => {
        setMouseOver(false);

        if (isVertical) {
            gsap.to('.main_heading', {xPercent: 0, x: 0, duration: animationDuration});
            gsap.to('.head__first_heading', {yPercent: -100, y: spacingCompact * -1, duration: animationDuration});
            gsap.to('.head__second_heading', {xPercent: 100, x: spacingCompact, duration: animationDuration});
        } else {
            gsap.to('.main_heading', {yPercent: 0, y: 0, duration: animationDuration});
            gsap.to('.head__first_heading', {yPercent: -100, y: spacingCompact * -1, duration: animationDuration});
            gsap.to('.head__second_heading', {xPercent: -100, x: spacingCompact * -1, duration: animationDuration});
        }

        if (hasLogo) {
            gsap.to('.logo', {yPercent: 0, y: spacingCompact, duration: animationDuration});
        }
    });


    //region component return
    return (
        <div ref={component} className={componentClassList} onMouseEnter={componentOnMouseEnterHandler} onMouseLeave={componentOnMouseLeaveHandler}>
            {renderLogo()}
            {renderMainHeading()}
            {renderHead()}
            {renderChildComponent()}
        </div>
    );
}
