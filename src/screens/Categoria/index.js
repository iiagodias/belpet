import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import { List } from 'react-native-paper';


export default class Categoria extends Component {

  render() {
    return (
      <View style={styles.container}>
      <Header
     	  left={<Icon name='bars' size={24} color='#FFFF' />}
     	  center={<Text style={styles.txtTitulo}>CATEGORIA</Text>}
     	  right={<Icon name='search' size={24} color='#FFFF' />}
     	 />

			<List.Section>
        <List.Subheader>Categorias de animais</List.Subheader>
        <List.Item
          title="Gato"
          left={() => <List.Icon icon="pets" />}
       />
        <List.Item
          title="Cachorro"
          left={() => <List.Icon icon="pets" />}
       />
      </List.Section>

      </View>

    );
  }
}

