import { useNavigation } from "@react-navigation/native"
import { Button, Text, View } from "react-native"

export const Home = () => {
    const nav = useNavigation<any>();
    return (
        <View>
            <Text>Home</Text>

            <Button title="Profile" onPress={() => nav.navigate('profile')} />
            <Button title="flatList" onPress={() => nav.navigate('listeleme')} />

        </View>
    )
}