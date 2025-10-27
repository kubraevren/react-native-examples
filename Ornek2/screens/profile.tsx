import { useState } from "react";
import { Button, Modal, Text, View } from "react-native"

export const Profile = () => {
    const [modal, setModal] = useState<boolean>(false);

    return (
        <View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}><Button title='Open modal' onPress={() => setModal(true)} /></View>

            <Modal transparent animationType='slide' visible={modal}>
                <View style={{
                    backgroundColor: '#f0cbe6ff',
                    position: 'absolute',
                    height: 350,
                    width: '100%',
                    borderTopLeftRadius: 70,
                    borderTopRightRadius: 70,
                    bottom: 0
                }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center' }} ><Button title='Close' onPress={() => setModal(false)} /></View>
                </View>
            </Modal>
        </View>
    )
}