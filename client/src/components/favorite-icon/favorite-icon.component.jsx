import React from 'react';
import { connect } from 'react-redux';
import { IconWrapper, CountCircle, Icon } from './favorite-icon.styles';
import { selectFavoriteItemsCount } from '../../redux/favorite/favorite.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

const FavoriteIcon = ({ number, history}) => {

    return <IconWrapper onClick={() => history.push('/favorite')}>
        <Icon />
        <CountCircle> {number} </CountCircle>
    </IconWrapper>
};

const mapStateToProps = createStructuredSelector({
    number: selectFavoriteItemsCount
});

export default connect(mapStateToProps)(withRouter(FavoriteIcon));