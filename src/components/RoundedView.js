import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
// import HomeScreenStyles from '../views/home/HomeScreenStyles'

const RoundedView = ({ onPress, layout, children }) => {
    //due to an issue i import style as bellow ===> Require cycle: src/views/home/HomeScreen.js -> src/views/home/HomeScreenStyles.js -> src/views/home/HomeScreen.js
    const HomeScreenStyles = require('../views/home/HomeScreenStyles').default

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                HomeScreenStyles.iconsBox,
                {
                    backgroundColor:
                        layout === 'grid' || layout === 'list'
                            ? Color.yellowColor
                            : Color.white,
                },
            ]}
        >
            {children}
        </TouchableOpacity>
    )
}

export default memo(RoundedView)

const styles = StyleSheet.create({})
