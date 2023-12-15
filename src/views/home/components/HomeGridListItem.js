import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { memo } from 'react'
import Spacing from '../../../components/Spacing'
import Color from '../../../style/Color'
const width = Dimensions.get('window').width
const HomeGridListItem = ({ item, onPress }) => {
    console.log('render')
    return (
        <TouchableOpacity onPress={onPress} style={styles.mainBox}>
            <Image
                resizeMode='cover'
                style={styles.imageStyle}
                source={{ uri: item?.image }}
            />
            <Spacing val={10} />
            <Text>{item?.title}</Text>
            <Spacing val={10} />
        </TouchableOpacity>
    )
}

export default memo(HomeGridListItem)

const styles = StyleSheet.create({
    mainBox: {
        width: width / 2.4,

        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Color.white,
        borderRadius: 15,
        overflow: 'hidden',
        margin:10,
    },
    imageStyle: {
        height: 90,
        width: '100%',
    },
})
