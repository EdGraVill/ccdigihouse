import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Home';
import Overview, { Header } from '../Overview';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen component={Home} name="Home" options={{ headerShown: false }} />
        <Stack.Screen
          component={Overview}
          name="Overview"
          options={{
            header: Header,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
