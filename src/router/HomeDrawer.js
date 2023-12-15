import { createDrawerNavigator } from '@react-navigation/drawer'
import MyDrawer from '../components/Drawer'
import HomeTabs from './HomeTabs'
import NotificationIcon from '../assets/svg/notiffication-icon.svg'
const Drawer = createDrawerNavigator()

export default HomeDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            drawerContent={(props) => <MyDrawer {...props} />}
        >
            <Drawer.Screen
                name='Halo Recardo 👋🏻'
                component={HomeTabs}
                options={{
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
