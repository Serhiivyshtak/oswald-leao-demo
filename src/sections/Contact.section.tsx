// External packages
import type {JSX} from 'react';
import {t} from 'i18next';

// Custom components
import {TextInputComponent} from '../components/TextInput.component';
import {RedirectionButtonWithTextAndIconComponent} from '../components/RedirectionButtonWithTextAndIcon.component';


export function ContactSection(): JSX.Element {
    const fullnamePlaceholderContent: string = t('aboutView.contactSection.fullnamePlaceholder');
    const emailPlaceholderContent: string = t('aboutView.contactSection.emailPlaceholder');
    const messagePlaceholderContent: string = t('aboutView.contactSection.messagePlaceholder');
    const legalNoticeAgreementContent: string = t('aboutView.contactSection.legalNoticeAgreement');
    const headingContent: string = t('aboutView.contactSection.heading');
    const sendMessageButtonContent: string = t('aboutView.contactSection.sendMessageButton');


    return (
        <section className="w-full h-max p-huge flex gap-compact items-center">
            <div className="w-7/12 h-max flex flex-col items-end gap-middle">
                <TextInputComponent placeholder={fullnamePlaceholderContent} type="singleline" />
                <TextInputComponent placeholder={emailPlaceholderContent} type="singleline" />
                <TextInputComponent placeholder={messagePlaceholderContent} type="multiline" />
                <div className="flex gap-small w-full">
                    <input type="checkbox" name="" id="" />
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
                    <div className="w-2/5 aspect-3/4 bg-indigo-500/50">

                    </div>
                    <div className="w-2/5 aspect-3/4 bg-indigo-500/50">

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
                <div className="w-full aspect-4/3 bg-indigo-500/50">

                </div>
            </div>
        </section>
    );
}