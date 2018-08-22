import React, { Component } from 'react';
import { Trans, translate } from 'react-i18next';

class About extends Component {
  render() {
    return (
    	<div className='box__container__products'>
    		<div className='products__conatainer'>
	    		<h1 className='products__title'><Trans>About</Trans></h1>
	    		<p className='products__subtitle'></p>
    		</div>
    	</div>
    );
  }
}

export default translate('translations')(About);