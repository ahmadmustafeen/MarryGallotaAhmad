import React from 'react'
import { View, StyleSheet } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'


const LineDesigning = props => {
    const { topWidth, bottomWidth, rtl, marginLeft, height } = props
    return (
        <View style={rtl && { transform: [{ rotate: '90deg' }], marginLeft: marginLeft }}>
            <View style={[styles.topContainer, { width: topWidth, height: height }]}>
                <View style={styles.leftSide}>
                </View>
                <View style={styles.rightSide}>
                </View>
            </View>
            <View style={[styles.bottomContainer, { width: bottomWidth }]}>
                <View style={styles.leftSideBottom}>
                </View>
                <View style={styles.rightSideBottom}>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        alignSelf: 'center',
        height: heightPercentageToDP(10),
        marginTop: widthPercentageToDP(2),
        justifyContent: 'center',
        flexDirection: 'row'
    },
    leftSide: {
        height: '100%',
        width: '100%',
        borderRightWidth: 0.5,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    rightSide: {
        height: '100%',
        width: '100%',
        borderLeftWidth: 0.5,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    bottomContainer: {
        width: widthPercentageToDP(10),
        alignSelf: 'center',
        height: heightPercentageToDP(1),
        justifyContent: 'center',
        flexDirection: 'row'
    },
    leftSideBottom: {
        width: '100%',
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    rightSideBottom: {
        width: '100%',
        borderTopWidth: 1,
        borderColor: 'grey'
    }


})

export default LineDesigning