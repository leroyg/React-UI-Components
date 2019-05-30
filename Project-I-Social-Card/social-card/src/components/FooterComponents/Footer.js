import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faComment} />


const Footer = () => {
    return (
        <div>
    {element}
        </div>

    )
}

export default Footer