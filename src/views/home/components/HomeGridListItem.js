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
import Style from '../../../style/Style'
const width = Dimensions.get('window').width
const HomeGridListItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.mainBox}>
            <Image
                resizeMode='cover'
                style={styles.imageStyle}
                source={{ uri: item?.image }}
                progressiveRenderingEnabled={true}
                cache='reload'
            />
            <Spacing val={10} />
            <Text style={[Style.colorBlack, Style.textAlign]}>
                {item?.title}
            </Text>
            <Spacing val={10} />
            {item?.count > 0 ? (
                <View
                style={styles.countView}>
                <Text style = {Style.colorWhite}>{item?.count}</Text>
            </View>
            ):null}
           
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
        margin: 10,
        position: 'relative',
    },
    imageStyle: {
        height: 90,
        width: '100%',
        backgroundColor: Color.light,
    },
    countView:{
        position: 'absolute',
        top: 0,
        right: 0,
        height: 40,
        width: 50,
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor: Color.yellowColor,
        borderBottomLeftRadius:20
    }
})
