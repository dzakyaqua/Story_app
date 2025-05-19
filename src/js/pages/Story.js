const Story = {
  async init() {
    await this._initialData();
    this._initialListener();
  },

  async _initialData() {
    const fetchRecords = await fetch('/data/DATA.json');
    const responseRecords = await fetchRecords.json();
    this._UserStatusHistory = responseRecords.results.StatusHistory;
    this._populateStatusHistoryRecordToTable(this._UserStatusHistory);
    this._populateStatusHistoryDataCard(this._UserStatusHistory);
  },

  _populateStatusHistoryDataCard(records) {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = records.map(record => `
    <card-story
      imgUrl="${record.photoUrl}"
      name="${record.name}"
      date="${new Date(record.createdAt).toLocaleDateString()}"
      date="${new Date(record.createdAt).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}"
    ></card-story>
  `).join('');
  }

};

  