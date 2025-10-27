import React from "react"
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { Post } from "./PostList"

export const PostItem: React.FC<Post> = (props) => {
    const { id, userAvatar, userName, description, image, likes, comments } = props;

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={{ uri: userAvatar }}
                    style={styles.avatar}
                />
                <Text style={styles.userName}>{userName}</Text>
                <TouchableOpacity style={styles.settingsButton}>
                    <Text style={styles.settingsIcon}>⚙️</Text>
                </TouchableOpacity>
            </View>

            {/* Content */}
            <View style={styles.content}>
                <Text style={styles.description}>{description}</Text>
                <Image
                    style={styles.postImage}
                    source={{ uri: image }}
                />
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <View style={styles.stat}>
                    <Text style={styles.statText}>❤️ {likes}</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statText}>💭 {comments}</Text>
                </View>
                <View style={styles.stat} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    userName: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },
    settingsButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    settingsIcon: {
        fontSize: 18,
    },
    content: {
        paddingVertical: 8,
    },
    description: {
        fontSize: 14,
        color: '#333',
        marginBottom: 12,
        lineHeight: 20,
    },
    postImage: {
        width: '100%',
        height: 300,
        borderRadius: 12,
        resizeMode: 'cover',
    },
    footer: {
        flexDirection: 'row',
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    stat: {
        flex: 1,
        alignItems: 'center',
    },
    statText: {
        color: '#666',
        fontSize: 15,
        fontWeight: '500',
    },
})


/*
import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { Post } from "./PostList"

export const PostItem: React.FC<Post> = (props) => {
    const { id, userAvatar, userName, description, image, likes, comments } = props;
    return (
        <View style={{ width: '100%', height: '400', marginBottom: 10, marginLeft: 10, }}>

            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>

                    <View style={{ flex: 1 }}><Image source={{ uri: userAvatar }} style={{ width: 40, height: 40, borderRadius: 20 }} />
                    </View>
                    <View style={{ flex: 5, justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{userName}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' , marginRight:20}}>
                        <TouchableOpacity style={{width:50,height:50,borderRadius:25,backgroundColor:'grey',
                            justifyContent:'center',
                            alignItems:'center',
                        }}>
                            <Text style={{fontSize:16}}>⚙️</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flex: 5,justifyContent:'center',alignItems:'center',margin:0,marginBottom:20,marginTop:20}}>
                <Text>{description}</Text>
                <Image style={{width:'95%',height:200,borderRadius:20,margin:5}} source={{uri:image}} />
            </View>
            <View style={{ flex: 1, }}>
  <View style={{ flexDirection: 'row',justifyContent:'center',alignItems:'center',marginTop:0 }}>

                    <View style={{ flex: 1 }}>
                            <Text style={{color:'grey', fontSize:16 }} >❤️{likes}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                       <Text style={{color:'grey', fontSize:16 }} >💭{comments}</Text>

                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' , marginRight:20}}>
                      

                    </View>
                </View>









            </View>


        </View>
    )
}


*/