import {configureStore} from '@reduxjs/toolkit'

import signInSlice from './signin'

const store = configureStore({
    reducer: {signin: signInSlice}

})

export default store;