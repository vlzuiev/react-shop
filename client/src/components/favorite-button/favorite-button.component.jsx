import React from 'react';
import { ButtonWrapper } from './favorite-button.styles';
import { Icon } from './favorite-button.styles';
import { createStructuredSelector } from 'reselect';
import { selectFavoriteItems } from '../../redux/favorite/favorite.selectors';
import { connect } from 'react-redux';

const FavoriteButton = ({ className, favoriteItems, ...otherProps }) => {
    const disabled = favoriteItems.find(item => item.id === otherProps.id);
  
    return <ButtonWrapper isactive={disabled} className={className} {...otherProps}>
        <Icon isactive={disabled}/>
    </ButtonWrapper>
}

const mapStateToProps = createStructuredSelector({
    favoriteItems: selectFavoriteItems
});

export default connect(mapStateToProps)(FavoriteButton);