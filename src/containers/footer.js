// Modules
import React, { Component } from 'react';
import { PropTypes as T } from 'prop-types';

// Components
import Tabs from '../components/Tabs';
import Content from '../components/Footer/Content';

// Static asset
const company_logo = require('../assets/telecine.jpg');
const menu = ['GERAL', 'ELENCO', 'PRÊMIOS'];

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      menu_index: 1,
    }
  }
  render() {
    const { synopsis, cast } = this.props;
    const { menu_index } = this.state;
    return (
      <div className='serie-detailed-content'>
        <div className='serie-footer-nav-wrapper'>
          <Tabs menu={menu} selected_tab={menu_index} handle_tab={menu_index => this.setState({ menu_index })} />
          <a href='https://www.telecineplay.com.br'>
            <img alt='Place description in here' src={company_logo} className='logo' />
          </a>
        </div>
        <Content synopsis={synopsis} cast={cast} content={menu_index} />
      </div>
    );
  }
}

Footer.defaultProps = {
  synopsis: '',
  cast: []
};

Footer.propTypes = {
  synopsis: T.string,
  cast: T.array,
  handle_tab: T.func
};

export default Footer;
