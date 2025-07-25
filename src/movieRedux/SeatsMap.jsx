import React from 'react'
import seatData from './data/seatData.json'
import SeatsRow from './SeatsRow';
const SeatsMap = () => {
    return (
        <div>
            {
                seatData.map((row, index) => {
                    return <SeatsRow key={index} row={row} />
                })
            }
        </div>
    )
}

export default SeatsMap
