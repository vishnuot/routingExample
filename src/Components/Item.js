import React from 'react'
import {useParams} from 'react-router-dom'
function Item() {
    let {id}=useParams();
    return (
        <div>
            <h1>You have clicked on {id} item </h1>
        </div>
    )
}

export default Item
