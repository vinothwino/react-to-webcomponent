// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

class MyWebComponent extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    ReactDOM.render(<MyComponent name={this.getAttribute('name')} />, mountPoint);
  }
}

customElements.define('my-component', MyWebComponent);
