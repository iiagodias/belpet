import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C0392B',
    },
    textura:{
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    },
    titulo:{
        fontFamily: 'Roboto-Light',
        fontWeight: 'normal',
    },
    boxCenter:{
        width: '90%',
        padding: 10,
        //backgroundColor: "#fff",
        borderRadius: 6
    },
    box:{
      padding: 10,
      width: '70%',
    },
    logo:{
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    boxLogo:{
      width: "100%",
      height: 100,
    },
    inputStyle:{
      color: "#4444",
      paddingLeft: 10,
      fontSize: 14
    },
    containerStyle:{
      backgroundColor: "#ffff",
      borderRadius: 5,
      marginTop: 10
    },
    bnt: {
      backgroundColor: "#C0392B",
      borderWidth: 2,
      borderColor: "#fff",
      marginTop: 20,
      padding: 10,
      width: "100%",
      alignItems: "center"
    },
    txtBnt:{
      color: "#fff"
    }
  });

export default styles;