import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Favorito extends Component {

  render() {
    return (
      <View style={styles.container}>
      <Header
     	  left={<Icon name='bars' size={24} color='#FFFF' />}
     	  center={<Text style={styles.txtTitulo}>FAVORITOS</Text>}
     	  right={<Icon name='search' size={24} color='#FFFF' />}
     	 />
      </View>

    );
  }
}

