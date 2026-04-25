import { useEffect, useRef, useState, type JSX } from 'react';

export default function Card({
    children,
    identifier,
    title,
    positioningStylings,
    isVertical,
}: any): JSX.Element {
    const componentClassList: string = `relative ring-[0.5px] ring-gray duration-300 hover:bg-gray/50 ${positioningStylings}`;

    //region Main heading return
    function renderMainHeading(): JSX.Element {
        const mainHeading = useRef<HTMLDivElement | null>(null);
        const mainHeadingStylings: React.CSSProperties = {};

        if (isVertical) {
            mainHeadingStylings.transform = `rotateZ(-90deg) translateX(100%)`;
            mainHeadingStylings.transformOrigin = 'bottom right';
        }

        return (
            <h2
                ref={mainHeading}
                style={mainHeadingStylings}
                className="absolute text-gray font-secondary bottom-compact right-compact"
            >
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
        let headingClassList: string = 'font-primary font-normal text-huge text-light leading-huge';

        useEffect(() => {
            setHeadHeight(head.current?.parentElement?.offsetHeight);
        }, []);

        if (isVertical) {
            headStylings.transform = `rotateZ(-90deg) translateX(-100%)`;
            headStylings.transformOrigin = 'top left';
            headStylings.width = `${headHeight}px`;
            headStylings.alignItems = 'end';

            headingClassList += ' ' + 'text-right';
        }

        return (
            <div
                ref={head}
                style={headStylings}
                className="h-max w-full flex flex-col px-compact pt-compact"
            >
                <p className="font-additional font-black text-huge text-gray leading-huge">
                    {'0' + identifier}
                </p>
                <p className={headingClassList}>{title}</p>
            </div>
        );
    }

    //region onMouseEnter handler
    function componentOnMouseEnterHandler() {}

    //region onMouseLeaveHandler
    function componentOnMouseLeaveHandler() {}

    //region Component return
    return (
        <div
            className={componentClassList}
            onMouseEnter={componentOnMouseEnterHandler}
            onMouseLeave={componentOnMouseLeaveHandler}
        >
            {renderMainHeading()}
            {renderHead()}
            <div dangerouslySetInnerHTML={{ __html: children }} />
        </div>
    );
}
