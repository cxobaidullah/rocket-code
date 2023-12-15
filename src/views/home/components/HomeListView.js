import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { memo } from 'react'
import RoundedView from '../../../components/RoundedView'
import ArrowRight from '../../../assets/svg/arrow-right.svg'
import Spacing from '../../../components/Spacing'
import Style from '../../../style/Style'
const HomeListView = ({ onPress, item }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.mainBox}>
            <View style={styles.innerBox}>
                <Image
                    resizeMode='cover'
                    style={styles.imageStyle}
                    source={{ uri: item?.image }}
                />
                <Spacing type={'h'} val={15} />
                <Text>{item?.title}</Text>
            </View>
            <View style={styles.innerBox}>
                {item?.count > 0 && (
                    <RoundedView layout={'list'}>
                        <Text style={Style.colorWhite}>
                            {item?.count.toString()}
                        </Text>
                    </RoundedView>
                )}
                <Spacing type={'h'} val={20} />
                <ArrowRight height={50} white={50} />
                <Spacing type={'h'} val={5} />
            </View>
        </TouchableOpacity>
    )
}

export default memo(HomeListView)

const styles = StyleSheet.create({
    mainBox: {
        width: '95%',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Color.white,
        borderRadius: 15,
        margin: 10,
        overflow: 'hidden',

        alignSelf: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,

        shadowColor: '#000',
        shadowOffset: { width: 2, height: 12 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 8,
    },
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 100,
    },
    innerBox: {
        alignItems: 'center',
        flexDirection: 'row',
    },
})
