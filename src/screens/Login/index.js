import React, {Component} from 'react';
import { View, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Login extends Component {

  state= {
    text: ""
  }
  
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground  source={require('../../imagem/textura.png')} style={styles.textura} >
        <View style={styles.box}>
          <View style={styles.boxLogo}>
            <Image style={styles.logo} source={require("../../imagem/logo.png")} />
          </View>
          
          <Input
            placeholder='E-mail'
            leftIcon={
            <Icon
              name='envelope'
              size={24}
              color='#4444'
            />}
            inputStyle={styles.inputStyle}
            containerStyle={styles.containerStyle}
            
          />

          <Input
            placeholder='Senha'
            secureTextEntry={true}
            leftIcon={
            <Icon
              name='key'
              size={24}
              color='#4444'
            />}
            inputStyle={styles.inputStyle}
            containerStyle={styles.containerStyle}
          />

        <TouchableOpacity style={styles.bnt} onPress={() => this.props.navigation.navigate("Tab")}>
            <Text style={styles.txtBnt}>Entrar</Text>
        </TouchableOpacity>

        </View>
      </ImageBackground >
      </View>

    );
  }
}

