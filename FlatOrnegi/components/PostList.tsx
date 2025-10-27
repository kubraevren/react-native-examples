import { FlatList, View } from "react-native"
import { faker } from '@faker-js/faker';
import { PostItem } from "./PostItem";


export interface Post {
    id: string,
    userAvatar: string,
    userName: string,
    description: string,
    image: string,
    likes: number,
    comments: number
}

const posts = Array<number>(10).fill(0).map<Post>(() => ({
    id: faker.string.uuid(),
    userAvatar: faker.image.avatar(),
    userName: faker.person.fullName(),
    description: faker.lorem.paragraph(),
    image: faker.image.urlPicsumPhotos(),
    likes: faker.number.int({ min: 10, max: 1000 }),
    comments: faker.number.int({ min: 0, max: 125 })
} as Post))

export const PostList = () => {
    return (
        <View style={{alignItems:'center'}}>
            <FlatList
                style={{width:'90%'}}
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PostItem {...item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )

}