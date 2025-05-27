const Add = {
  async init() {
    this._initialListener();
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

  _sendPost() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);

      // this._goToDashboardPage(); // tidak digunakan
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
};

export default Add;
