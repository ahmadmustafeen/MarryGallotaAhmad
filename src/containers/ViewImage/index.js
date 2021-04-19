import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-picker';





import BackgroundScreen from '../../components/BackgroundScreen';
import InputWithLabel from '../../components/inputWithLabel';
import LineDesigning from '../../components/LineDesigning';
import RoundImageIcon from '../../components/RoundImageIcon';
import ModalScreen from '../../components/ModalScreen';
const options = {
    title: 'Select Avatar',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
const ViewImage = props => {
    const handleChange = (key, value) => {
        setState((state) => ({ ...state, [key]: value }));
    };

    const setImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log(response.data.size, "image")
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                // console.log(response)
                handleChange('image', {
                    uri: Platform.OS == 'ios' ? response.uri.replace("file://", "/private") : response.uri,
                    type: response.type,
                    name: Platform.OS == 'ios' ? "placeholder_text" : response.fileName,
                });
            }
        });
    };
    const [visible, setVisible] = useState(false)
    const [state, setState] = useState({
        image: "",
    });
    console.log(state)
    return (
        <BackgroundScreen noImage>

            {/* <View style={styles.image}>
                <RoundImageIcon iconName="camera" iconColor="rgb(0,250,0)" onIconPress={setImage} source={require("../../assets/images/greyroundicon.png")} />
            </View>
            <LineDesigning topWidth={widthPercentageToDP(25)} bottomWidth={widthPercentageToDP(25)} /> */}
            {!state.image?.uri ?
                <View style={[styles.userImage, { width: widthPercentageToDP(75), height: heightPercentageToDP(25) }]}>

                    <Text style={[styles.text, { color: 'white', textTransform: 'uppercase', fontSize: 24 }]}>Picture</Text>

                </View> :

                <Image
                    style={styles.userImageSetter}
                    source={{ uri: state.image.uri }}
                />
            }
            <LineDesigning topWidth={widthPercentageToDP(35)} bottomWidth={widthPercentageToDP(30)} />
            <View style={{ width: widthPercentageToDP(70), alignSelf: 'center' }}>
                <InputWithLabel label="makrdown" />
                <InputWithLabel label="brand" />
                <InputWithLabel label="color" />
                <InputWithLabel label="size" />
            </View>

            <LineDesigning topWidth={widthPercentageToDP(30)} bottomWidth={widthPercentageToDP(10)} />
            <View>
                <Text style={styles.title}>Description</Text>
                <TextInput style={styles.userImage} />
            </View>
            <LineDesigning topWidth={widthPercentageToDP(30)} bottomWidth={widthPercentageToDP(30)} />
            <View style={styles.image}>
                <RoundImageIcon text="save" source={require("../../assets/images/greenroundicon.png")} onIconPress={() => setVisible(true)} />
            </View>
            <TouchableOpacity style={styles.text} >
                <View><Text style={styles.title}>Delete</Text></View>
            </TouchableOpacity>
            {visible && <ModalScreen visible={visible} pressYes={() => props.navigation.navigate("ImageList")} pressNo={() => setVisible(false)} question="Are you sure you want to delete?" />}

        </BackgroundScreen>
    )
}
const styles = StyleSheet.create({
    image: {
        alignSelf: "center",
        width: widthPercentageToDP(25),
        aspectRatio: 1
    },
    userImage: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        width: widthPercentageToDP(60),
        height: widthPercentageToDP(30),
        backgroundColor: 'grey',
        alignSelf: 'center',
        borderRadius: widthPercentageToDP(5),
        marginVertical: widthPercentageToDP(0.5)
    },
    userImageSetter: {
        borderRadius: widthPercentageToDP(5),
        marginVertical: widthPercentageToDP(0.5),
        width: widthPercentageToDP(60),
        height: widthPercentageToDP(30),
        justifyContent: 'center',
        alignSelf: 'center'
    },
    title: {
        textAlign: 'center',
        color: 'white',
    }
})



export default ViewImage