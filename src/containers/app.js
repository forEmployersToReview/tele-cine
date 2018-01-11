import React, { Component } from 'react';
import { fetchSerie, fetchEpisodes } from 'api';
import MoviePage from './menu_page';

class App extends React.Component {
  state = { serie: {}, episodes: [] };

  async componentWillMount() {
    const serie = await fetchSerie();
    const episodes = await fetchEpisodes();
    this.setState({ serie, episodes });
  }

  render() {
    const { episodes, serie } = this.state;
    return (
      <div>
        <MoviePage serie={serie} episodes={episodes} />
      </div>
    );
  }
}

export default App;
