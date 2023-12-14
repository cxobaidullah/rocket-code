import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import Color from '../style/Color'
const TextCard = ({ text, children }) => {
    return (
        <View style={styles.mainBox}>
            <Text>{text}</Text>
            {children}
        </View>
    )
}

export default memo(TextCard)

const styles = StyleSheet.create({
    mainBox: {
        width: '60%',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: Color.white,
    },
})
