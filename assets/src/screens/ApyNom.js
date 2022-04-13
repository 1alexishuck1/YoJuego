import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native-elements';
import arrowRight from '../../src/img/arrow-right.png';

const ApyNom = ({ navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.containerCards}>
            <View style={styles.containerItem}>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Nombre"}
                />
            </View>

            <View style={styles.containerItem}>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Apellido"}
                />
            </View>

            <TouchableOpacity>
                <View style={styles.containerBoton}>
                    <View style={styles.botonText}>
                        <Text style={styles.textTitle}>Guardar</Text>
                    </View>
                    <View style={styles.containerImgArrow}>
                        <Image style={styles.imgItemArrow} source={arrowRight} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ApyNom;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#1B262C",
    },
    containerCards:{
        marginTop: 70
    },
    containerItem:{
        flexDirection: "row",
        width: "70%",
        height: 40,
        borderRadius: 5,
        backgroundColor: "#ffffff",
        opacity: 0.5,
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
    textInput:{
        paddingLeft: 15,
        fontSize: 18
    },
    containerBoton:{
        width: "70%",
        height: 40,
        marginTop: 30,
        marginRight: "auto",
        marginLeft: "auto",
        backgroundColor: "#3282B8",
        borderRadius: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    textTitle:{
        color: "#FFFFFF",
        fontSize: 20,
        paddingLeft: 20,
        marginTop: 5,
        fontWeight: "bold",
    },  
    imgItemArrow:{
        width: 20,
        height: 20,
      },
    containerImgArrow: {
      marginLeft: "90%",
      marginTop: 10,
      position: "absolute"
    }
})