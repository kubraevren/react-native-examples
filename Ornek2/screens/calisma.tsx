
import { useEffect } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductList } from './components/ProductList';

interface Resource {
    url: string
    id: string
}

export const Calisma = () => {

    useEffect(() => {
        (async () => {
            await fetch('https://dummyjson.com/products')
                .then(response => response.json())
                .then(json => console.log(json))
        })();
    }, []);

    return (
        <SafeAreaView>
            <ProductList />

        </SafeAreaView>

    )
}
