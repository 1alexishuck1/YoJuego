import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BuscarCancha from '../screens/BuscarCancha';
import InicioScreen from '../screens/InicioScreen';
import ConfiguracionStack from '../Stacks/ConfiguracionStack';
import Configuracion from '../screens/Configuracion';
import InformacionCuenta from '../screens/InformacionCuenta';
import ApyNom from '../screens/ApyNom';

const StackHome = createStackNavigator();

const HomeStack = () => {
  return (
    <StackHome.Navigator>
        <StackHome.Screen options={{headerShown: false}} name="InicioScreen" component={InicioScreen}  />
        <StackHome.Screen name="BuscarCancha" component={BuscarCancha}  />
        <StackHome.Screen name="Configuracion" component={Configuracion}  />
        <StackHome.Screen name="Informacion de tu cuenta" component={InformacionCuenta}  />
        <StackHome.Screen name="Apellido y nombre" component={ApyNom}  />

    </StackHome.Navigator>
  )
}

export default HomeStack;