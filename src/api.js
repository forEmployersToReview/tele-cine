// Generally for my projects I would use the native `fetch` or 'axios (a promise based tool to handle http requests)'.

// I also like to have any data with heavy computation to be handled by the server and only send the final response to the client.
// But for such a small task, I will call and compute the data on this layer to send it to the view.

import axios from 'axios';

export const fetchSerie = async () => {
  try {
    const serieURL = 'https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json';
    const serieRequest = await axios.get(serieURL);
    return serieRequest.data;
  }

  catch (e) {
    console.log(e, 'this is the error to handle');
  };
};

export const fetchEpisodes =  async () => {
  try {
    const episodesURL = 'https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json';
    const episodesRequest = await axios.get(episodesURL);
    return episodesRequest.data;
  }

  catch (e) {
    console.log(e, 'this is the error to handle');
  };
}