import React from 'react'
import Seats from './Seats'

const SeatsRow = ({ row }) => {
    return (
        <div>
            <div className="flex items-center mb-2">
                <div className="text-yellow-400 text-xl w-[40px] font-bold">
                    {row.hang}
                </div>
                {row.danhSachGhe.map((ghe, index) => (
                    <Seats
                        key={index}
                        seat={ghe}
                        isHeader={row.hang === ""}
                    />
                ))}
            </div>
        </div>
    )
}

export default SeatsRow
