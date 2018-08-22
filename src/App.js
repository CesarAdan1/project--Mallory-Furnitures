import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './css/styles.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Terms from './components/Terms'
import Footer from './components/Footer'
import All from './components/All'
import Section from './components/Section'
import Product from './components/Products'
import { translate } from 'react-i18next';
import Mexico from './images/Mexico.png';
import RU from './images/RU.png';
import Russia from './images/Russia.png';

class App extends Component {
  changeLanguage = e =>{
     this.props.i18n.changeLanguage(e.target.textContent.toLowerCase());
     };
  render() {
    return (
      <div>
        <Header />
        
        
        <div className='lang'>
          <button className='btn' onClick={ this.changeLanguage }>ESP <img className="Mexico" src={Mexico} alt="Mexico"/></button>
          <button className='btn' onClick={ this.changeLanguage }>ENG <img className="England" src={RU} alt="United Kingdom"/></button>
          <button className='btn' onClick={ this.changeLanguage }>РУС <img className="Russia" src={Russia} alt="Russia"/></button>
        </div>

	        <Switch>
	          <Route exact path='/' component={Home} />
	          <Route exact path='/about' component={About} />
	          <Route exact path='/terms' component={Terms} />
            <Route exact path='/all' component={All} />
            <Route path='/section/:cat' component={Section} />
            <Route path='/product/:prod' component={Product} />
	        </Switch>
        <Footer />
      </div>
    );
  }
}

export default translate('translations')(App);




