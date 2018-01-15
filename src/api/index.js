// Generally for my projects I would use the native `fetch` or
// 'axios (a promise based tool to handle http requests)'.

// I also like to have any data with heavy computation to be
// handled by the server and only send the final response to the client.
// But for such a small task, I will call and compute the
// data on this layer to send it to the view.

import serie from './fetch_serie';
import episodes from './fetch_episodes';

export const fetch_serie = serie;
export const fetch_episodes = episodes;
