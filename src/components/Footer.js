import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Trans, translate } from 'react-i18next';

class Footer extends Component {
  
  render() {
    return (
      <footer className='footer'>
        <div className='footer__image'>
        </div>
        <div className='footer__container'>
          <div className='footer__container__map'>
            <section className='footer__section'>
              <h3 className='footer__title'><Trans>Company</Trans></h3>
              <ul className='footer__list'>
                <li><Link to={'/About'} className='footer__list__link'><Trans>About</Trans></Link></li>
                <li><Link to={'/'} className='footer__list__link'><Trans>Prees</Trans></Link></li>
                <li><Link to={'/Terms'} className='footer__list__link'><Trans>Terms + Conditions</Trans></Link></li>
              </ul>
            </section>
            <section className='footer__section'>
              <h3 className='footer__title'><Trans>Categories</Trans></h3>
              <ul className='footer__list'>
                <li><Link to={'/section/seating'} className='footer__list__link'><Trans>Seating</Trans></Link></li>
                <li><Link to={'/section/tables'} className='footer__list__link'><Trans>Tables</Trans></Link></li>
                <li><Link to={'/section/miscellaneous'} className='footer__list__link'><Trans>Miscellaneous</Trans></Link></li>
              </ul>
            </section>
          </div> 
          <div className='footer__container__social'> 
            <section className='footer__section'>
              <h3 className='footer__title'><Trans>Social</Trans></h3>
              <ul className='footer__list'>
                <li><i className='fa fa-instagram'></i></li>
                <li><i className='fa fa-twitter'></i></li>
                <li><i className='fa fa-pinterest'></i></li>
              </ul>
            </section>
          </div>  
        </div>  
      </footer>
    );
  }
}

export default translate('translations')(Footer);