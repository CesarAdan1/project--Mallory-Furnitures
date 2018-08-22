import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Trans, translate } from 'react-i18next';

class SectionButton extends Component {
  render() {
    return (
    	<div>
    		<div className='box__container__products'>
    			<div className='products__conatainer'>
		    		<h1 className='products__title'><Trans>Featured Products</Trans></h1>
		    		<p className='products__subtitle'><Trans>Check out some of our favorite listings</Trans></p>
		    	</div>	
	    	</div>

	    	<div className='container__button'>
	    		<Link className='button__section__link' to='./section/seating'><button className='button__section'><Trans>Seating</Trans></button></Link>
	    		<Link className='button__section__link' to='./section/tables'><button className='button__section'><Trans>Tables</Trans></button></Link>
	    		<Link className='button__section__link' to='./section/desks'><button className='button__section'><Trans>Desks</Trans></button></Link>
	    		<Link className='button__section__link' to='./section/storage'><button className='button__section'><Trans>Storage</Trans></button></Link>
	    		</div>
	    		<div className='container__button'>
	    		<Link className='button__section__link' to='./section/bedroom'><button className='button__section'><Trans>Bedroom</Trans></button></Link>
	    		<Link className='button__section__link' to='./section/miscellaneous'><button className='button__section'><Trans>Miscellaneous</Trans></button></Link>
	    		</div>

    	</div>
    	
    );
  }
}

export default translate('translations')(SectionButton);