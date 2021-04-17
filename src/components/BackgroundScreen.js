import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

const BackgroundScreen = props => {
    const { children, noImage } = props
    return (
        <KeyboardAwareScrollView style={{ width: wp(100), height: hp(100), paddingVertical: hp(5), backgroundColor: 'rgba(0,0,0,0.7)' }}>
            <View style={{ height: '96%', paddingBottom: hp(10) }}>
                <ImageBackground source={noImage ? null : require("../assets/images/backgroundIcon.png")}
                    style={styles.bgImage}
                    resizeMode="stretch"
                    style={{ width: '100%', height: '100%', }}>
                    {children}
                </ImageBackground>

            </View >
        </KeyboardAwareScrollView >

    )
}

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
    },
});
export default BackgroundScreen