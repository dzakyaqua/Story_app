import { html, css, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class InputWithValidation extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
    value: { type: String, reflect: true },
    inputId: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
    showPassword: { type: Boolean },
  };

  static styles = css`
  .password-wrapper {
    position: relative;
  }

  input {
    width: 100%;
    padding-right: 2.5rem;
  }

  .toggle-password {
    position: absolute;
    top: 50%;
    right: 0.75rem;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    line-height: 1;
    font-size: 1.1rem;
    color: #6c757d; /* abu-abu Bootstrap */
    transition: color 0.2s ease;
  }

  .toggle-password:hover {
    color: #343a40; /* lebih gelap saat hover */
  }

  .toggle-password:focus {
    outline: none;
  }
`;

  constructor() {
    super();
    this._checkAvailabilityProperty();

    this.type = 'text';
    this.required = false;
    this.showPassword = false;
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('invalidFeedbackMessage')) {
      throw new Error(
        `Atribut "invalidFeedbackMessage" harus diterapkan pada elemen ${this.localName}`,
      );
    }
  }

  _togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  render() {
    const isPassword = this.type === 'password';

    return html`
      <div class="${isPassword ? 'password-wrapper' : ''}">
        <input
          id=${this.inputId || nothing}
          class="form-control"
          type=${isPassword ? (this.showPassword ? 'text' : 'password') : this.type}
          .value=${this.value || ''}
          ?required=${this.required}
          @input=${(e) => (this.value = e.target.value)}
        />
        ${isPassword
          ? html`
              <span
                class="toggle-password"
                @click=${this._togglePasswordVisibility}
                role="button"
                tabindex="0"
                aria-label="Tampilkan/Sembunyikan password"
              >
                ${this.showPassword
                  ? html`<i class="bi bi-eye-slash"></i>`
                  : html`<i class="bi bi-eye"></i>`}
              </span>
            `
          : nothing}
      </div>

      ${this._validFeedbackTemplate()}
      <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
    `;
  }

  _validFeedbackTemplate() {
    return this.validFeedbackMessage
      ? html`<div class="valid-feedback">${this.validFeedbackMessage}</div>`
      : html``;
  }
}

customElements.define('input-with-validation', InputWithValidation);
