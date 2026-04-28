class CssPropertiesService {
    private rootElement: HTMLElement;

    constructor(rootElement: HTMLElement = document.documentElement) {
        this.rootElement = rootElement;
    }

    public get(cssPropertyName: string): string {
        const cssPropertyValue: string = window.getComputedStyle(this.rootElement).getPropertyValue(cssPropertyName).trim();

        if (cssPropertyValue.length === 0) {
            throw new Error('CSS property doesn\'t exist');
        }

        return cssPropertyValue;
    }
}

export default new CssPropertiesService();