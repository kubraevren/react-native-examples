import { StyleSheet, Text, View } from "react-native"

type TodoItemProps = {
    userId: number,
    title: string,
    completed: boolean
}

export const Todo = ({ userId, title, completed }: TodoItemProps) => {
    return (
        <View style={[styles.card, completed && styles.completedCard]}>
            <View style={[styles.statusLine, completed ? styles.completedLine : styles.pendingLine]} />

            <View>

                <Text style={[styles.text, completed && styles.completedText]}>
                    {title}
                </Text>

                <Text style={[styles.text, completed && styles.completedText]}>
                    <Text style={{ color: 'rgba(239, 89, 81, 0.93)' }}> Kullanıcı: {userId}</Text>
                </Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginVertical: 8, // Dikeyde aralık bırakın
        shadowColor: '#000', // Hafif gölge
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3, // Android için gölge
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 25, // Sol çizgi için boşluk bırak
        position: 'relative', // position: 'absolute' kullanan statusLine için gerekli
    },
    completedCard: {
        opacity: 0.7, // Tamamlanmış görevleri hafifçe soluklaştır
    },
    text: {
        fontSize: 16,
        color: '#34495e',
        marginBottom: 4, // Başlık ile kullanıcı ID arasında biraz boşluk bırakmak iyi fikir
    },
    completedText: {
        textDecorationLine: 'line-through', // Üzerini çiz
        color: '#7f8c8d',

    },
    statusLine: {
        width: 5,
        height: '100%',
        borderRadius: 2,
        marginRight: 10,
        position: 'absolute',
        left: 0,
    },
    completedLine: {
        backgroundColor: '#2ecc71', // Yeşil
    },
    pendingLine: {
        backgroundColor: '#e74c3c', // Kırmızı
    },
})