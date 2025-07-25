import React from 'react'
import SeatsMap from './SeatsMap'
import { useDispatch, useSelector } from 'react-redux';
import { confirmSeats } from './redux/movieSlice';
import ListSelectedSeats from './ListSelectedSeats';

const Index = () => {
    const dispatch = useDispatch();
    const selectedSeats = useSelector((state) => state.movieSlice.selectedSeats);
    const handleConfirm = () => {
        if (selectedSeats.length === 0) {
            alert("Vui lòng chọn ít nhất 1 ghế");
            return;
        }
        dispatch(confirmSeats());
    };
    return (
        <div>
            <div className='w-full h-screen bg-img'>
                <div className="content">
                    <div className='container mx-auto h-screen'>
                        <div className="grid grid-cols-3 gap-4 mt-5">
                            <div className="col-span-2">
                                <h2 className="text-2xl font-bold text-center mb-4 text-orange-500">ĐẶT VÉ XEM PHIM CINEMA-HOANG</h2>
                                <div className="flex justify-center">
                                    <div className='w-[800px] h-[40px] bg-orange-500 
                                    [box-shadow:-5px_-20px_#0000,_0px_10px_13px_-3px_rgb(255,255,255)]
                                    text-center text-2xl font-extrabold
                                    rounded-b-4xl
                                    '>
                                        Màn Hình
                                    </div>
                                </div>
                                <div className="mt-5 w-[80] mx-auto shadow-lg shadow-red-500/50 flex justify-center">
                                    <SeatsMap />
                                </div>
                                <div className="text-center mt-4">
                                    <button
                                        onClick={handleConfirm}
                                        className="bg-yellow-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
                                    >
                                        Xác nhận
                                    </button>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <ListSelectedSeats />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Index
