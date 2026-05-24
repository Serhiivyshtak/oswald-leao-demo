// External packages
import {useEffect, useRef, useState, type JSX} from 'react';
import {Icon} from '@iconify/react';
import {gsap} from 'gsap';

// Custom types
import type {TextInputObjectType} from '../types/TextInputObject.type';

// Custom hooks
import {useCssProperty} from '../hooks/useCssPropery.hook';


export function TextInputComponent({placeholder, type, isValueValid}: TextInputObjectType): JSX.Element {
    const component = useRef<HTMLDivElement|null>(null);
    const [value, setValue] = useState<string>('');
    const [textInputFocused, setTextInputFocused] = useState<boolean>(true);
    const [valueValid, setValueValid] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string|null|undefined>(null);
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
    const lightColor: string = useCssProperty('--color-light') as string;
    const smallSpacing: number = useCssProperty('--spacing-small') as number;
    const dangerousColor: string = useCssProperty('--color-dangerous') as string;
    const [textInputStylings, setTextInputStylings] = useState<React.CSSProperties>();
    const textInputClassList: string = 'w-full border-b py-small text-light font-secondary font-normal outline-none resize-none focus:pl-compact duration-150 text-base_1270 leading-base_1270 1440:text-base_1440 1440:leading-base_1440 1920:text-base_1920 1920:leading-base_1920';


    useEffect(() => {
        const {valueValid, errorMessage} = isValueValid(value, textInputFocused);
        setValueValid(valueValid);
        setErrorMessage(errorMessage);
    }, [value, textInputFocused]);


    useEffect(() => {
        if (valueValid) {
            setTextInputStylings({borderColor: lightColor + '4D'});
        } else {
            setTextInputStylings({borderColor: dangerousColor});
        }
    }, [valueValid]);


    useEffect(() => {
        gsap.context(() => {
            if (showErrorMessage) {
                gsap.to('.error_text', {yPercent: 0, y: 0});
            } else {
                gsap.to('.error_text', {yPercent: 100, y: smallSpacing});
            }
        }, component);
    }, [showErrorMessage]);


    function renderErrorIcon(): JSX.Element|null {
        if (!errorMessage) {
            return null;
        }

        return (
            <button className="absolute right-0 bottom-small bg-gray">
                <Icon 
                    className="text-dangerous w-middle h-middle" 
                    icon="material-symbols-light:error-outline" 
                    onMouseEnter={() => setShowErrorMessage(true)}
                    onMouseLeave={() => setShowErrorMessage(false)}
                />
            </button>
        );
    }


    function renderErrorMessage(): JSX.Element {
        return (
            <p 
                className="
                    error_text absolute bottom-small right-middle text-dangerous font-secondary font-normal 
                    text-base_1270 leading-base_1270 
                    1440:text-base_1440 1440:leading-base_1440 
                    1920:text-base_1920 1920:leading-base_1920"
                    >
                {errorMessage}
            </p>
        );
    }


    if (type === 'multiline') {
        return (
            <div ref={component} className="relative w-full h-max overflow-hidden">
                <textarea 
                    onChange={e => setValue(e.target.value)}
                    onFocus={() => setTextInputFocused(true)}
                    onBlur={() => setTextInputFocused(false)}
                    placeholder={placeholder}
                    rows={4}
                    className={textInputClassList}
                    style={textInputStylings}
                >
                </textarea>
                {renderErrorIcon()}
                {renderErrorMessage()}
            </div>
        );
    }
        

    else if (type = 'singleline') {
        return (
            <div ref={component} className="relative w-full overflow-hidden">
                <input 
                    onChange={e => setValue(e.target.value)}
                    onFocus={() => setTextInputFocused(true)}
                    onBlur={() => setTextInputFocused(false)}
                    value={value}
                    placeholder={placeholder}
                    className={textInputClassList}
                    style={textInputStylings}
                    type="text"
                />
                {renderErrorIcon()}
                {renderErrorMessage()}
            </div>
        );
    }
    
    
    throw new Error('Invalid text input type passed');
}