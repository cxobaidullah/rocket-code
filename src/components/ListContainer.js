import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../style/Color'

const ListContainer = ({ children }) => {
    return <View style={styles.mainBox}>{children}</View>
}

export default ListContainer

const styles = StyleSheet.create({
    mainBox: {
        width: '100%',
        backgroundColor: Color.lightGrey,
        flex: 1,
        borderRadius: 15,
        opacity: 0.92,
    },
})
