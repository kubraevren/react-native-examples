import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet, TouchableOpacity, Pressable, Alert, Image } from "react-native";

export default function Giris() {
    const [username, setUsername] = useState("");
    const [sifre, setSifre] = useState("");

    const nav = useNavigation<any>();
    const git = () => {
        if (username === 'admin' && sifre === '1234') {
            nav.navigate('Home');
        } else {
            Alert.alert(
                "Giriş Başarısız",
                "Kullanıcı adı veya şifre yanlış. Lütfen tekrar deneyin.",
                [{ text: "Tamam" }]
            );
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/login.png')}
                style={styles.image} />
            <Text style={styles.title}>Giriş Yapın</Text>
            <TextInput
                style={styles.input}
                placeholder="Kullanıcı adı giriniz"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Şifre giriniz"
                value={sifre}
                onChangeText={setSifre}
                secureTextEntry={true}
            />
            <TouchableOpacity
                onPress={git}
                activeOpacity={0.7}
                style={styles.girisButton}
            ><Text style={styles.girisText}>Giriş Yap</Text></TouchableOpacity>

            <Pressable
                onPress={() => nav.navigate('Kayit')}
            >
                <Text style={styles.bilgilendirme}>Hesabınız yok mu? <Text style={styles.forgotPasswordText}>Kayıt olun!</Text></Text>

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
