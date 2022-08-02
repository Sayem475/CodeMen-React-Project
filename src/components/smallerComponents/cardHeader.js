import React from 'react'
import image from '../../assets/images/boltIcon.svg';

export default function CardHeader({originType}) {
    return (
        <div>
            <h6 className={originType === 'automated' ? 'text-automated' : 'text-manual'}>
            {
                originType === 'automated' &&
                <img src={image} /> 
            } 
            {originType.slice(0,1).toUpperCase()+originType.slice(1)}
            </h6>
        </div>
    )
}
