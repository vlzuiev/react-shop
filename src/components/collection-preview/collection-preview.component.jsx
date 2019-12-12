import React from 'react';

import './collection-preview.styles.scss'
import { Link } from 'react-router-dom'

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => {  
    return <div className='collection-preview'>
        <h1 className="title"><Link to={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Link></h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4).map((item) => {
                    return (<CollectionItem key={item.id} item={item}/>)
                })
            }
        </div>
    </div>
}

export default CollectionPreview;