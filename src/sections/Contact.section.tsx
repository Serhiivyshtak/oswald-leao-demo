// External packages
import type {JSX} from 'react';
import {t} from 'i18next';

// Custom components
import {TextInputComponent} from '../components/TextInput.component';
import {RedirectionButtonWithTextAndIconComponent} from '../components/RedirectionButtonWithTextAndIcon.component';

// Custom types
import type {IsValueValidObjectType} from '../types/IsValueValidObject.type';


export function ContactSection(): JSX.Element {
    const fullnamePlaceholderContent: string = t('aboutView.contactSection.fullnamePlaceholder');
    const emailPlaceholderContent: string = t('aboutView.contactSection.emailPlaceholder');
    const messagePlaceholderContent: string = t('aboutView.contactSection.messagePlaceholder');
    const legalNoticeAgreementContent: string = t('aboutView.contactSection.legalNoticeAgreement');
    const headingContent: string = t('aboutView.contactSection.heading');
    const sendMessageButtonContent: string = t('aboutView.contactSection.sendMessageButton');


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
        <section className="w-full h-max p-huge flex gap-compact items-center">
            <div className="w-7/12 h-max flex flex-col items-end gap-middle">
                <TextInputComponent placeholder={fullnamePlaceholderContent} type="singleline" isValueValid={isFullnameValid} />
                <TextInputComponent placeholder={emailPlaceholderContent} type="singleline" isValueValid={isEmailValid} />
                <TextInputComponent placeholder={messagePlaceholderContent} type="multiline" isValueValid={isMessageValid} />
                <div className="flex gap-small w-full">
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
                <RedirectionButtonWithTextAndIconComponent href="" text={sendMessageButtonContent} isInternal={true} />
            </div>
            <div className="w-5/12 h-max flex flex-col gap-compact">
                <div className="relative w-full h-max flex gap-compact">
                    <div className="w-2/5 aspect-3/4 bg-cover bg-center bg-no-repeat bg-[url(background_image_7.png)]">

                    </div>
                    <div className="w-2/5 aspect-3/4 bg-cover bg-center bg-no-repeat bg-[url(background_image_8.jpg)]">

                    </div>
                    <h1 
                        className="
                            absolute -bottom-compact text-light font-normal font-primary
                            text-h1_1270 leading-h1_1270
                            1440:text-h1_1440 1440:leading-h1_1440
                            1920:text-h1_1920 1920:leading-h1_1920"
                        >
                        {headingContent}
                    </h1>
                </div>
                <div className="w-full aspect-4/3 bg-indigo-500/50 bg-cover bg-center bg-no-repeatc bg-[url(background_image_9.jpg)]">

                </div>
            </div>
        </section>
    );
}