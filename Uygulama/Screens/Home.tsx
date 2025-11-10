import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";
import { View, Text, Image, ScrollView, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { ProductCard } from "../Components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Navigate";

export const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items = [], status } = useSelector((state: RootState) => state.products);
    type AppNavigationProp = StackNavigationProp<RootStackParamList>;

    const useAppNavigation = () => useNavigation<AppNavigationProp>();
    const nav = useAppNavigation();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);


    const handlePressDetail = (productId: number) => {
        // Burada ürün detay sayfasına navigasyon yapabilirsiniz
        nav.navigate('ProductDetails', { productId: productId });
    };


    if (status === 'loading') {
        <View style={styles.centeredContainer}>
            <ActivityIndicator size="large" color="#1A73E8" />
            <Text style={styles.loadingText}>Ürünler yükleniyor...</Text>
        </View>
    }

    if (status === 'failed') {
        <View style={styles.centeredContainer}>
            <Text style={styles.errorText}>Ürünler yüklenirken bir hata oluştu.</Text>
        </View>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Tüm Ürünler</Text>
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <ProductCard product={item} onPressDetail={handlePressDetail} />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} // İki sütunlu görünüm
                columnWrapperStyle={styles.columnWrapper} // Sütunlar arası boşluk
                contentContainerStyle={styles.flatListContent}
                showsVerticalScrollIndicator={false} // Dikey kaydırma çubuğunu gizle
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5", // Açık gri arka plan
        paddingTop: 20, // Üstten boşluk
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F5F5F5",
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: "#555",
    },
    header: {
        fontSize: 22, // Başlık boyutu
        fontWeight: "700",
        color: "#333333",
        paddingHorizontal: 16,
        marginBottom: 15,
    },
    columnWrapper: {
        justifyContent: "space-between", // Sütunları eşit aralıklarla dağıt
        paddingHorizontal: 10, // Kenarlardan boşluk
    },
    flatListContent: {
        paddingBottom: 20, // En alta boşluk bırak
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
});