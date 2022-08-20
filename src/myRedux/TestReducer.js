import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {
    test : 'test'
}

const testSlice = createSlice({
    name : 'test',
    initialState,
    reducers : {
        testFunc(state,action){
            console.log('test 실행!!')
            state.test = 'test change'
        }
    }
}
)

export const {testFunc} = testSlice.actions

export default configureStore({
    reducer : {
        test : testSlice.reducer
    }
})