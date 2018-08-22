import React, { Component } from 'react';
import { Trans, translate } from 'react-i18next';

class Slide extends Component {
  render() {
    return (
      <section>
        <div className='slide__container'>
          <div className='slide__texts'>
            <h1 className='slide__title'><Trans>Mallory Furniture</Trans></h1>
            <p className='slide__slogan'><Trans>Your furniture is old</Trans><br/><Trans>Our is older</Trans></p>
          </div>
        </div>
      </section>
    );
  }
}

export default translate('translations')(Slide);