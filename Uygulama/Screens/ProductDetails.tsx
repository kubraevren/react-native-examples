// Screens/ProductDetails.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Kök State tipini import edin

export const ProductDetails = () => {
    const route = useRoute();
    const navigation = useNavigation();

    // 1. Parametreyi Okuma
    // TypeScript için tipi belirtiyoruz
    const { productId } = route.params as { productId: number };

    // 2. Redux Store'dan Durumu Çekme
    // Basitlik için tüm ürün listesinden ilgili ürünü buluyoruz
    const { items: allProducts, status } = useSelector((state: RootState) => state.products);

    // 3. İlgili Ürünü Bulma
    const product = allProducts.find(p => p.id === productId);

    if (status === 'loading' || !product) {
        // Eğer ürün henüz yüklenmediyse veya ID ile bulunamazsa
        return (
            <View style={styles.centeredContainer}>
                <ActivityIndicator size="large" color="#FF6B6B" />
                <Text style={styles.loadingText}>{!product ? 'Ürün bulunamadı.' : 'Yükleniyor...'}</Text>
            </View>
        );
    }

    // 4. İçerik Gösterme
    return (
        <ScrollView style={styles.container}>
            {/* Geri Butonu */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>{'< Geri'}</Text>
            </TouchableOpacity>

            <Text style={styles.title}>{product.title}</Text>
            <Image source={{ uri: product.image }} style={styles.image} />

            <View style={styles.infoBox}>
                <Text style={styles.price}>{product.price.toFixed(2)} TL</Text>

                <Text style={styles.category}>Kategori: {product.category}</Text>

                <Text style={styles.descriptionHeader}>Açıklama</Text>
                <Text style={styles.descriptionText}>{product.description}</Text>

                {/* Sepete Ekle Butonu */}
                <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Sepete Ekle</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 40,
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    backButton: {
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    backButtonText: {
        fontSize: 18,
        color: '#333',
        fontWeight: '500',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        backgroundColor: '#F8F8F8',
        marginBottom: 20,
    },
    infoBox: {
        paddingHorizontal: 15,
    },
    price: {
        fontSize: 24,
        fontWeight: '800',
        color: '#1A73E8',
        marginBottom: 15,
    },
    category: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
        paddingBottom: 10,
    },
    descriptionHeader: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    descriptionText: {
        fontSize: 16,
        color: '#555',
        lineHeight: 24,
        marginBottom: 30,
    },
    addToCartButton: {
        backgroundColor: '#FF6B6B',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    addToCartText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
    }
});