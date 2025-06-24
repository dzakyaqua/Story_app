import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class CardStory extends LitWithoutShadowDom {
  static properties = {
    imgUrl: { type: String, reflect: true },
    name: { type: String, reflect: true },
    date: { type: String, reflect: true },
    description: { type: String, reflect: true }
  };

  constructor() {
    super();
    this.imgUrl = '';
    this.name = '';
    this.date = '';
    this.description = '';
  }

  render() {
    return html`
      <div class="col">
        <div class="card h-100 shadow-sm">
          <img src="${this.imgUrl || 'https://via.placeholder.com/300x180'}" 
               class="card-img-top object-fit-cover" 
               style="height: 180px" 
               alt="${this.name}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${this.name}</h5>
            <small class="text-muted mb-2">${this.date}</small>
            <p class="card-text flex-grow-1">${this.description?.slice(0, 100)}...</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('card-story', CardStory);