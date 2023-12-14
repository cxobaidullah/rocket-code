import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeDrawer from './HomeDrawer'

const Stack = createNativeStackNavigator()

export default HomeRouter = () => {
    return (
        <Stack.Navigator initialRouteName='HomeDrawer'>
            <Stack.Screen
                name='HomeDrawer'
                component={HomeDrawer}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}
