import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ar: [],
};

const dailyHoursSlice = createSlice({
    name: 'dailyHours',
    initialState,
    reducers: {
        setDailyHours: (state, action) => {
            state.ar = action.payload;
        },
    },
});

export const { setDailyHours } = dailyHoursSlice.actions;
export default dailyHoursSlice.reducer;
