import React from 'react';
import CollectionsOverView from '../../components/collections-overview/collecitons-overview.component';
import { Route } from 'react-router-dom';
import CategoryPage from '../collection/collection.component'
import {connect} from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions';
 
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverView);
const CollectionPageWithSpinner = WithSpinner(CategoryPage);


class ShopPage extends React.Component {
    constructor(){
        super()

        this.state = {
            loading: true
        }
    }
    usubscribeFromSnapshot = null;

    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.usubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({loading: false});
        });
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (<div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/> } />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/> } />
        </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);