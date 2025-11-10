export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

// Bu, ProductSlice'ın initialState'ini (ve anlık durumunu) temsil eder.
export interface ProductState {
    items: Product[]; // Sizin ProductItem'deki 'item'
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}