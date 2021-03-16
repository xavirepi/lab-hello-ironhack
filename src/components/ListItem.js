import React from 'react';
import '../assets/css/ListItem.css'

const ListItem = ({ title, description, img }) => {
    return (
        <div className="ListItem">
            <img src={img.src} alt={img.alt}/>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default ListItem;