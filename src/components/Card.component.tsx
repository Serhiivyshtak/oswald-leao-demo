import { useEffect, useRef, useState, type JSX } from 'react';
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';


export default function Card({children, identifier, title, positioningStylings, isVertical}: any): JSX.Element {
    const component = useRef<HTMLDivElement | null>(null);
    const {contextSafe} = useGSAP({scope: component});


    const componentClassList: string = `relative ring-[0.5px] ring-gray overflow-hidden duration-300 hover:bg-gray/50 ${positioningStylings}`;


    //region Main heading return
    function renderMainHeading(): JSX.Element {
        const mainHeading = useRef<HTMLDivElement | null>(null);
        const mainHeadingStylings: React.CSSProperties = {};

        if (isVertical) {
            mainHeadingStylings.transform = `rotateZ(-90deg) translateX(100%)`;
            mainHeadingStylings.transformOrigin = 'bottom right';
        }

        return (
            <h2 ref={mainHeading} style={mainHeadingStylings} className="main_heading absolute text-gray font-secondary bottom-compact right-compact">
                <span className="text-small">{'0' + identifier + ' '}</span>
                <span className="text-base">{title}</span>
            </h2>
        );
    }


    //region Head return
    function renderHead(): JSX.Element {
        const head = useRef<HTMLDivElement | null>(null);
        const [headHeight, setHeadHeight] = useState<number | undefined>(0);
        const headStylings: React.CSSProperties = {};
        let secondHeadingClassList: string = 'head__second_heading font-primary font-normal text-huge text-light leading-huge';

        useEffect(() => {
            setHeadHeight(head.current?.parentElement?.offsetHeight);

            gsap.context(() => {
                if (isVertical) {
                    gsap.to('.head__first_heading', {yPercent: -100, y: -16});
                    gsap.to('.head__second_heading', {xPercent: 100, x: 16});
                    return;
                }

                gsap.to('.head__first_heading', {yPercent: -100, y: -16});
                gsap.to('.head__second_heading', {xPercent: -100, x: -16});
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
                    {'0' + identifier}
                </p>
                <p className={secondHeadingClassList}>{title}</p>
            </div>
        );
    }


    //region onMouseEnterHandler
    const componentOnMouseEnterHandler = contextSafe(() => {
        if (isVertical) {
            gsap.to('.main_heading', {xPercent: 100, x: 16});
            gsap.to('.head__first_heading', {yPercent: 0, y: 0});
            gsap.to('.head__second_heading', {xPercent: 0, x: 0});
            return;
        }

        gsap.to('.main_heading', {yPercent: 100, y: 16});
        gsap.to('.head__first_heading', {yPercent: 0, y: 0});
        gsap.to('.head__second_heading', {xPercent: 0, x: 0});
    });

    
    //region onMouseLeaveHandler
    const componentOnMouseLeaveHandler = contextSafe(() => {
        if (isVertical) {
            gsap.to('.main_heading', {xPercent: 0, x: 0});
            gsap.to('.head__first_heading', {yPercent: -100, y: -16});
            gsap.to('.head__second_heading', {xPercent: 100, x: 16});
            return;
        }

        gsap.to('.main_heading', {yPercent: 0, y: 0});
        gsap.to('.head__first_heading', {yPercent: -100, y: -16});
        gsap.to('.head__second_heading', {xPercent: -100, x: -16});
    });


    //region Component return
    return (
        <div ref={component} className={componentClassList} onMouseEnter={componentOnMouseEnterHandler} onMouseLeave={componentOnMouseLeaveHandler}>
            {renderMainHeading()}
            {renderHead()}
            {/* <div dangerouslySetInnerHTML={{ __html: children }} /> */}
        </div>
    );
}
