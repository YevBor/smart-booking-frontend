import {configureStore} from '@reduxjs/toolkit'

import signInSlice from './signin'
import dailyHoursSlice from './dailyHours';

const store = configureStore({
    reducer: {signin: signInSlice, dailyHours: dailyHoursSlice}

})

export default store;