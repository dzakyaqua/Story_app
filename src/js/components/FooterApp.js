import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class FooterApp extends LitWithoutShadowDom {
  render() {
    return html`
      <p class="text-center text-white mb-0">
        Made by Muhammad Sulthan Dzaky &copy; 2025
      </p>
    `;
  }
}

customElements.define('footer-app', FooterApp);