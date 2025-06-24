import CheckUserAuth from './auth/check-user-auth';
import Stories from '../network/story';
const Story = {
  async init() {
    await this._initialData();
    CheckUserAuth.checkLoginState();
    
  },

  async _initialData() {
  const cardContainer = document.getElementById('card-container');
  if (!cardContainer) return;

  // ⏳ Tampilkan placeholder cards
  cardContainer.innerHTML = this._generatePlaceholders();

  try {
    const response = await Stories.getAll();

    // ⌛ Tambahkan delay supaya placeholder terlihat
    await new Promise(resolve => setTimeout(resolve, 1000));

    const stories = response.data.listStory;
    this._populateStoryCards(stories);
  } catch (error) {
    cardContainer.innerHTML = `
      <div class="text-center text-danger w-100">
        <p>Gagal memuat cerita. Silakan coba lagi nanti.</p>
      </div>
    `;  
    console.error('Failed to load stories:', error);
  }
},

  _populateStoryCards(stories) {
    const cardContainer = document.getElementById('card-container');
    if (!cardContainer) return;

    cardContainer.innerHTML = stories.map(story => `
      <card-story
        imgUrl="${story.photoUrl}"
        name="${story.name}"
        date="${new Date(story.createdAt).toLocaleDateString('id-ID', { 
          weekday: 'long', 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        })}"
        description="${story.description}"
      ></card-story>
    `).join('');
  },

  _generatePlaceholders(count = 3) {
  const columns = Array.from({ length: count }).map(() => `
    <div class="col">
      <div class="card" aria-hidden="true">
        <img src="https://via.placeholder.com/600x300?text=..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
        </div>
      </div>
    </div>
  `).join('');

  return `<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">${columns}</div>`;
  },
 _showLoading(show) {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) spinner.style.display = show ? 'block' : 'none';
  }

};

export default Story;