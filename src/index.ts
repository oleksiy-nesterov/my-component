class MyComponentElement extends HTMLElement {
  private shadow: ShadowRoot | null = null;

  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['my-attribute'];
  }

  emit(eventName: string) {
    const event = new CustomEvent(eventName, {
      detail: {
        element: this.shadow
      }
    });

    this.dispatchEvent(event);
    const callback = (this as any)[eventName];

    if (typeof callback === 'function') {
      callback();
    } else {
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

  attributeChangedCallback(name: string, oldValue: string) {
    if (oldValue && name === 'my-attribute') {
      // todo something... 
    }
  }

  connectedCallback() {
    this.shadow = this.attachShadow({mode: 'open'});
    this.shadow.innerHTML = '<div>My Component</div>';

    // todo something... 

    this.emit('init');
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
