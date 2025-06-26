import Auth from '../../network/auth';
import Config from '../../config/config';
import Utils from '../../utils/utils';
import CheckUserAuth from '../auth/check-user-auth';

const Login = {
  async init() {
    this._initialListener();
    CheckUserAuth.checkLoginState();
  },

  _initialListener() {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        loginForm.classList.add('was-validated');
        await this._getLogged();
      },
      false,
    );
  },

  async _getLogged() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      this._showLoading(true);
      console.log('formData:', formData);

      try {
        const response = await Auth.login({
          email: formData.email,
          password: formData.password,
        });
        console.log('Login response:', response.data);

        const { error, message, loginResult } = response.data;
        if (error) {
          alert(message || 'Login gagal!');
          return;
        }
        Utils.setUserToken(Config.USER_TOKEN_KEY, loginResult.token);
        localStorage.setItem('userName', loginResult.name);

        window.dispatchEvent(new Event('user-logged-in'));

        alert('Signed user in detected');

        this._goToDashboardPage();
      } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
        alert(error.response?.data?.message || 'Terjadi kesalahan saat login');
      }finally {
      this._showLoading(false); // ⬅️ Sembunyikan spinner
    }
    }
  },

  _getFormData() {
    const email = document.querySelector('#validationCustomRecordEmail');
    const password = document.querySelector('#validationCustomPassword');

    return {
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _goToDashboardPage() {
    window.location.href = '/';
  },
  _showLoading(show) {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) spinner.style.display = show ? 'block' : 'none';
  }
};

export default Login;
