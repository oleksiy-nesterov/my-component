class MyComponentElement extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['my-attribute'];
  }

  attributeChangedCallback(name: string, oldValue: string) {
    if (oldValue && name === 'my-attribute') {
      // todo something... 
    }
  }

  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = 'My Component 3';
    // todo something... 
  }

  disconnectedCallback() {
    // todo something... 
  }
}

export default MyComponentElement

declare global {
  interface Window {
    MyComponentElement: typeof MyComponentElement
  }
}

if (!window.customElements.get('my-component')) {
  window.MyComponentElement = MyComponentElement
  window.customElements.define('my-component', MyComponentElement)
}
