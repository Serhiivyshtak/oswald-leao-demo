// External packages
import type {JSX} from 'react';

// Custom types
import type {TextInputObjectType} from '../types/TextInputObject.type';


export function TextInputComponent({placeholder, type}: TextInputObjectType): JSX.Element {
    if (type === 'multiline') {
        return (
            <textarea 
                placeholder={placeholder}
                rows={4}
                className="
                    w-full border-b border-light/30 resize-none py-small text-light font-secondary font-normal outline-none focus:border-light duration-150
                    text-base_1270 leading-base_1270 
                    1440:text-base_1440 1440:leading-base_1440 
                    1920:text-base_1920 1920:leading-base_1920" 
                >

            </textarea>
        );
    }
        

    else if (type = 'singleline') {
        return (
            <input 
                type="text" 
                placeholder={placeholder}
                className="
                    w-full border-b border-light/30 py-small text-light font-secondary font-normal outline-none focus:border-light duration-150
                    text-base_1270 leading-base_1270 
                    1440:text-base_1440 1440:leading-base_1440 
                    1920:text-base_1920 1920:leading-base_1920" 
            />
        );
    }
    
    
    throw new Error('Invalid text input type passed');
}