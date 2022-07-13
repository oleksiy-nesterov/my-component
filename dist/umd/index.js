(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.default = MyComponentElement;
    if (!window.customElements.get('my-component')) {
        window.MyComponentElement = MyComponentElement;
        window.customElements.define('my-component', MyComponentElement);
    }
});
