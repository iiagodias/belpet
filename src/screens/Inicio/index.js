import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Inicio extends Component {

  render() {
    return (
      <View style={styles.container}>
     	<Header
     	  left={<Icon name='envelope' size={24} color='#FFFF' />}
     	  center={<Text>BELPET</Text>}
     	  right={<Icon name='envelope' size={24} color='#FFFF' />}
     	 />
      </View>

    );
  }
}

