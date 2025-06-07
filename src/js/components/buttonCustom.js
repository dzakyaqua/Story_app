import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

export class ButtonCustom extends LitWithoutShadowDom {
  static properties = {
    label: { type: String },
    disabled: { type: Boolean },
  };

  constructor() {
    super();
    this.label = 'Klik Saya';
    this.disabled = false;
  }

  render() {
  return html`
    <button
      class="button-custom ${this.disabled ? 'is-disabled' : ''}"
      ?disabled=${this.disabled}
    >
      ${this.label}
    </button>
  `;
}
}

customElements.define('button-custom', ButtonCustom);
