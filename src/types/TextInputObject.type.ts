import type {IsValueValidObjectType} from './IsValueValidObject.type'


export type TextInputObjectType = {
    placeholder: string,
    type: 'multiline' | 'singleline',
    isValueValid: (value: string, textInputFocused: boolean) => IsValueValidObjectType,
    className?: string
}