// Modules
import axios from 'axios';

// Helpers
import { stats, listID } from '../containers/helper';

const fetch_serie = async () => {
  try {
    // Setup async fetches.
    const serie_URL = 'https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json';
    const serie_request_telecine = await axios.get(serie_URL);

    // Pull necessary data.
    const { Genres, Year, Cast } = serie_request_telecine.data;

    // I'll keep the serie Stats with capitalized letter
    // to follow the current pattern from the returned packet.
    // Stats: The subheader analytics about the serie, (type of show, year of release, country...);
    serie_request_telecine.data.Stats = stats(Genres, Year);

    // Ideal would be that the Cast table would contain extra information about
    // the artist and more of a complete cast information for each serie.
    // Including artist photos, and promotional banners/covers.

    // Gather extra info for show from TheMovieDB
    // Stich properties and send to client.

    for (let actor in Cast) {
      // Get Actor extra details, including their photo from TheMovieDataBase API.
      const TMDB_URL = `
        https://api.themoviedb.org/3/search/person?api_key=1fdc3ffaedd179cd54271990a9781297&language=en-US&query=${Cast[actor]
        .Name}&page=1&include_adult=false
      `
      let details = await axios.get(TMDB_URL);
      // Assign the new Photo Property inside of the Actor profile from telecine api.
      Object.assign(Cast[actor], {
        Photo: `https://image.tmdb.org/t/p/w500/${details.data.results[0].profile_path}`,
        Character: 'Personagem'
      });
    }

    // The pdf example shows more than three elements for the cast members of Penny Dreadful.
    // I will insert dummy elements here to fufill the fidelity of the task.
    for (let dummy = 0; dummy < 20; dummy++) {
     Cast.push({
      ID: listID(dummy, Cast.length + 2, 'PER'),
      Name: 'Atriz ou Ator',
      Character: 'Personagem',
      Photo: 'https://i.pinimg.com/736x/0e/bf/d6/0ebfd6e1bfbdf06a88e83ec2c95744cd--black-german-shepard-german-shepherd-dogs.jpg'
     })
    }

    return serie_request_telecine.data;
  } catch (e) {
    console.log(e, 'this is the error to handle');
  }
};

export default fetch_serie;