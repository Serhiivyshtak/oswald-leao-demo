import {useEffect, useRef, useState, type JSX} from 'react';
import {gsap} from 'gsap';
import { t } from 'i18next';
import domService from '../services/dom.service';
import type {CardObjectType} from '../types/CardObject.type';
import WhoAmIComponent from './WhoAmI.component';
import WhatDoIDoComponent from './WhatDoIDo.component';
import WhereToFindMeComponent from './WhereToFindMe.component';
import MyAwardsComponent from './MyAwards.component';
import MyPortfolioComponent from './MyPortfolio.component';
import TestimonialsComponent from './Testimonials.component';
import { useDomInfo } from '../services/useDomInfo';
import type { DomInfoObjectType } from '../types/DomInfoObject.type';


export default function Card({id, title, positioningStylings, childComponentName, hasLogo}: CardObjectType): JSX.Element {
    const component = useRef<HTMLDivElement | null>(null);
    const [mouseOver, setMouseOver] = useState<boolean>(false);
    const {windowWidth, isMobile} = useDomInfo() as DomInfoObjectType;
    const spacingBig: number = parseInt(domService.getCssProperty('--spacing-big'));
    const breakpoint768: number = parseInt(domService.getCssProperty('--breakpoint-768'));
    const componentClassList: string = `relative ring-[0.5px] ring-gray overflow-hidden duration-300 ${positioningStylings}`;
    const animationDuration: number = 0.4;


    //region main heading return
    function renderMainHeading(): JSX.Element {
        return (
            <h2
                className="main_heading absolute text-gray font-secondary bottom-compact right-compact"
                >
                <span className="text-small_1270 leading-base_1270 1440:text-small_1440 1440:leading-base_1440 1920:text-small_1920 1920:leading-base_1920">
                    {'0' + id + ' '}
                </span>
                <span className="text-base_1270 leading-base_1270 1440:text-base_1440 1440:leading-base_1440 1920:text-base_1920 1920:leading-base_1920">
                    {title}
                </span>
            </h2>
        );
    }


    //region head return
    function renderHead(): JSX.Element {
        return (
            <div className="h-max w-full flex flex-col gap-small px-big pt-big">
                <p 
                    className="head__first_heading font-additional font-black text-gray 
                        text-h1_1270 leading-h1_1270 
                        1440:text-h1_1440 1440:leading-h1_1440 
                        1920:text-h1_1920 1920:leading-h1_1920"
                    >
                    {'0' + id}
                </p>
                <p 
                    className="
                        head__second_heading font-primary font-normal text-light 
                        text-h1_1270 leading-h1_1270 
                        1440:text-h1_1440 1440:leading-h1_1440 
                        1920:text-h1_1920 1920:leading-h1_1920"
                        >
                        {title}
                    </p>
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
        if (!hasLogo || windowWidth <= breakpoint768) {
            return null;
        }

        const textContent = t('logoText');

        return (
            <p 
                className="logo absolute font-primary font-normal top-compact left-compact text-light flex 
                    text-h1_1270 leading-h1_1270
                    1440:text-h1_1440 1440:leading-h1_1440 
                    1920:text-h1_1920 1920:leading-h1_1920"
                >
                {textContent}
            </p>
        );
    }


    useEffect(() => {
        if (isMobile) {
            setMouseOver(true);
        }

        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.head__first_heading', {yPercent: 0, y: 0, duration: animationDuration});
                gsap.to('.head__second_heading', {xPercent: 0, x: 0, duration: animationDuration});
                gsap.to('.main_heading', {yPercent: 100, y: spacingBig * 2, duration: animationDuration});

                if (hasLogo && windowWidth >= breakpoint768) {
                    gsap.to('.logo', {yPercent: -100, y: spacingBig * -1, duration: animationDuration});
                }
            } else {
                gsap.to('.main_heading', {yPercent: 0, y: 0, duration: animationDuration});
                gsap.to('.head__first_heading', {yPercent: -100, y: spacingBig * -2, duration: animationDuration});
                gsap.to('.head__second_heading', {xPercent: -100, x: spacingBig * -2, duration: animationDuration});

                if (hasLogo && windowWidth >= breakpoint768) {
                    gsap.to('.logo', {yPercent: 0, y: spacingBig, duration: animationDuration});
                }
            }
        }, component)
    }, [mouseOver]);


    //region component return
    return (
        <div ref={component} className={componentClassList} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => isMobile ? setMouseOver(true) : setMouseOver(false)}>
            {renderLogo()}
            {renderMainHeading()}
            {renderHead()}
            {renderChildComponent()}
        </div>
    );
}
