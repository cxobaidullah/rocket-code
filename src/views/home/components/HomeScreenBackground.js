import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Style from '../../../style/Style'
import Color from '../../../style/Color'

const HomeScreenBackground = ({ children, propStyle }) => {
    return (
        <View style={componentStyle.container}>
            <ImageBackground
                style={componentStyle.bgImage}
                source={require('../../../assets/images/bacckground.jpeg')}
            />

            <View style={[componentStyle.viewstyle, propStyle]}>
                {children}
            </View>
        </View>
    )
}

export default HomeScreenBackground

const componentStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.lightGrey,
        position: 'relative',
    },
    viewstyle: {
        flex: 1,
        width: '95%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
        alignSelf: 'center',
    },
    bgImage: {
        flex: 0.3,
        width: '100%',
        height: 300,
        alignItems: 'center',
        backgroundColor: Color.white,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    bottomView: { flex: 0.7, backgroundColor: Color.white },
})
