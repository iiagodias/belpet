import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button } from 'react-native-elements';

export default class Ongs extends Component {

  render() {
    return (
      <View style={styles.container}>
     	<Header
     	  left={<Icon name='bars' size={24} color='#FFFF' />}
     	  center={<Text style={styles.txtTitulo}>ONGs</Text>}
     	  right={<Icon name='search' size={24} color='#FFFF' />}
     	 />
        <Card
          title='ONG SOS'
          image={{uri: "http://ongsoscidadaniaanimal.org/images/site/logo-ong-cidadania-animal.png"}}>
          <Text style={{marginBottom: 10}}>
            Salvar os animais é nosso dever.
          </Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
            <Text style={styles.txtBnt}>VER MAIS</Text>
          </TouchableOpacity>
        </Card>
      </View>

    );
  }
}

