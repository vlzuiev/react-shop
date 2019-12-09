import React from 'react';  
import CollectionsOverView from '../../components/collections-overview/collecitons-overview.component';
import { Route } from 'react-router-dom';
import CategoryPage from '../collection/collection.component'
const ShopPage = ({ match }) => { 
    return (<div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverView}/> 
        <Route path={`${match.path}/:collectionId`} component={CategoryPage}/>
    </div>
    );
}
 
export default ShopPage;