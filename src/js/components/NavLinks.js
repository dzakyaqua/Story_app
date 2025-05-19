import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavLinks extends LitWithoutShadowDom {
  render() {
    return html`
      
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <nav-link class="nav-item">
            <a class="nav-link " aria-current="page" href="/">Home</a>
          </nav-link>
          <nav-link class="nav-item">
            <a class="nav-link" href="/StoryUpdate/add.html">New Story</a>
          </nav-link>
          <nav-link class="nav-item">
            <a class="nav-link " aria-disabled="true">Log In</a>
          </nav-link>
          <nav-link>
            <form class="d-flex" role="search">
              <input class="form-control me-2 shadow-none border-white" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-dark" type="submit">Search</button>
            </form>
          </nav-link>
        </ul>
        
    `;
  }
}

customElements.define('nav-links', NavLinks);
