import CheckUserAuth from '../auth/check-user-auth';
import Stories from '../../network/story';

const Add = {
  async init() {
    this._initialListener();
    CheckUserAuth.checkLoginState();
  },

  _initialListener() {
    const addFormRecord = document.querySelector('#addRecordForm');
    addFormRecord.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        addFormRecord.classList.add('was-validated');
        this._sendPost();
      },
      false,
    );
  },

 async _sendPost() {
  const formData = this._getFormData();

  if (this._validateFormData({ ...formData })) {
    this._showLoading(true);
    try {
      await Stories.create({
        description: formData.description,
        photo: formData.evidence,
      });

      alert('Story berhasil ditambahkan!');
      this._goToDashboardPage();

    } catch (error) {
      console.error('Gagal mengirim story:', error);
      alert('Gagal mengirim story. Pastikan ukuran gambar < 1MB.');
    }finally {
      this._showLoading(false); // ⬅️ Sembunyikan spinner
    }
  }
},


_getFormData() {
  const nameInput = document.querySelector('#validationCustomRecordName');
  const evidenceInput = document.querySelector('#validationCustomEvidence');
  const descriptionInput = document.querySelector('#validationCustomNotes');


  return {
    name: nameInput.value,
    evidence: evidenceInput.files[0],
    description: descriptionInput.value,
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

export default Add;
