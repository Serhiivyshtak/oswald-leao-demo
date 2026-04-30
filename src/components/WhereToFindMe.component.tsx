import { useEffect, useRef, type JSX } from "react";
import {gsap} from 'gsap';
import { Icon } from "@iconify/react";
import type { CardChildComponentProps } from "../types/CardChildComponentProps.type";
import cssPropertiesService from '../services/cssProperties.service';
import { useTranslation } from "react-i18next";


export default function WhereToFindMeComponent({mouseOver}: CardChildComponentProps): JSX.Element {
    const {t} = useTranslation();
    const socialMediaLinks: Array<Object> = t('socialMediaLinks', {returnObjects: true}) as Array<Object>;
    const component = useRef<HTMLDivElement|null>(null);
    const spacingCompact: number = parseInt(cssPropertiesService.get('--spacing-compact'));
    const spacingBig: number = parseInt(cssPropertiesService.get('--spacing-big'));
    const animationDuration: number = 0.6;

    
    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.container', {xPercent: 0, x: 0, duration: animationDuration});
            } else {
                gsap.to('.container', {xPercent: 100, x: spacingCompact, duration: animationDuration});
            }
        }, component);
    }, [mouseOver]);


    function renderSocialMediaLinks(): JSX.Element[] {
        return socialMediaLinks.map((socialMediaLink: any) => 
            <a key={socialMediaLink.id} href={socialMediaLink.href}>
                <Icon icon={socialMediaLink.icon} width={`${spacingBig}px`} height={`${spacingBig}px`} className="text-light"/>
            </a>
        )
    }


    return (
        <div ref={component}>
            <div className="container absolute bottom-compact right-compact h-max w-max flex flex-col gap-small">
                {renderSocialMediaLinks()}
            </div>
        </div>
    );
}