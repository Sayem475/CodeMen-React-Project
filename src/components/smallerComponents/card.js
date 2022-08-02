import React from 'react'
import ButtonGroup from './buttonGroup'
import CardBody from './cardBody'
import CardHeader from './cardHeader'
import DateTime from './dateTime'


export default function Card({item}) {

    return (
        
                <div className="card">
                    <div className="card-body">
                        <CardHeader originType={item.originType}/>
                        <CardBody name={
                                item.name
                            }
                            intents={
                                item.intents
                            }/>
                        <ButtonGroup/>
                    </div>
                    <div className="card-footer text-muted p-1">
                        <DateTime dateUpdated={
                            item.dateUpdated
                        }/>
                    </div>
                </div>
                
    )
}
