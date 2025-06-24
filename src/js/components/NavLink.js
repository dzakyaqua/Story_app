import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavLink extends LitWithoutShadowDom {
  static properties = {
    content: { type: String },
    to: { type: String },
  };

  constructor() {
    super();
  }

  render() {
   
    if (this.innerHTML.trim() !== '') {
      return html`<slot></slot>`;
    }

   
    if (!this.to) {
      throw new Error(`Atribut "to" harus diterapkan pada elemen <${this.localName}> jika tidak menggunakan slot`);
    }

    return html`
      <li class="nav-item">
        <a class="nav-link" href="${this.to}">${this.content}</a>
      </li>
    `;
  }
}

customElements.define('nav-link', NavLink);
  