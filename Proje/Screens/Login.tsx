import { useNavigation, CommonActions } from "@react-navigation/native";
import { useState } from "react"
import { Alert, Button, ImageBackground, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native" // StyleSheet eklendi
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../slice/AuthSlice";
import { RootState } from "../store";

const BACKGROUND = {
    uri: "https://images.unsplash.com/photo-1616441064898-f38e53c7542e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
};

export const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string | undefined>();
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const isAuthenticated = useSelector((state: RootState) => state.AuthSlice.isAuthenticated);

    const girisYap = () => {
        if (username === 'admin' && password === '1234') {
            dispatch(login());
            navigation.dispatch(
                CommonActions.reset({ index: 0, routes: [{ name: 'Home' }] })
            );
        } else {
            Alert.alert('Hata', 'Hatalı giriş!');
        }
    }

    const kayitOl = () => {
        navigation.navigate('Signup' as never);
    }

    const cikisYap = () => {
        dispatch(logout());
        Alert.alert("Başarılı", "Çıkış yapıldı.");
        navigation.dispatch(
            CommonActions.reset({ index: 0, routes: [{ name: 'Login' }] })
        );
    }

    return (
        <ImageBackground
            source={BACKGROUND}
            style={stil.background}
            resizeMode="cover"
        >
            <View style={stil.overlay} />

            <KeyboardAvoidingView
                style={stil.formContainer}
                behavior="padding"
            >
                {isAuthenticated ? (
                    <View style={stil.authView}>
                        <Text style={stil.authText}>Hoş geldiniz!</Text>
                        <View style={{ width: 150, height: 'auto', marginTop: 20 }}>
                            <Button title="Çıkış Yap" color={'red'} onPress={cikisYap} />
                        </View>
                    </View>
                ) : (
                    <View style={stil.loginForm}>
                        <Text style={stil.loginTitle}>Hoşgeldiniz!</Text>

                        {/* Kayıt Ol Linki */}
                        <TouchableOpacity onPress={kayitOl} style={{ marginBottom: 30 }}>
                            <Text style={stil.signupLink}>
                                Hesabınız yok mu? Kayıt Olun!
                            </Text>
                        </TouchableOpacity>

                        <View style={stil.inputGroup}>
                            <TextInput
                                style={stil.input}
                                placeholder="Kullanıcı adı giriniz"
                                placeholderTextColor="#888"
                                value={username}
                                onChangeText={setUsername}
                                returnKeyType="next"
                            />
                            <TextInput
                                style={stil.input}
                                placeholder="Şifre giriniz:"
                                placeholderTextColor="#888"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={true}
                                returnKeyType="done"
                                onSubmitEditing={girisYap}
                            />
                        </View>
                        <View style={{ width: '50%', height: 'auto' }}>
                            <Button title="Giriş Yap" color={'red'} onPress={girisYap} />
                        </View>
                    </View>
                )}
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const stil = StyleSheet.create({
    background: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },
    loginForm: {
        width: '100%',
        alignItems: 'center',
        padding: 20,
        borderRadius: 15,
        marginHorizontal: 30,
    },
    loginTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#ffffffff'
    },
    signupLink: {
        color: '#d32626',
        fontWeight: 'bold',
    },
    inputGroup: {
        marginBottom: 30,
        width: '100%',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 20,
        marginVertical: 10,
        backgroundColor: '#f0f0f0',
        fontSize: 16
    },
    authView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    authText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white'
    }
});