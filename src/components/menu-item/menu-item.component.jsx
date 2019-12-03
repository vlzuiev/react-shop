import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';


const MenuItem = ({ title, imageUrl, size, id, history, match }) => {
    return <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${title}`)}>
        <div className='backgound-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        
        <div className='content' >
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
}

export default withRouter(MenuItem);