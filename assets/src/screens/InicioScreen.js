import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'react-native-elements';

import cancha from '../../src/img/campo-de-futbol.png';
import disquete from '../../src/img/disquete (1).png';
import arrowRight from '../../src/img/arrow-right.png';
import calendario from '../../src/img/calendario.png';
import configuracion from '../../src/img/configuracion.png';

 
const InicioScreen = ( { navigation } ) => {
    return (
      <View style={styles.container}>
        <View style={styles.containerCards}>
          <TouchableOpacity 
              style={styles.containerItem}
              onPress={() => navigation.navigate('BuscarCancha')}
            >
            <View style={styles.containerImg}>
              <Image style={styles.imgItem} source={cancha} />
            </View>
            <Text style={styles.textTitle}>Buscar cancha</Text>
            <View style={styles.containerImgArrow}>
              <Image style={styles.imgItemArrow} source={arrowRight} />
            </View>
          </TouchableOpacity>
        
          
          <TouchableOpacity 
              style={styles.containerItem}
              
            >
            <View style={styles.containerImg}>
              <Image style={styles.imgItem} source={disquete} />
            </View>
            <Text style={styles.textTitle}>Turno fijo</Text>
            <View style={styles.containerImgArrow}>
              <Image style={styles.imgItemArrow} source={arrowRight} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
              style={styles.containerItem}
              onPress={() => alert("hola")}
            >
            <View style={styles.containerImg}>
              <Image style={styles.imgItem} source={calendario} />
            </View>
            <Text style={styles.textTitle}>Mis Turnos</Text>
            <View style={styles.containerImgArrow}>
              <Image style={styles.imgItemArrow} source={arrowRight} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
              style={styles.containerItem}
              onPress={() => navigation.navigate('Configuracion')}
            >
            <View style={styles.containerImg}>
              <Image style={styles.imgItem} source={configuracion} />
            </View>
            <Text style={styles.textTitle}>Configuracion</Text>
            <View style={styles.containerImgArrow}>
              <Image style={styles.imgItemArrow} source={arrowRight} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

export default InicioScreen;

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
    width: "85%",
    height: 96,
    borderRadius: 15,
    borderColor: "#3282B8",
    borderWidth: 2,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowOffset: {
      height: 3,
      width: 3
    }
  },
  imgItem:{
    width: 50,
    height: 50,
  },
  containerImg: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    backgroundColor: "#3282B8",
    borderRadius: 10,
    marginLeft: "5%",
    marginTop: 13,
  },
  textTitle: {
    fontSize: 20,
    color: "#ffffff",
    marginLeft: 20,
    alignSelf: "center",
  },
  imgItemArrow:{
    width: 20,
    height: 20,
  },
  containerImgArrow: {
    marginLeft: "90%",
    marginTop: 38,
    position: "absolute"
  }
})