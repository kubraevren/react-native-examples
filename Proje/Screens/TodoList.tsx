import { ActivityIndicator, Text, View, FlatList, StyleSheet } from "react-native" // FlatList'i ekledik
import { useSelector, useDispatch } from "react-redux"
import React from 'react';
import { fetchTodos } from '../slice/TodoSlice';
import { ITodo } from '../ITodo';
import store from "../store";
import { Todo } from "../Todo";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



export const TodoList = () => {
    const { error, loading, todos } = useSelector((state: RootState) => state.todoSlice);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchTodos() as any);
    }, [dispatch]);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="blue" />
                <Text>Görevler yükleniyor...</Text>
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Yapılacaklar Listesi ({todos.length} Görev)
            </Text>


            <FlatList
                data={todos}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (<Todo {...item} />)}
                contentContainerStyle={styles.listContent}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#fff', // Arka planı beyaz yapalım
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#2c3e50', // Koyu, profesyonel bir renk
        textAlign: 'center', // Başlığı ortaya hizalayın
        paddingVertical: 15, // Üstten ve alttan boşluk
        marginTop: 20, // Başlık için üstten daha fazla boşluk
    },
    listContent: {
        paddingHorizontal: 15, // Listenin kenarlarına boşluk
        paddingBottom: 20, // Listenin altına boşluk
    },
    emptyContainer: {
        paddingTop: 50,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        color: '#95a5a6',
    }
})

export default TodoList;

