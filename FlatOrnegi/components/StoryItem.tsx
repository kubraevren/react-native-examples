import { Image, Text, View } from "react-native"

type StoryItemProps = {
    avatar: string
    username: string
}


export const StoryItem = ({ avatar, username }: StoryItemProps) => {
    return (
        <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',marginBottom:0}}>
            <Image style={{
                width: 80,
                height: 80,
                marginRight: 10,
                borderWidth: 3,
                borderColor: '#833ab4',
                borderRadius: 40,
                padding: 2,
                marginTop:10
            }}
                source={{ uri: avatar }}
            />

            <Text style={{fontSize:12,color:'grey'}}>{username}</Text>
        </View>
    )
}