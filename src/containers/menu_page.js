import React, { Component } from 'react';
import PageBackground from '../components/PageBackground';
import Header from '../components/Header';

class SerieMenuPage extends React.Component {
  render() {
    const { serie, episodes } = this.props;
    // I would advice against using capitalized property names.
    // At first glance I think these properties suggests being a Class rather.

    const { Cast, Genres, Images, Synopsis, Title, Year } = serie;
    console.log(serie);
    return (
      <div>
        <PageBackground images={Images} />
        <Header genres={Genres} title={Title} year={Year} />
        <div>Footer</div>
        <div>Right Nav</div>
      </div>
    );
  }
}
export default SerieMenuPage;
