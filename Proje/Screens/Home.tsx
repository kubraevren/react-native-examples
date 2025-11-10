import { StyleSheet, Text, View } from "react-native"

export const Home = () => {
    return (
        <View style={stil.container}>
            <View style={stil.anaKart}>
                <Text style={stil.anaBaslik}>Mobil Uygulamama</Text>
                <Text style={stil.altBaslik}>Hoş Geldiniz!</Text>

                <View style={stil.cizgi} />

                <Text style={stil.kucukMetin}>Yeni özellikler için bizi takip edin</Text>
            </View>
        </View>
    )
}

const stil = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcf8faff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    anaKart: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    anaBaslik: {
        fontSize: 36,
        fontWeight: '900',
        color: '#d32626',
        textAlign: 'center',
    },
    altBaslik: {
        fontSize: 24,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 20,
        textAlign: 'center',
    },
    cizgi: {
        width: '50%',
        height: 3,
        backgroundColor: '#18b5dc',
        marginVertical: 15,
        borderRadius: 5,
    },
    kucukMetin: {
        fontSize: 14,
        color: 'grey',
        marginTop: 10,
        textAlign: 'center',
    }
});

export default Home;