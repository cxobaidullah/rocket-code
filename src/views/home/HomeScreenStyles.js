import { StyleSheet } from 'react-native'
import Color from '../../style/Color'
import HomeScreen from './HomeScreen'

export default HomeScreenStyles = StyleSheet.create({
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'flex-end',
        backgroundColor: Color.white,
        paddingVertical: 4,
        width: '35%',
        borderRadius: 50,
        marginHorizontal: 10,
    },
    iconsBox: {
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
