import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class LoadingSpinner extends LitWithoutShadowDom {
  
  render() {
    return html`

      <div class="d-flex justify-content-center " id="spinner-container">
        <span class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </span>
      </div>
    `;
  }
}

customElements.define('loading-spinner', LoadingSpinner);
