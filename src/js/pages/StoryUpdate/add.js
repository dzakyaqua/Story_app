const Add = {
  async init() {
    this._initialUI();
    this._initialListener();
  },

  _initialUI() {
    const listInputRadioTransactionType = [
      {
        inputId: 'recordType1',
        value: 'income',
        caption: 'Pemasukan',
        required: true,
      },
      {
        inputId: 'recordType2',
        value: 'expense',
        caption: 'Pengeluaran',
        required: true,
      },
    ];

    const inputRadioTransactionTypeAdd = document.querySelector('#inputRadioTransactionTypeAdd');
    inputRadioTransactionTypeAdd.setAttribute(
      'listRadio',
      JSON.stringify(listInputRadioTransactionType),
    );
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
    const amountInput = document.querySelector('#validationCustomAmount'); // tidak digunakan
    const dateInput = document.querySelector('#validationCustomDate'); // tidak digunakan
    const evidenceInput = document.querySelector('#validationCustomEvidence');
    const descriptionInput = document.querySelector('#validationCustomNotes');
    const typeInput = document.querySelector('input[name="recordType"]:checked'); // tidak digunakan

    return {
      name: nameInput.value,
      // amount: Number(amountInput.value), // tidak digunakan
      // date: new Date(dateInput.value), // tidak digunakan
      evidence: evidenceInput.files[0],
      description: descriptionInput.value,
      // type: typeInput.value, // tidak digunakan
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
