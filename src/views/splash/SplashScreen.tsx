import { useNavigation } from '@react-navigation/native'
import react, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setUser } from '../../app/userSlice'
import Color from '../../style/Color'

const SplashScreen = ({}) => {
    const navigation = useNavigation()

    const dispatch = useDispatch()

    useEffect(() => {
        let user = {
            name: 'Obaid',
            profilePicture:
                'https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg',
            email: 'Obaid@gmail.com',
        }
        dispatch(setUser(user))
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeRouter' }],
            })
        }, 1000)
    })
    return (
        <>
            <View style={style.container} />
        </>
    )
}
export default SplashScreen

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.primary,
    },
})
