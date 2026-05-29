// External packages
import {useEffect, useRef, type JSX} from 'react';
import {t} from 'i18next';
import {gsap} from 'gsap';

// Custom hooks
import {useCssProperty} from '../hooks/useCssPropery.hook';

// Custom types
import type {CardChildObjectType} from '../types/CardChildObject.type';
import type {SocialMediaLinkObjectType} from '../types/SocialMediaLinkObject.type';

// Custom components
import {RedirectionLinkWithIconComponent} from './RedirectionLinkWithIcon.component';


export function WhereToFindMeComponent({mouseOver}: CardChildObjectType): JSX.Element {
    const socialMediaLinks: Array<SocialMediaLinkObjectType> = t('globalScope.socialMediaLinks', {returnObjects: true}) as Array<SocialMediaLinkObjectType>;
    const component = useRef<HTMLDivElement|null>(null);
    const spacingBig: number = useCssProperty('--spacing-big') as number;
    const slowDuration = useCssProperty('--duration-slow') as number;

    
    useEffect(() => {
        gsap.context(() => {
            if (mouseOver) {
                gsap.to('.container', {xPercent: 0, x: 0, duration: slowDuration});
            } else {
                gsap.to('.container', {xPercent: 100, x: spacingBig, duration: slowDuration});
            }
        }, component);
    }, [mouseOver]);


    function renderSocialMediaLinks(): JSX.Element[] {
        return socialMediaLinks.map((socialMediaLink: SocialMediaLinkObjectType) => 
            <RedirectionLinkWithIconComponent
                isInternal={false}
                href={socialMediaLink.href} 
                key={socialMediaLink.id}
                size={spacingBig}
                icon={socialMediaLink.icon}
            />
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