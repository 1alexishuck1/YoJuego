import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native-elements';

const StackHome = createStackNavigator();

const MisTurnosStack = () => {
  return (
    /*<StackHome.Navigator>
        <StackHome.Screen name="InicioScreen" component={InicioScreen}  />
        <StackHome.Screen name="BuscarCancha" component={BuscarCancha}  />
    </StackHome.Navigator>*/
    <Text>Mis Turnos</Text>
  )
}

export default MisTurnosStack;