import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Product } from "../ProductItem"; // Tip tanımınızın yolu

interface ProductCardProps {
    product: Product;
    onPressDetail: (productId: number) => void;
}

export const ProductCard = ({ product, onPressDetail }: ProductCardProps) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => onPressDetail(product.id)} >
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name} numberOfLines={1}>
                    {product.title}
                </Text>
                <Text style={styles.price}>{product.price.toFixed(2)} TL</Text>
                <TouchableOpacity style={styles.detailButton} onPress={() => onPressDetail(product.id)}>
                    <Text style={styles.detailButtonText}>Detaya Git</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        marginHorizontal: 8,
        marginBottom: 16,
        width: "46%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 6,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 140,
        resizeMode: "contain",
        backgroundColor: "#F8F8F8",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    infoContainer: {
        padding: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333333",
        marginBottom: 8,
    },
    price: {
        fontSize: 15,
        fontWeight: "700",
        color: "#1A73E8",
        marginBottom: 10,
    },
    detailButton: {
        backgroundColor: "#FF6B6B",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 5,
    },
    detailButtonText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "600",
    },
});