class MyComponentElement extends HTMLElement {
    constructor() {
        super();
    }
    static get observedAttributes() {
        return ['my-attribute'];
    }
    attributeChangedCallback(name, oldValue) {
        if (oldValue && name === 'my-attribute') {
        }
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = 'My Component';
    }
    disconnectedCallback() {
    }
}
export default MyComponentElement;
if (!window.customElements.get('my-component')) {
    window.MyComponentElement = MyComponentElement;
    window.customElements.define('my-component', MyComponentElement);
}
