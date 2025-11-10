import { FlatList } from "react-native"
import { IProduct } from "./IProduct";
import { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";

const getProducts = async (): Promise<IProduct[]> => {
    const api = fetch("https://dummyjson.com/products")
    return (await api).json();
}

export const ProductList = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {+
        getProducts().then(response => {
            const data = (response as any).products;
            setProducts(data);
        })
    }, [])
    return (

        <FlatList data={products} keyExtractor={item => item.id.toString()
        }
            renderItem={({ item }) => (
                <ProductItem {...item} />
            )}
        />
    )
}