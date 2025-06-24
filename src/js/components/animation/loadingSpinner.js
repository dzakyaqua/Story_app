import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class LoadingSpinner extends LitWithoutShadowDom {
  
  render() {
    return html`
      <div class="d-flex justify-content-center my-5" id="spinner-container">
        <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `;
  }
}

customElements.define('loading-spinner', LoadingSpinner);
