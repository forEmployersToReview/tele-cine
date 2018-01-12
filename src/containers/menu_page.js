// Modules
import React, { Component } from 'react';

// Components
import PageBackground from '../components/PageBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seasons from '../components/Seasons';

// Helpers
import stats from './helper';

class SerieMenuPage extends React.Component {
  constructor() {
    super();
    this.state = {
      statsPackage: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.serie.Genres && !this.state.statsPackage.length) {
      const { Genres, Year } = nextProps.serie;
      this.setState({
        statsPackage: stats(Genres, Year)
      });
    }
  }

  render() {
    // I would advice against using capitalized property names.
    // At first glance I think these properties suggests being a Class rather than a data property.
    const { serie, episodes } = this.props;
    const { Cast, Genres, Images, Synopsis, Title, Year } = serie;
    const { statsPackage } = this.state;
    return (
      <div>
        <PageBackground images={Images} />
        <Header stats={statsPackage} title={Title} />
        <Footer />
        <Seasons />
      </div>
    );
  }
}

export default SerieMenuPage;
