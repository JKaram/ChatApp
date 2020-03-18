import React from 'react';

import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'
const InfoBar = ({ room }) => {
    return (
        <div>
            <img src={onlineIcon} />
            <h3>{room}</h3>
            <a href="/"><img src={closeIcon} alt='close image' />Close</a>
        </div>
    )
}

export default InfoBar;