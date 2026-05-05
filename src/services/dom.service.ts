class DomService {
    private rootElement: HTMLElement;
    public isMobile: boolean;
    public windowWidth: number;
    public isPortrait: boolean;


    constructor(rootElement: HTMLElement = document.documentElement) {
        this.rootElement = rootElement;
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        this.windowWidth = window.innerWidth;
        this.isPortrait = window.innerWidth < window.innerHeight;
    }


    public getCssProperty(cssPropertyName: string): string {
        const cssPropertyValue: string = window.getComputedStyle(this.rootElement).getPropertyValue(cssPropertyName).trim();

        if (cssPropertyValue.length === 0) {
            throw new Error('CSS property doesn\'t exist');
        }

        return cssPropertyValue;
    }
}


export default new DomService();