import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioScreen from './assets/src/screens/InicioScreen';
import MisTurnosScreen from './assets/src/screens/MisTurnosScreen';
import Perfil from './assets/src/screens/Perfil';

import { Ionicons } from '@expo/vector-icons';
import BuscarCancha from './assets/src/screens/BuscarCancha';
import HomeStack from './assets/src/Stacks/HomeStack';
import MisTurnosStack from './assets/src/Stacks/MisTurnosStack';
import ConfiguacionStack from './assets/src/Stacks/ConfiguracionStack';

const Tab = createBottomTabNavigator();

export default function Navegation(){
    return(
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={ ( { route } ) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconNombre;
                            if (route.name === 'HomeStack'){
                                iconNombre = focused ? 'home' : 'home-outline';
                            } else if (route.name === 'MisTurnosStack'){
                                iconNombre = focused ?  'calendar' : 'calendar-outline'
                            } else if (route.name === 'ConfiguracionStack') {
                                iconNombre = focused ? 'person' : 'person-outline'
                            }
                            return <Ionicons name={iconNombre} size={30} color="#fff" />
                        },
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarStyle:{
                            backgroundColor: "#0F4C75"
                        },
                        
                    }) }

                >
                    <Tab.Screen name="HomeStack" component={HomeStack} />
                    <Tab.Screen name="MisTurnosStack" component={MisTurnosStack} />
                    <Tab.Screen name="ConfiguracionStack" component={ConfiguacionStack} />
                </Tab.Navigator>

                
            </NavigationContainer>     
    );
}