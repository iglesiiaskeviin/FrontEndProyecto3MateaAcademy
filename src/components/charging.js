import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export const ChargingData = () => {
    return (
        <div className="icon-container row">
            <div className="col text-center">
                <FontAwesomeIcon size="5x" icon={faClock}/>
                <p className="getting-data-text">Obteniendo datos!</p>
            </div>
        </div>
    )
}