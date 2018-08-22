import React, { Component } from 'react';
import Card from './Card';
import { Trans, translate } from 'react-i18next';
import request  from 'superagent'


class All extends Component {
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

	productsFilter = (item) => {
		this.setState({
		 	filter: item
		});
	}
	
	products = (item) =>{
	    if(item === "all") return this.state.dataAll
	    if(item === true)return this.state.dataAll.filter(function(newItem){return newItem.onSale === true});
  	}

  

  render() {
  	const dataAlll = this.state.filter
  	const newList = this.products(dataAlll)
  	const newListCount = newList.length
    return (
    	<div>
    		<div className='box__container__products'>
	    		<div className='products__conatainer'>
		    		<h1 className='products__title'><Trans>All Products</Trans></h1>
		    		<p className='products__subtitle'><Trans>All available listing</Trans></p>
	    		</div>
	    		<div className='button__container'>
			    	<button onClick={ () => { this.productsFilter('all')  } }  className='button active'><Trans>All items</Trans></button>
			    	<button onClick={ () => { this.productsFilter(true)  } } className='button'><Trans>On Sale</Trans></button>
			    	<p className='count'><span className='count__number'>{newListCount}</span> <Trans>Items Showing</Trans></p>
		    	</div>
	    	</div>
	    	<div className='all'>
	    		{newList.map(function(p){
						return <Card name={p.item}  price={p.price} image={p.imageLink} category={p.category} idProduct={p._id}/>
				})}
	    	</div>
    	</div>
    );
  }
}

export default translate('translations')(All);;