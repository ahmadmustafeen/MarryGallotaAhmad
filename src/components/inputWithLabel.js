import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'


const InputWithLabel = props => {
    const { label, fontSize } = props
    return (
        <View style={styles.container}>
            <Text style={[styles.label, { fontSize: fontSize }]}>{label}</Text>
            <TextInput style={styles.input} />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: widthPercentageToDP(0.5),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        width: '100%'
    },
    label: {
        fontSize: 10,
        color: 'white',
        textTransform: 'uppercase'
    },
    input: {
        fontSize: 10,
        height: widthPercentageToDP(4),
        padding: 0,
        paddingHorizontal: widthPercentageToDP(0.5),
        // height: widthPercentageToDP(5),
        marginHorizontal: widthPercentageToDP(2),
        borderRadius: widthPercentageToDP(1),
        flex: 1,
        color: 'black',
        backgroundColor: 'grey'
    }
})
export default InputWithLabel