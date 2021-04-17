import React from 'react'
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import BackgroundScreen from './BackgroundScreen'


const ModalScreen = props => {
    const { visible, pressYes, question, pressNo } = props
    return (

        <Modal animationType="fade" visible={visible}
        >
            <View style={{
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,0.6)',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: widthPercentageToDP(100),
                height: heightPercentageToDP(100),
            }}>
                <View style={styles.container}>
                    <View style={styles.containerText}>
                        <Text style={styles.text}>{question}</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={pressYes}><Text style={styles.text}>YES</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={pressNo}><Text style={styles.text}>NO</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>



        </Modal>

    )
}


const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
    },
    container: {
        alignSelf: 'center',
        backgroundColor: 'rgb(0,255,0)',
        borderColor: 'rgba(0,255,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: widthPercentageToDP(3),
        width: widthPercentageToDP(60),
        aspectRatio: 1,
        borderRadius: widthPercentageToDP(100)
    },
    containerText: {
        width: widthPercentageToDP(40),
    },
    text: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 18,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: widthPercentageToDP(30),
        alignSelf: 'center',
        paddingTop: widthPercentageToDP(10),
        justifyContent: 'space-between'
    },
    button: {
        width: widthPercentageToDP(10)
    }
})

export default ModalScreen
