class MyComponentElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = null;
    }
    static get observedAttributes() {
        return ['my-attribute'];
    }
    emit(eventName) {
        const event = new CustomEvent(eventName, {
            detail: {
                element: this.shadow
            }
        });
        this.dispatchEvent(event);
        const callback = this[eventName];
        if (typeof callback === 'function') {
            callback();
        }
        else {
            const source = this.getAttribute('on' + eventName);
            if (source) {
                const func = new Function('e', `var event = e; return ${source}`);
                const result = func.call(this, event);
                if (typeof result === 'function') {
                    result.call(this, event);
                }
            }
        }
    }
    attributeChangedCallback(name, oldValue) {
        if (oldValue && name === 'my-attribute') {
        }
    }
    connectedCallback() {
        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.innerHTML = '<div>My Component</div>';
        this.emit('init');
    }
    disconnectedCallback() {
    }
}
export default MyComponentElement;
if (!window.customElements.get('my-component')) {
    window.MyComponentElement = MyComponentElement;
    window.customElements.define('my-component', MyComponentElement);
}
