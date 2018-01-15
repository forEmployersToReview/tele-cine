// Modules
import axios from 'axios';

const fetch_episodes = async () => {
  try {
    const episodes_url =
      'https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json';
    const episodes_request = await axios.get(episodes_url);

    // Remove any non-object property out of the array before sending packet to view
    // Convert the fetched data to an Object of key { `season_number`: [`episodes`] }
    return episodes_request.data.reduce((season, episode) => {
      if (episode) {
        const { SeasonNumber } = episode;
        if (!season[SeasonNumber]) {
          season[SeasonNumber] = [];
        }

        season[SeasonNumber].push(episode);
      }
      return season;
    }, {});
  } catch (e) {
    console.log(e, 'this is the error to handle');
  }
};

export default fetch_episodes;
