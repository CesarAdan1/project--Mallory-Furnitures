import React, { Component } from 'react';
import Slide from './Bar';
import Card from './Card';
import SectionButton from './Buttons';
import { Link } from 'react-router-dom';
import { Trans, translate } from 'react-i18next';
import request  from 'superagent'


class Home extends Component {

	constructor(){
  		super()

  		this.state={
  			dataAll: [],
  			filter: 'all'
  		};

  	}


	componentDidMount(){
	  	request
	  		.get('https://mallory-furniture-admin.now.sh/api/v1/products')
	  		.then(data =>{
	  			this.setState({
	  				dataAll: data.body
	  			});
	  		})
	}


	createList = () => {
		return this.state.dataAll.filter( function (item) {return item.featured === true} );
	}

	
  render() {
  	console.log(this.createList())
  	const newList = this.createList()
    return (
    	<div>
			<Slide />
			<div className='box__container__products'>
				<div className='products__conatainer'>
		    		<h1 className='products__title'><Trans>Featured Products</Trans></h1>
		    		<p className='products__subtitle'><Trans>Check out some of our favorite listings</Trans></p>
		    	</div>
		    </div>	
			<div className='all'>
	    		{newList.map(function(p){
						return <Card name={p.item}  price={p.price} image={p.imageLink} category={p.category} idProduct={p._id}/>
				})}
	    	</div>
	    	<div className='container__button'>
	    		<Link className='button__all__link' to='/all'><button className='button__all'><Trans>All Products</Trans></button></Link>
    		</div>
    		<SectionButton />

    	</div>
    );
  }
}

export default translate('translations')(Home);