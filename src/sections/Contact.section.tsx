// External packages
import {useEffect, useRef, type JSX} from 'react';
import {t} from 'i18next';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

// Custom components
import {TextInputComponent} from '../components/TextInput.component';
import {RedirectionButtonWithTextAndIconComponent} from '../components/RedirectionButtonWithTextAndIcon.component';

// Custom types
import type {IsValueValidObjectType} from '../types/IsValueValidObject.type';
import type {AnySectionOnjectType} from '../types/AnySection.type';


export function ContactSection({className}: AnySectionOnjectType): JSX.Element {
    const fullnamePlaceholderContent: string = t('aboutView.contactSection.fullnamePlaceholder');
    const emailPlaceholderContent: string = t('aboutView.contactSection.emailPlaceholder');
    const messagePlaceholderContent: string = t('aboutView.contactSection.messagePlaceholder');
    const legalNoticeAgreementContent: string = t('aboutView.contactSection.legalNoticeAgreement');
    const headingContent: string = t('aboutView.contactSection.heading');
    const sendMessageButtonContent: string = t('aboutView.contactSection.sendMessageButton');
    const component = useRef<HTMLElement|null>(null);
    const componentClassName: string = className + ' ' + 'w-full h-max flex gap-compact items-center px-compact py-huge 430:px-big 768:p-huge flex-col 430:flex-row';


    gsap.registerPlugin(ScrollTrigger);


    useEffect(() => {
        gsap.context(() => {
            gsap.fromTo('.element', {
                y: 128,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.3,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.trigger_element',
                    start: 'top 70%',
                    end: 'top 10%',
                    toggleActions: 'play none none reverse',
                    scrub: true,
                }
            });
        }, component);
    }, []);


    function isFullnameValid(value: string, textInputFocused: boolean): IsValueValidObjectType {
        if (textInputFocused) {
            return {valueValid: true, errorMessage: null};
        }

        if (value.trim().length === 0) {
            return {valueValid: false, errorMessage: t('aboutView.contactSection.emptyFullnameError')};
        }

        if (value.trim().length < 3) {
            return {valueValid: false, errorMessage: t('aboutView.contactSection.shortFullnameError')};
        }

        if (value.trim().length > 40) {
            return {valueValid: false, errorMessage: t('aboutView.contactSection.longFullnameError')};
        }

        return {valueValid: true};
    }


    function isEmailValid(value: string, textInputFocused: boolean): IsValueValidObjectType {
        if (textInputFocused) {
            return {valueValid: true};
        }

        if (value.trim().length === 0) {
            return {valueValid: false, errorMessage: t('aboutView.contactSection.emptyEmailError')};
        }

        return {valueValid: true};
    }


    function isMessageValid(value: string, textInputFocused: boolean): IsValueValidObjectType {
        if (textInputFocused) {
            return {valueValid: true};
        }

        if (value.trim().length === 0) {
            return {valueValid: false, errorMessage: t('aboutView.contactSection.emptyMessageError')};
        }

        if (value.trim().length < 3) {
            return {valueValid: false, errorMessage: t('aboutView.contactSection.shortMessageError')};
        }

        if (value.trim().length > 300) {
            return {valueValid: false, errorMessage: t('aboutView.contactSection.longMessageError')};
        }

        return {valueValid: true};
    }


    return (
        <section 
            ref={component}
            className={componentClassName}
            >
            <h2 
                className="
                    element text-light font-normal font-primary mb-[112px]
                    text-h1_1270 leading-h1_1270
                    1440:text-h1_1440 1440:leading-h1_1440
                    1920:text-h1_1920 1920:leading-h1_1920
                    block 430:hidden"
                >
                {headingContent}
            </h2>
            <div 
                className="
                    trigger_element h-max flex flex-col items-end gap-middle
                    w-full 430:w-1/2 768:w-7/12"
                >
                <TextInputComponent className="element" placeholder={fullnamePlaceholderContent} type="singleline" isValueValid={isFullnameValid} />
                <TextInputComponent className="element" placeholder={emailPlaceholderContent} type="singleline" isValueValid={isEmailValid} />
                <TextInputComponent className="element" placeholder={messagePlaceholderContent} type="multiline" isValueValid={isMessageValid} />
                <div className="element flex gap-small w-full">
                    <input type="checkbox" />
                    <p 
                        className="
                            text-light font-secondary font-normal 
                            text-base_1270 leading-base_1270 
                            1440:text-base_1440 1440:leading-base_1440 
                            1920:text-base_1920 1920:leading-base_1920"
                        >
                        {legalNoticeAgreementContent}
                    </p>
                </div>
                <RedirectionButtonWithTextAndIconComponent className="element" href="/about" text={sendMessageButtonContent} isInternal={true} />
            </div>
            <div 
                className="
                    h-max flex-col gap-compact 
                    w-1/2 768:w-5/12
                    hidden 430:flex"
                >
                <div className="relative w-full h-max flex gap-compact">
                    <div 
                        className="
                            element aspect-3/4 bg-cover bg-center bg-no-repeat bg-[url(background_image_7.png)]
                            w-1/2 768:w-2/5"
                        >
                    </div>
                    <div 
                        className="
                            element aspect-3/4 bg-cover bg-center bg-no-repeat bg-[url(background_image_8.jpg)]
                            w-1/2 768:w-2/5"
                        >
                    </div>
                    <h2 
                        className="
                            absolute element -bottom-compact text-light font-normal font-primary
                            text-h1_1270 leading-h1_1270
                            1440:text-h1_1440 1440:leading-h1_1440
                            1920:text-h1_1920 1920:leading-h1_1920
                            hidden 430:block"
                        >
                        {headingContent}
                    </h2>
                </div>
                <div 
                    className="element w-full aspect-4/3 bg-cover bg-center bg-no-repeatc bg-[url(background_image_9.jpg)]">
                </div>
            </div>
        </section>
    );
}