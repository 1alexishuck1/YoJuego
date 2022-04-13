import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Configuracion from '../screens/Configuracion';
import InformacionCuenta from '../screens/InformacionCuenta';

const StackConfiguracion = createStackNavigator();

const ConfiguacionStack = ( { navigation} ) => {
  return (
    <StackConfiguracion.Navigator>
        <StackConfiguracion.Screen name="Configuracion" component={Configuracion}  />
        <StackConfiguracion.Screen name="Informacion de tu cuenta" component={InformacionCuenta}  />
    </StackConfiguracion.Navigator>
  )
}

export default ConfiguacionStack;