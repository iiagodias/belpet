import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Cachrro Bob',
    avatar_url: 'https://bompracachorro.blogfolha.uol.com.br/files/2019/05/6A6B8741-3020-4482-948C-15594AB81374.jpeg',
    subtitle: 'Encontrado perto do lider..'
  },
  {
    name: 'Gato Miguel',
    avatar_url: 'https://www.petz.com.br/blog/wp-content/uploads/2017/07/gato02.jpg',
    subtitle: 'Estava na doca..'
  },
];

export default class Inicio extends Component {


  render() {
    return (
      <View style={styles.container}>
     	<Header
     	  left={<Icon name='bars' size={24} color='#FFFF' />}
     	  center={<Text style={styles.txtTitulo}>BELPET</Text>}
     	  right={<Icon name='search' size={24} color='#FFFF' />}
     	 />
        <View>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
              />
            ))
          }
        </View>
      </View>

    );
  }
}

