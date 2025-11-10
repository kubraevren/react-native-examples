import { useNavigation } from "@react-navigation/native"
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
export const Karsilama = () => {
    const nav = useNavigation<any>();
    const atla = () => {
        nav.replace('Giris')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello John</Text>
            <Text style={styles.miniTitle}> Welcome to the Ramni</Text>

            <Image
                style={styles.photo}
                source={{ uri: 'https://images.unsplash.com/photo-1761839257144-297ce252742e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870' }} />

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
            >
                <Text style={styles.TextButon}>
                    UPLOAD PICTURE
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={atla}
                activeOpacity={0.7}
            ><Text style={styles.skip}>SKIP</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        color: '#aeaeae',
        marginBottom: 10
    },
    miniTitle: {
        fontSize: 26,
        color: 'rgba(40, 92, 40, 0.93)',
        marginBottom: 20
    },
    photo: {
        width: 250,
        height: 250,
        borderRadius: 125
    },
    button: {
        backgroundColor: 'rgba(161, 218, 161, 0.93)',
        width: '90%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 50,
        marginBottom: 20,
    },
    TextButon: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    skip: {
        fontSize: 18,
        color: 'rgba(41, 58, 41, 0.93)',
        marginBottom: 20
    }
});