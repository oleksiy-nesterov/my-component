declare class MyComponentElement extends HTMLElement {
    private shadow;
    constructor();
    static get observedAttributes(): string[];
    emit(eventName: string): void;
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
