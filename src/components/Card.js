import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    //console.log(this.props.category)
    
    const url =  '/product/'+ this.props.idProduct
    return (
      <div className='card'>
        <Link to={url} className='header_link'>
          <div className='card__container__img'>
            <img className='card__img' src={this.props.image}/>
          </div>  
          <h5 className='card__title'>{this.props.name}</h5>
          <p className='card__price'>$ {this.props.price}</p>
        </Link>
      </div>
    );
  }
}

export default Card;