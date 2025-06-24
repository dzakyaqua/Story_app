import { html, css } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class PasswordInput extends LitWithoutShadowDom {
  static properties = {
    showPassword: { type: Boolean },
  };

  constructor() {
    super();
    this.showPassword = false;
  }

  static styles = css`
    .wrapper {
      position: relative;
    }

    input {
      width: 100%;
      padding-right: 2.5rem;
    }

    .toggle {
      position: absolute;
      top: 50%;
      right: 0.75rem;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
    }
  `;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  render() {
    return html`
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <div class="wrapper">
          <input
            id="password"
            name="password"
            type=${this.showPassword ? 'text' : 'password'}
            class="form-control"
            required
          />
          <button
            type="button"
            class="toggle"
            @click=${this.togglePassword}
            aria-label="Toggle password visibility"
          >
            ${this.showPassword ? '🙈' : '👁️'}
          </button>
        </div>
        <div class="invalid-feedback">Wajib diisi</div>
      </div>
    `;
  }
}

customElements.define('password-input', PasswordInput);
