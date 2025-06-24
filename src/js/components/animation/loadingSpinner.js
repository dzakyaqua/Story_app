import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class LoadingSpinner extends LitWithoutShadowDom {
  
  render() {
    return html`
      <style>
        #spinner-container {
          min-height: 200px;
        }
        .spinner-border {
          width: 3rem;
          height: 3rem;
        }
      </style>

      <div class="d-flex justify-content-center my-5" id="spinner-container">
        <span class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </span>
      </div>
    `;
  }
}

customElements.define('loading-spinner', LoadingSpinner);
