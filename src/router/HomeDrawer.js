import { createDrawerNavigator } from '@react-navigation/drawer'
import MyDrawer from '../components/Drawer'
import HomeTabs from './HomeTabs'
import NotificationIcon from '../assets/svg/notiffication-icon.svg'
import MenuIcon from '../assets/svg/menu-icon.svg'
import { TouchableOpacity } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'

const Drawer = createDrawerNavigator()

export default HomeDrawer = () => {
    const navigation = useNavigation()

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer())
    }

    return (
        <Drawer.Navigator
            initialRouteName='Home'
            drawerContent={(props) => <MyDrawer {...props} />}>
            <Drawer.Screen
                name='Halo Recardo 👋🏻'
                component={HomeTabs}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity onPress={openDrawer}>
                            <MenuIcon />
                        </TouchableOpacity>
                    ),
                    headerLeftContainerStyle: {
                        paddingHorizontal: 10,
                    },

                    headerRight: () => <NotificationIcon />,

                    headerRightContainerStyle: {
                        paddingHorizontal: 10,
                    },
                    headerTitleAlign: 'center',
                }}
            />
        </Drawer.Navigator>
    )
}
