export function useCssProperty(cssPropertyName: string): string|number {
    const rootElement: HTMLElement = document.documentElement;
    const rawCssPropertyValue: string = window.getComputedStyle(rootElement).getPropertyValue(cssPropertyName).trim();
    let parsedCssPropertyValue: string|number = parseFloat(rawCssPropertyValue);

    if (isNaN(parsedCssPropertyValue)) {
        parsedCssPropertyValue = rawCssPropertyValue;
    }

    if (!parsedCssPropertyValue) {
        throw new Error('CSS property doesn\'t exist');
    }

    return parsedCssPropertyValue;
}