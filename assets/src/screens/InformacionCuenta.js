import React from 'react';
import TouchableINFOCUENTA from '../components/TouchableINFOCUENTA';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';

import arrowRight from '../../src/img/arrow-right.png';


const datos = {
  nomUser: "NombreUsuario",
  correoUser: "ejemplo@gmail.com",
  telUser: "3442-121212",
  paisUser: "Argentina",
  fecNacUser: "50/20/02"
}


const InformacionCuenta = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCards}>

        <TouchableOpacity 
          style={styles.containerItem}
          onPress={() => navigation.navigate('Apellido y nombre')}
        >
          <View style={styles.containerTextos}>
            <Text style={styles.textTitle}>Apellido y nombre</Text>
            <Text style={styles.textSubTitle}>{datos.nomUser}</Text>
          </View>
          <View style={styles.containerImgArrow}>
              <Image style={styles.imgItemArrow} source={arrowRight} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.containerItem}
          onPress={() =>alert('hola')}
        >
          <View style={styles.containerTextos}>
            <Text style={styles.textTitle}>Correo electrónico</Text>
            <Text style={styles.textSubTitle}>{datos.correoUser}</Text>
          </View>
          <View style={styles.containerImgArrow}>
              <Image style={styles.imgItemArrow} source={arrowRight} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.containerItem}
          onPress={() =>alert('hola')}
        >
          <View style={styles.containerTextos}>
            <Text style={styles.textTitle}>Teléfono</Text>
            <Text style={styles.textSubTitle}>{datos.telUser}</Text>
          </View>
          <View style={styles.containerImgArrow}>
              <Image style={styles.imgItemArrow} source={arrowRight} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.containerItem}
          onPress={() =>alert('hola')}
        >
          <View style={styles.containerTextos}>
            <Text style={styles.textTitle}>País</Text>
            <Text style={styles.textSubTitle}>{datos.paisUser}</Text>
          </View>
          <View style={styles.containerImgArrow}>
              <Image style={styles.imgItemArrow} source={arrowRight} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.containerItem}
          onPress={() =>alert('hola')}
        >
          <View style={styles.containerTextos}>
            <Text style={styles.textTitle}>Fecha de nacimiento</Text>
            <Text style={styles.textSubTitle}>{datos.fecNacUser}</Text>
          </View>
          <View style={styles.containerImgArrow}>
              <Image style={styles.imgItemArrow} source={arrowRight} />
          </View>
        </TouchableOpacity>


      </View>
    </View>
  )
}

export default InformacionCuenta;

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
  containerTextos:{
    flexDirection: "colum",
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginLeft: 20,
    alignSelf: "center"
  },
  textSubTitle:{
    fontSize: 15,
    color: "#C6C6C6",
    marginLeft: 30
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


