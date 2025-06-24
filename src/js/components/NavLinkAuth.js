import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import Utils from '../utils/utils';
import Config from '../config/config';
import CheckUserAuth from '../pages/auth/check-user-auth';

class NavLinks extends LitWithoutShadowDom {
  static properties = {
    isLoggedIn: { type: Boolean },
  };

  constructor() {
    super();
    this.isLoggedIn = Boolean(Utils.getUserToken(Config.USER_TOKEN_KEY));
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('user-logged-out', () => {
      this.isLoggedIn = false;
    });
  }

  _userLogOut(event) {
    event.preventDefault();
    Utils.destroyUserToken(Config.USER_TOKEN_KEY);
    window.dispatchEvent(new Event('user-logged-out')); // trigger re-render
    CheckUserAuth.checkLoginState();
  }

  render() {
    return html`
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <nav-link class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </nav-link>
        <nav-link class="nav-item">
          <a class="nav-link" href="/StoryUpdate/add.html">New Story</a>
        </nav-link>

        ${this.isLoggedIn
          ? html`
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  User
                </a>
                <ul class="dropdown-menu show-on-hover">
                  <li>
                    <a class="dropdown-item" href="#" @click=${this._userLogOut}>
                      Keluar
                    </a>
                  </li>
                </ul>
              </li>
            `
          : html`
              <nav-link class="nav-item">
                <a class="nav-link" href="/auth/login.html">Log In</a>
              </nav-link>
            `}

        <nav-link>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2 shadow-none border-white"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </nav-link>
      </ul>
    `;
  }
}

customElements.define('nav-links', NavLinks);
