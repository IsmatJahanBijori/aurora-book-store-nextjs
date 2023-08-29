// "use client"
// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     value: 0,
// }

// export const cartSlice = createSlice({
//     name: 'Cart',
//     initialState,
//     reducers: {
//         // add(state, action) {
//         //     state.push(action.payload)
//         // },
//         // remove(state, action) {
//         //     return state.filter(item => item.id !== action.payload)
//         //     // state.value = state.value.filter(item => item.id !== action.payload.id);
//         // }
//         add:(state, action)=>{
//           state.value+=action.payload
//         },
//         remove:(state, action)=>{
//           return state.value.filter(item=>item.id!==action.payload)
//         }
//     },
// })

// // Action creators are generated for each case reducer function
// export const { add, remove } = cartSlice.actions

// export default cartSlice.reducer

// {/*
// increment: (state) => {
//         // Redux Toolkit allows us to write "mutating" logic in reducers. It
//         // doesn't actually mutate the state because it uses the Immer library,
//         // which detects changes to a "draft state" and produces a brand new
//         // immutable state based off those changes
//         state.value += 1
//       },
//       decrement: (state) => {
//         state.value -= 1
//       },
//       incrementByAmount: (state, action) => {
//         state.value += action.payload
//       }, */}