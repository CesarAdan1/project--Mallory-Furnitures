import React, { Component } from 'react';
import { Trans, translate } from 'react-i18next';
import request  from 'superagent'

class Product extends Component {

	constructor(){
  		super()

  		this.state={
  			dataAll: [],
  			filter: 'all',

  		};

  	}

	componentDidMount(){
		let item = this.props.match.params.prod
		console.log(item)
		  request
		  
	  		.get(`https://mallory-furniture-admin.now.sh/api/v1/products/${item}`)
	  		.then(data =>{
	  			this.setState({
	  				dataAll: data.body

	  			});
	  		})
	}



  render() {
  	console.log(this.state.dataAll)
  	const element = this.state.dataAll
      return (
    	<div className='product'>
    		<div className='product__imgContainer'>
    			<img src={element.imageLink} className='product__image' />
    		</div>
    		<div className='product__infoContainer'>
    			<div className='product__information'>
    				<h1 className='product__information__title'>{element.item}</h1>
    				<h5 className='product__information__price'>${element.price}</h5>
    			</div>
    			<div className='product__action'>
    				<div className='product__resumen'>
    					<p className='condition__title'><Trans>Condition</Trans></p>
    					<p className='condition__result'>{element.condition}</p>
    				</div>
    				<div className='product__resumen'>
    					<p className='condition__title'><Trans>Measurements</Trans></p>
    					<p className='condition__result'>W:{element.width} L:{element.length} H:{element.height}</p>
    				</div>
    				<button className='button__buy'><Trans>Add to Car</Trans></button>
    			</div>
    		</div>
    	</div>
    );
  }
}

export default translate('translations')(Product);