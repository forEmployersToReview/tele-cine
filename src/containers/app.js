import React, { Component } from 'react';
import { fetchSerie, fetchEpisodes } from '../api';
import MenuPage from './menu_page';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      serie: {},
      episodes: []
    };
  }

  async componentWillMount() {
    const serie = await fetchSerie();
    const episodes = await fetchEpisodes();
    this.setState({ serie, episodes });
  }

  render() {
    const { episodes, serie } = this.state;
    return (
      <div>
        <MenuPage serie={serie} episodes={episodes} />
      </div>
    );
  }
}

export default App;
