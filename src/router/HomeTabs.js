import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../views/home/HomeScreen'
import SettingScreen from '../views/home/SettingScreen'
import HomefocusedIcon from '../assets/svg/focused-home.svg'
import HomeUnfocusedIcon from '../assets/svg/unfocused-home.svg'
import ShopfocusedIcon from '../assets/svg/focus-shop.svg'
import ShopUnfocusedIcon from '../assets/svg/unfocused-shop.svg'
import UserProfileIcon from '../assets/svg/user-profile.svg'
import Color from '../style/Color'
import UserProfile from '../views/home/UserProfile'
import OffersIcon from '../assets/svg/offers-icons.svg'
import OffersScreen from '../views/home/OffersScreen'
const Tab = createBottomTabNavigator()

export default HomeTabs = () => {
    return (
        <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: '10.5%',
                    shadowColor: Color.black,
                    shadowOffset: {
                        width: 0,
                        height: -1,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                     
                },
                tabBarIcon: ({ focused }) => {
                    switch (route.name) {
                        case 'HomeScreen':
                            if (focused) return <HomefocusedIcon height = {30} width = {30} />
                            else return <HomeUnfocusedIcon height = {30} width = {30} />
                            break
                            case 'UserProfile':
                            if (focused) return <UserProfileIcon height = {25} width = {25} />
                            else return <UserProfileIcon height = {25} width = {25} />
                            break
                            case 'OfferScreen':
                            if (focused) return <OffersIcon height = {25} width = {25} />
                            else return <OffersIcon height = {25} width = {25} />
                            break
                        case 'SettingScreen':
                            if (focused) return <ShopfocusedIcon height = {30} width = {30} />
                            else return <ShopUnfocusedIcon height = {30} width = {30} />

                            break
                       
                        
                        default:
                            break
                    }
                },
            })}
        
        >
            <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name='SettingScreen'
                component={SettingScreen}
                options={{ headerShown: false }}
            /> 
               <Tab.Screen
                name='OfferScreen'
                component={OffersScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name='UserProfile'
                component={UserProfile}
                options={{ headerShown: false }}
            />
           
        </Tab.Navigator>
    )
}
