import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import Color from '../style/Color'
import Style from '../style/Style'
const TextCard = ({ text, children }) => {
    return (
        <View style={styles.mainBox}>
            <Text style={Style.colorBlack}>{text}</Text>
            {children}
        </View>
    )
}

export default memo(TextCard)

const styles = StyleSheet.create({
    mainBox: {
        width: '50%',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: Color.white,
    },
})
