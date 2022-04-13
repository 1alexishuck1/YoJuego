import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';

import arrowRight from '../../src/img/arrow-right.png';

import user from '../../src/img/perfil.png';
import contraseña from '../../src/img/notificacion.png';
import notificacion from '../../src/img/key.png';
import ayuda from '../../src/img/linea-de-ayuda.png';
import problema from '../../src/img/problema.png';


const Configuracion = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.containerCards}>

            <TouchableOpacity 
                style={styles.containerItem}
                onPress={() => navigation.navigate('Informacion de tu cuenta')}
            >
                <View style={styles.containerImg}>
                  <Image style={styles.imgItem} source={user} />  
                </View>
                <Text style={styles.textTitle}>Información de la cuenta</Text>
                <View style={styles.containerImgArrow}>
                    <Image style={styles.imgItemArrow} source={arrowRight} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.containerItem}
                onPress={() => alert('Press.')}
            >
                <View style={styles.containerImg}>
                  <Image style={styles.imgItem} source={contraseña} />  
                </View>
                <Text style={styles.textTitle}>Cambiar tu contaseña</Text>
                <View style={styles.containerImgArrow}>
                    <Image style={styles.imgItemArrow} source={arrowRight} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.containerItem}
                onPress={() => alert('Press.')}
            >
                <View style={styles.containerImg}>
                  <Image style={styles.imgItem} source={notificacion} />  
                </View>
                <Text style={styles.textTitle}>Notificaciones</Text>
                <View style={styles.containerImgArrow}>
                    <Image style={styles.imgItemArrow} source={arrowRight} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.containerItem}
                onPress={() => alert('Press.')}
            >
                <View style={styles.containerImg}>
                  <Image style={styles.imgItem} source={ayuda} />  
                </View>
                <Text style={styles.textTitle}>Ayuda</Text>
                <View style={styles.containerImgArrow}>
                    <Image style={styles.imgItemArrow} source={arrowRight} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.containerItem}
                onPress={() => alert('Press.')}
            >
                <View style={styles.containerImg}>
                  <Image style={styles.imgItem} source={problema} />  
                </View>
                <Text style={styles.textTitle}>Reportar un problema</Text>
                <View style={styles.containerImgArrow}>
                    <Image style={styles.imgItemArrow} source={arrowRight} />
                </View>
            </TouchableOpacity>
            




        </View>
    </View>
  )
}
export default Configuracion;

const styles = StyleSheet.create({
    container: {
        with: "100%",
        height: "100%",
        backgroundColor: "#1B262C",
      },
      containerCards:{
        marginTop: 70
      },
      containerItem:{
        flexDirection: "row",
        width: "90%",
        height: 50,
        borderRadius: 5,
        backgroundColor: "#3282B8",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowOffset: {
            height: 1,
            width: 1
        }
      },
      containerImg:{
          marginTop: 10,
          marginLeft: "5%"
      },
      imgItem:{
        width: 30,
        height: 30,
      },
      textTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff",
        marginLeft: 20,
        alignSelf: "center",
        marginTop: -5
      },
      imgItemArrow:{
        width: 20,
        height: 20,
      },
      containerImgArrow: {
        marginLeft: "90%",
        marginTop: 15,
        position: "absolute"
      }
})
