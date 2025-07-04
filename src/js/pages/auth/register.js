import Auth from '../../network/auth';
import CheckUserAuth from '../auth/check-user-auth';

const Register = {
  async init() {
    this._initialListener();
    CheckUserAuth.checkLoginState();
  },
 
  _initialListener() {
    const registerForm = document.querySelector('#registerForm');
    registerForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();
 
 
        registerForm.classList.add('was-validated');
        await this._getRegistered();
      },
      false,
    );
  },
 
  async _getRegistered() {
    const formData = this._getFormData();
 
    if (this._validateFormData({ ...formData })) {
      this._showLoading(true); 
      console.log('formData');
      console.log(formData);
 
      try {
        const response = await Auth.register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        window.alert('Registered a new user');
        this._goToLoginPage();
      } catch (error) {
        console.error(error);
      }finally {
      this._showLoading(false); 
    }
    }
  },
 
  _getFormData() {
    const name = document.querySelector('#validationCustomRecordName');
    const email = document.querySelector('#validationCustomEmail');
    const password = document.querySelector('#validationCustomPassword');
 
    return {
      name: name.value,
      email: email.value,
      password: password.value,
    };
  },
 
  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');
 
    return formDataFiltered.length === 0;
  },
 
  _goToLoginPage() {
    window.location.href = '/auth/login.html'
  },
  _showLoading(show) {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) spinner.style.display = show ? 'block' : 'none';
  }
};
 
export default Register;