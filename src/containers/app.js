import React, { Component } from 'react';
import { fetch_serie, fetch_episodes } from '../api/index';

// Components
import Footer from './footer';
import PageBackground from '../components/PageBackground';
import Header from '../components/Header';
import Season from '../components/Season';

class App extends Component {
  constructor() {
    super();
    this.state = {
      serie: {},
      seasons: {},
      season_number: 1,
      episode_selected: null,
      button_class: '',
      temps: [],
    };
  }

  async componentWillMount() {
    // All episodes are converted to seasons upstream.
    // By the time these values are received in here,
    // they have been modified to an object of seasons containing
    // a colletion of episodes array within each season.
    const seasons = await fetch_episodes();
    const serie = await fetch_serie();
    const temps = Object.keys(seasons).map((key) => `T${key}`)
    this.setState({ serie, seasons, temps });
  }

  render() {
    const {
      seasons,
      button_class,
      serie,
      season_number,
      episode_selected,
      temps
    } = this.state;
    const { Cast, Genres, Images, Synopsis, Title, Year, Stats } = serie;
    return (
      <div className="serie-root">
        <PageBackground images={Images} />
        <Header stats={Stats} title={Title} />
        <Footer synopsis={Synopsis} cast={Cast} />
        <Season
          episodes={seasons[season_number]}
          handle_season_switch={season_number => this.setState({ season_number })}
          handle_episode_expand={episode_selected => this.setState({ episode_selected })}
          episode_selected={episode_selected}
          season_selected={season_number}
          toggle_play_ui={button_class => this.setState({ button_class })}
          button_class={button_class}
          temps={temps}
        />
      </div>
    );
  }
}

export default App;
