import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import InputWithLabel from './inputWithLabel'
import LineDesigning from './LineDesigning'

const ImageListContainer = props => {
    const { onPress } = props
    const [state, setState] = useState({
        image: "",
    });
    return (
        <View style={styles.conatiner}>
            <TouchableOpacity style={styles.editButton} onPress={onPress}>
                <Text style={styles.text}>Edit</Text>
            </TouchableOpacity>
            <LineDesigning rtl topWidth={widthPercentageToDP(10)} height={widthPercentageToDP(2)} bottomWidth={widthPercentageToDP(2)} marginLeft={widthPercentageToDP(-2)} />
            {!state.image?.uri ?
                <View style={styles.userImage}>

                    <Text style={{ color: 'white' }}>Picture</Text>

                </View> :

                <Image
                    style={styles.userImageSetter}
                    source={{ uri: state?.image?.uri }}
                />
            }
            <View style={{ width: widthPercentageToDP(25) }}>
                <InputWithLabel label="makrdown" fontSize={8} />
                <InputWithLabel label="brand" fontSize={8} />
                <InputWithLabel label="color" fontSize={8} />
                <InputWithLabel label="size" fontSize={8} />
            </View>
            <View style={{ width: widthPercentageToDP(25), justifyContent: 'center', alignItems: 'center', marginHorizontal: widthPercentageToDP(1) }}>
                <Text style={styles.title}>Description</Text>
                <LineDesigning topWidth={widthPercentageToDP(5)} height={widthPercentageToDP(2)} bottomWidth={widthPercentageToDP(10)} marginLeft={widthPercentageToDP(1)} />

                <TextInput style={[styles.userImage, { height: widthPercentageToDP(15) }]} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    conatiner: {
        paddingVertical: widthPercentageToDP(3),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: widthPercentageToDP(3)
    },
    editButton: {
        backgroundColor: 'rgb(0,170,0)',
        borderRadius: 10,
        width: widthPercentageToDP(13),
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 12,
        textTransform: 'uppercase'
    },
    userImage: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        width: widthPercentageToDP(25),
        height: widthPercentageToDP(25),
        backgroundColor: 'grey',
        alignSelf: 'center',
        borderRadius: widthPercentageToDP(2),
        marginHorizontal: widthPercentageToDP(-2),
        marginRight: widthPercentageToDP(1)
    },
    userImageSetter: {
        borderRadius: widthPercentageToDP(2),
        marginVertical: widthPercentageToDP(0.5),
        width: widthPercentageToDP(25),
        height: widthPercentageToDP(20),
        justifyContent: 'center',
        alignSelf: 'center'
    },
    title: {
        margin: heightPercentageToDP(-1),
        textAlign: 'center',
        color: 'white'
    }
})
export default ImageListContainer