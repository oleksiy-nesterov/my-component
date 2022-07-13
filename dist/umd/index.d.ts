declare class MyComponentElement extends HTMLElement {
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: string): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
export default MyComponentElement;
declare global {
    interface Window {
        MyComponentElement: typeof MyComponentElement;
    }
}
