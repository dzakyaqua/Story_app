// import CheckUserAuth from '../auth/check-user-auth';

// const Edit = {
//   async init() {
//     this._initialListener();
//     CheckUserAuth.checkLoginState();
//   },

//   async _initialData() {
//     const transactionId = Number(this._getTransactionId());

//     if (!transactionId) {
//       alert('Data dengan id yang dicari tidak ditemukan');
//       return;
//     }

//     const fetchRecords = await fetch('/data/DATA.json');
//     const responseRecords = await fetchRecords.json();
//     const userTransactionsHistory = responseRecords.results.transactionsHistory;

//     const dataRecord = userTransactionsHistory.find((item) => item.id === transactionId);

//     this._populateTransactionToForm(dataRecord);
//   },

//   _initialListener() {
//     const editRecordForm = document.querySelector('#editRecordForm');
//     editRecordForm.addEventListener(
//       'submit',
//       (event) => {
//         event.preventDefault();
//         event.stopPropagation();

//         editRecordForm.classList.add('was-validated');
//         this._sendPost();
//       },
//       false,
//     );
//   },

//   _sendPost() {
//     const formData = this._getFormData();

//     if (this._validateFormData({ ...formData })) {
//       console.log('formData');
//       console.log(formData);

//       // this._goToDashboardPage();
//     }
//   },

//   _getFormData() {
//     const nameInput = document.querySelector('#validationCustomRecordName');
//     const evidenceInput = document.querySelector('#validationCustomEvidence');
//     const descriptionInput = document.querySelector('#validationCustomNotes');

//     return {
//     name: nameInput.value,
//     evidence: evidenceInput.files[0],
//     description: descriptionInput.value,
//   };
//   },

//   _populateTransactionToForm(transactionRecord = null) {
//     if (!(typeof transactionRecord === 'object')) {
//       throw new Error(
//         `Parameter transactionRecord should be an object. The value is ${transactionRecord}`,
//       );
//     }

//     const nameInput = document.querySelector('#validationCustomRecordName');
//     const evidenceInput = document.querySelector('#validationCustomEvidence');
//     const descriptionInput = document.querySelector('#validationCustomNotes');


//     nameInput.value = transactionRecord.name;
//     evidenceInput.setAttribute('src', transactionRecord.evidenceUrl);
//     evidenceInput.setAttribute('alt', transactionRecord.name);
//     descriptionInput.value = transactionRecord.description;
    
//   },

//   _validateFormData(formData) {
//     delete formData.evidence;
//     const formDataFiltered = Object.values(formData).filter((item) => item === '');

//     return formDataFiltered.length === 0;
//   },

//   _getTransactionId() {
//     const searchParamEdit = new URLSearchParams(window.location.search);
//     return searchParamEdit.has('id') ? searchParamEdit.get('id') : null;
//   },

//   _goToDashboardPage() {
//     window.location.href = '/';
//   },
// };

// export default Edit;

const Edit = {
  async init() {
    alert('Fitur edit tidak tersedia');
    window.location.href = '/';
  },
};

export default Edit;
