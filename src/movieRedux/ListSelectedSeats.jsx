import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cancelSeat } from './redux/movieSlice';

const ListSelectedSeats = () => {
    const dispatch = useDispatch();
    const confirmedSeats = useSelector((state) => state.movieSlice.confirmedSeats);

    const total = confirmedSeats.reduce((sum, seat) => sum + seat.gia, 0);

    const handleRemove = (seat) => {
        dispatch(cancelSeat(seat));
    };
    return (
        <div className="bg-black text-white p-4 rounded-md max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-yellow-300 text-center pb-4 mb-4 border-b border-gray-400">DANH SÁCH GHẾ BẠN CHỌN</h2>
            <div className="flex items-center gap-4 mb-6 mt-6">
                <div className="flex items-center gap-1"><div className="w-4 h-4 bg-red-600"></div><span className="text-sm">Ghế đã đặt</span></div>
                <div className="flex items-center gap-1"><div className="w-4 h-4 bg-yellow-400"></div><span className="text-sm">Ghế đang chọn</span></div>
                <div className="flex items-center gap-1"><div className="border border-white w-4 h-4"></div><span className="text-sm">Ghế chưa đặt</span></div>
            </div>

            <table className="w-full text-sm border border-white">
                <thead>
                    <tr className="bg-white text-black">
                        <th className="p-2 border">Số ghế</th>
                        <th className="p-2 border">Giá</th>
                        <th className="p-2 border">Huỷ</th>
                    </tr>
                </thead>
                <tbody>
                    {confirmedSeats.map((seat) => (
                        <tr key={seat.soGhe} className="text-center">
                            <td className="border p-2">{seat.soGhe}</td>
                            <td className="border p-2">{seat.gia.toLocaleString()}đ</td>
                            <td className="border p-2 text-red-600 cursor-pointer" onClick={() => handleRemove(seat)}>✘</td>
                        </tr>
                    ))}
                    <tr className="font-bold">
                        <td className="border p-2 text-right" colSpan="2">Tổng tiền</td>
                        <td className="border p-2">{total.toLocaleString()}đ</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListSelectedSeats
