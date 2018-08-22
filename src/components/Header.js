import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import logoWhite from '../images/mf-logo-white.svg';
import { translate, Trans } from 'react-i18next';
// import Mexico from '../images/Mexico.png';
// import RU from '../images/RU.png';
// import Russia from '../images/Russia.png';

class Header extends Component {
  // changeLanguage = e =>{
  //   this.props.i18n.changeLanguage(e.target.textContent);
  // };
  render() {
    return (
      <header className='header'>
        <div className='header__container'>
          <Link to='/' className='header_link'>
            <img className='header__logo' src={logoWhite} />
          </Link> 
          
          <nav className='header__principal'>
          {/* <div className='lang'>
          <button className='btn' onClick={ this.changeLanguage }>ESP <img className="Mexico" src={Mexico} alt="Mexico"/></button>
          <button className='btn' onClick={ this.changeLanguage }>ENG <img className="England" src={RU} alt="United Kingdom"/></button>
          <button className='btn' onClick={ this.changeLanguage }>РУС <img className="Russia" src={Russia} alt="Russia"/></button>
        </div>  */}
            <ul className='listNav'>
              <li><Link to='/About' className='header_link'><Trans>About</Trans></Link></li>
              <li><Link to='/Terms' className='header_link'><Trans>Terms + Condition</Trans></Link></li>  
              <li>|</li>
              <li><Link to='/all' className='header_link'><Trans>All</Trans></Link></li>
            </ul>
          </nav>
          <nav className='header__secondary'>
            <ul className='listNav'>
              <li><NavLink to={'/section/seating'  } className='header_link__blue' activeStyle={{ color: '#ffc107', border:'none' }} ><Trans>Seating</Trans></NavLink></li> 
              <li><NavLink to={'/section/tables'} className='header_link__blue'  activeStyle={{ color: '#ffc107', border:'none' }}> <Trans>Tables</Trans></NavLink></li>   
              <li><NavLink to={'/section/desks'} className='header_link__blue' activeStyle={{ color: '#ffc107', border:'none' }}><Trans>Desks</Trans></NavLink></li>
              <li><NavLink to={'/section/storage'} className='header_link__blue' activeStyle={{ color: '#ffc107', border:'none' }}><Trans>Storage</Trans></NavLink> </li>
              <li><NavLink to={'/section/bedroom'} className='header_link__blue'activeStyle={{ color: '#ffc107', border:'none' }} ><Trans>Bedroom</Trans></NavLink></li>
              <li><NavLink to={'/section/miscellaneous'} className='header_link__blue' activeStyle={{ color: '#ffc107', border:'none' }}> <Trans>Miscellaneous</Trans></NavLink></li>
              <li>|</li>
            </ul>   
          </nav>
           <nav className='header__third'>
            <ul className='listNav'>
            <li><i class="fa fa-shopping-cart"></i></li>
            </ul>   
          </nav>
        </div>  
      </header>
    );
  }
  
}

export default translate('translations')(Header);