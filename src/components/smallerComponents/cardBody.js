import React from 'react'
import '../../styles/sayemSass.scss';
export default function CardBody({name, intents}) {
    return (
        <div>
            <h4 className="card-subtitle text-muted mb-0 mt-2">
                {name}</h4>
            <p className="card-text mt-0">
                {intents} Intents</p>
        </div>
    )
}
