import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleSeat } from './redux/movieSlice';
const Seats = ({ seat, isHeader }) => {
    const dispatch = useDispatch();
    const selectedSeats = useSelector((state) => state.movieSlice.selectedSeats);
    const confirmedSeats = useSelector((state) => state.movieSlice.confirmedSeats);
    const isSelected = selectedSeats.some(s => s.soGhe === seat.soGhe);
    const isConfirmed = confirmedSeats.some(s => s.soGhe === seat.soGhe);

    let className = "bg-transparent text-white";

    if (isConfirmed) {
        className = "bg-red-600 text-white cursor-not-allowed";
    } else if (isSelected) {
        className = "bg-yellow-400 text-black";
    } else {
        className = "hover:bg-gray-400 text-white";
    }
    const handleClick = () => {
        if (!isConfirmed) {
            dispatch(handleSeat(seat));
        }
    };
    if (isHeader) {
        return (
            <button
                className="w-[45px] h-[35px] text-xl ml-[2%] mb-[1%] text-yellow-300 font-bold bg-transparent cursor-default border-none"
                disabled
            >
                {seat.soGhe}
            </button>
        );
    }
    return (
        <button
            onClick={handleClick}
            className={`w-[45px] h-[35px] text-xs ml-[2%] mb-[1%] rounded border-4 text-white ${className} `}>
            {seat.soGhe}
        </button >
    )
}

export default Seats
