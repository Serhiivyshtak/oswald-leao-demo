import { useEffect, useRef, type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import {gsap} from 'gsap';
import { Icon } from "@iconify/react";
import type { CardChildObjectType } from '../types/CardChildObject.type';
import type {SocialMediaLinkObjectType} from '../types/SocialMediaLinkObject.type';
import domService from '../services/dom.service';


export default function WhereToFindMeComponent({mouseOver}: CardChildObjectType): JSX.Element {
    const {t} = useTranslation();
    const socialMediaLinks: Array<SocialMediaLinkObjectType> = t('socialMediaLinks', {returnObjects: true}) as Array<SocialMediaLinkObjectType>;
    const component = useRef<HTMLDivElement|null>(null);
    const spacingBig: number = parseInt(domService.getCssProperty('--spacing-big'));
    const animationDuration: number = 0.6;

    
    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.container', {xPercent: 0, x: 0, duration: animationDuration});
            } else {
                gsap.to('.container', {xPercent: 100, x: spacingBig, duration: animationDuration});
            }
        }, component);
    }, [mouseOver]);


    function renderSocialMediaLinks(): JSX.Element[] {
        return socialMediaLinks.map((socialMediaLink: SocialMediaLinkObjectType) => 
            <a key={socialMediaLink.id} href={socialMediaLink.href}>
                <Icon icon={socialMediaLink.icon} width={`${spacingBig}px`} height={`${spacingBig}px`} className="text-light"/>
            </a>
        )
    }


    return (
        <div ref={component}>
            <div className="container absolute bottom-big right-big h-max w-max flex gap-small 768:flex-col">
                {renderSocialMediaLinks()}
            </div>
        </div>
    );
}