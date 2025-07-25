import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedSeats: [],
    confirmedSeats: [],
}

const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        handleSeat: (state, action) => {
            const index = state.selectedSeats.findIndex(seat => seat.soGhe === action.payload.soGhe);
            if (index !== -1) {
                state.selectedSeats.splice(index, 1);
            } else {
                state.selectedSeats.push(action.payload);
            }
        },
        confirmSeats: (state) => {
            state.confirmedSeats.push(...state.selectedSeats);
            state.selectedSeats = [];
        },
        cancelSeat: (state, action) => {
            state.confirmedSeats = state.confirmedSeats.filter(
                seat => seat.soGhe !== action.payload.soGhe
            );
        }
    }
});

export const { handleSeat, confirmSeats, cancelSeat } = movieSlice.actions

export default movieSlice.reducer