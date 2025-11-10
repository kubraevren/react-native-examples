import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Pressable, Image } from "react-native";

export default function Kayit() {
    const [adSoyad, setAdSoyad] = useState("");
    const [kullaniciAdi, setKullaniciAdi] = useState("");
    const [email, setEmail] = useState("");
    const [sifre, setSifre] = useState("");

    const nav = useNavigation<any>();
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/register.png')}
                style={styles.image} />
            <Text style={styles.title}>Kayıt Olun</Text>

            <TextInput
                style={styles.input}
                placeholder="Ad Soyad giriniz"
                value={adSoyad}
                onChangeText={setAdSoyad}
            />
            <TextInput
                style={styles.input}
                placeholder="Kullanıcı adı giriniz"
                value={kullaniciAdi}
                onChangeText={setKullaniciAdi}
            />
            <TextInput
                style={styles.input}
                placeholder="E-posta giriniz"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Şifre giriniz"
                value={sifre}
                onChangeText={setSifre}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.girisButton}
                activeOpacity={0.7}
            >
                <Text style={styles.girisText}>Kayıt Ol</Text>
            </TouchableOpacity>

            <Pressable
                onPress={() => nav.navigate('Giris')}
            >
                <Text style={styles.bilgilendirme}>Zaten hesabınız var mı? <Text style={styles.forgotPasswordText}>Giriş yapın</Text></Text>

            </Pressable>


        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        alignItems: 'center'
    },
    title: {
        color: '#665f5fff',
        fontSize: 25,
        marginBottom: 20
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 20
    },
    girisButton: {
        backgroundColor: '#aeaeae',
        width: '50%',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 10,
    },
    girisText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    bilgilendirme: {
        marginTop: 20,
        color: '#4b6179ff',
        fontSize: 16,
    },
    forgotPasswordText: {
        marginTop: 5,
        color: '#007bff',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    image: {
        width: 100,
        height: 100,
    }
});