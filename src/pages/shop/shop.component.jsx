import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview-component';

import Shop_Data from './shop.data';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collection:Shop_Data
        }
    }

    render() {
        const {collection} = this.state;
        return <div className='shop-page'>
            {
                collection.map(({id, ...otherCollectionProps}) => (                    
                    <CollectionPreview key = {id} {...otherCollectionProps}/>
                ))
            }
        
        </div>
    }

}

export default ShopPage;