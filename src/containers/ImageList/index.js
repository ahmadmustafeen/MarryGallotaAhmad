import React from 'react'
import { View, StyleSheet } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import BackgroundScreen from '../../components/BackgroundScreen'
import ImageListContainer from '../../components/ImageListContainer'
import LineDesigning from '../../components/LineDesigning'
import RoundImageIcon from '../../components/RoundImageIcon'


const ImageList = props => {


    return (
        <BackgroundScreen noImage>
            <View style={styles.image}>
                <RoundImageIcon text="add" source={require("../../assets/images/greenroundicon.png")} />
            </View>
            <LineDesigning topWidth={widthPercentageToDP(25)} bottomWidth={widthPercentageToDP(25)} />
            <ImageListContainer onPress={() => props.navigation.navigate("ViewImage")} />
            <ImageListContainer onPress={() => props.navigation.navigate("ViewImage")} />
            <ImageListContainer onPress={() => props.navigation.navigate("ViewImage")} />
            <ImageListContainer onPress={() => props.navigation.navigate("ViewImage")} />



        </BackgroundScreen>
    )
}

const styles = StyleSheet.create({
    image: {
        alignSelf: "center",
        width: widthPercentageToDP(25),
        aspectRatio: 1
    },
})
export default ImageList