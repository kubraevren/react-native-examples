import { useNavigation, CommonActions } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Button, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export const Signup = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string | undefined>();
    const navigation = useNavigation();

    const BACKGROUND = {
        uri: "https://images.unsplash.com/photo-1692158962093-ba00b43fec61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
    };

    const handleSignup = () => {

        Alert.alert("Devre Dışı", "Kayıt olma şu anda aktif değil. Lütfen giriş yapın .");
    };

    const navigateToLogin = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            })
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
                style={stil.contentContainer}
                behavior="padding"
            >
                <View style={stil.signupCard}>
                    <Text style={stil.signupTitle}>Hemen Kayıt Ol</Text>

                    <TouchableOpacity onPress={navigateToLogin} style={stil.loginLinkContainer}>
                        <Text style={stil.loginLinkText}>
                            Hesabınız var mı? Giriş Yapın!
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
                            onSubmitEditing={handleSignup}
                        />
                    </View>
                    <View style={stil.buttonContainer}>
                        <Button
                            title="Kayıt Ol"
                            color={'red'}
                            onPress={handleSignup}
                        />
                    </View>
                </View>
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
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },
    signupCard: {
        width: '90%',
        alignItems: 'center',
        padding: 25,
        borderRadius: 15,
        marginHorizontal: 30,
    },
    signupTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#ffffffff'
    },
    loginLinkContainer: {
        marginBottom: 30,
    },
    loginLinkText: {
        color: '#e5ddddff',
        fontSize: 16,
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
    buttonContainer: {
        width: '50%',
        height: 'auto',
        borderRadius: 35
    }
});