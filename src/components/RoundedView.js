import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import HomeScreenStyles from '../views/home/HomeScreenStyles'

const RoundedView = ({ onPress, layout , children }) => {
    return (
        <TouchableOpacity
        onPress={onPress}
            style={[
                HomeScreenStyles.iconsBox,
                {
                    backgroundColor:
                        layout === 'grid' || layout === 'list' ? Color.yellowColor : Color.white,
                },
            ]}>
           {children}
        </TouchableOpacity>
    )
}

export default memo(RoundedView)

const styles = StyleSheet.create({})
