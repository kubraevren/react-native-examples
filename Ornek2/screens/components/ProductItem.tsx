import { Image, ImageBackground, Text, View } from "react-native"
import Colors from "./Colors"

type ProductItemProps = {
    title?: string
    thumbnail: string
    description: string
    rating: number
    price: number
    category: string
}

export const ProductItem = ({ title, thumbnail, description, rating, price, category }: ProductItemProps) => {
    return (
        <View style={{ marginLeft: 30,marginRight:30,marginTop:10,marginBottom:10, justifyContent: 'center', alignItems: 'center',backgroundColor:'wheate' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold',margin:5 }}>{title}</Text>
            <Text style={{ fontSize: 17, color: Colors.smoothText ,margin:10}}>{description}</Text>

            <ImageBackground imageStyle={{ borderRadius: 20 }} source={{ uri: thumbnail }} style={{ width: 300, height: 300 }}>
                <View style={{ borderRadius: 20, flex: 1, backgroundColor: Colors.imagebg }}>

                    <View style={{ flex: 1, backgroundColor: Colors.categoryBg, borderTopRightRadius: 20, borderTopLeftRadius: 20, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, padding: 10 }}>{category}</Text>
                    </View>
                    <View style={{ flex: 5 }}></View>
                    <View style={{ flex: 1, backgroundColor: Colors.imagebg,borderBottomLeftRadius:20,borderBottomRightRadius:20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, padding: 10, marginRight: 40 }}>⭐ {rating}</Text>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, padding: 10 }}>💲{price}</Text>

                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}