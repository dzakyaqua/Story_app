import CheckUserAuth from './auth/check-user-auth';
import Stories from '../network/story';
const Story = {
  async init() {
    await this._initialData();
    CheckUserAuth.checkLoginState();
    
  },

  async _initialData() {
  try {
    const response = await Stories.getAll(); // Axios call
    const stories = response.data.listStory;
    this._populateStoryCards(stories);
  } catch (error) {
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



};

export default Story;