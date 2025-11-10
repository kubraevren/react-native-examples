import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import { Product, ProductState } from "../ProductItem";


export const fetchProducts = createAsyncThunk<Product[]>(
    'products/fetchProducts',
    async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data as Product[];
    }
)

const initialState: ProductState = {
    items: [],
    status: 'idle',
    error: null,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.items = action.payload;
            state.status = 'succeeded';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
                state.error = null; // Yeni istekte hatayı sıfırla
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error?.message || 'Ürünler yüklenirken bir hata oluştu.';
            });
    },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
