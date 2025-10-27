import { FlatList, Text, View } from "react-native"
import { faker } from '@faker-js/faker';
import { StoryItem } from "./StoryItem";

interface Story {
    id: string,
    avatar: string,
    username: string
}
const stories = Array<number>(40).fill(0).map<Story>(() => ({
    id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    username: faker.internet.username()
} as Story))


export const StoryList = () => {
    return (
        <FlatList
            data={stories}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={Header}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <StoryItem {...item} />
            )}
        />
    )
}

const Header = () => {
    return (

        <View style={{
            width: 80,
            height: 80,
            marginRight: 10,
            borderWidth: 3,
            borderColor: '#833ab4',
            borderRadius: 40,
            padding: 2,
            borderStyle: 'dashed',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginLeft: 5
        }}>

            <Text style={{ color: 'black', fontSize: 30 }}>+</Text>

        </View>


    )
}