import React, {Component} from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';



export default class Card extends Component {

  render() {
    return (
      <View style={styles.contain}>
        <View style={styles.boxLits}>
            <View style={styles.boxImg}>
                <Image style={styles.img} source={require('../../imagem/gato.jpg')} />
            </View>
            <View style={styles.boxinfo}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.txtTitulo}>Gato perdido</Text>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.descricao}>Foi encontrando proximo ao ver-o-peso.</Text>
            </View>
        </View>
      </View>
    );
  }
}

