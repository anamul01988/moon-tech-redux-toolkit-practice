import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    stock: false,
    brands: [],
    keywords: "",
}

const filterSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggle: (state) =>{
            state.stock = !state.stock;
        },
        toggleBrands: (state, action) =>{
            console.log("action paici",action.payload);
            if(!state.brands.includes(action.payload)){
                state.brands.push(action.payload);
            }else{
                state.brands = state.brands.filter((brand) => brand != action.payload);
            }
        }
    },
});
export const {toggle, toggleBrands } = filterSlice.actions;
export default filterSlice.reducer;