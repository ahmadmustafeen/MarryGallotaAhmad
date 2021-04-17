import React from 'react'
import { Image, Touchable, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome'



const RoundImageIcon = props => {
    const { onIconPress, text, source, imageStyle, iconName, iconSize, iconColor } = props
    return (
        <View >
            <Image source={props.source} style={[{ width: '100%', height: '100%' }, imageStyle]} />
            <TouchableOpacity onPress={onIconPress} style={{ position: 'absolute', top: widthPercentageToDP(8), left: widthPercentageToDP(8) }}>
                {iconName && <Icon name={iconName || "camera"} size={iconSize || 30} color={iconColor || "#900"} />}
                {text &&
                    <Text style={styles.text}>{text}</Text>
                }
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        marginTop: 5,
        marginLeft: -2,
        color: 'white',
        textTransform: 'uppercase'
    }
})

export default RoundImageIcon