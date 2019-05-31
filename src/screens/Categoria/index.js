import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements';

	const list = [
	  {
	    title: 'Gato',
	    icon: 'av-timer'
	  },
	  {
	    title: 'Cachorro',
	    icon: 'flight-takeoff'
	  },
	];

export default class Categoria extends Component {

  render() {
    return (
      <View style={styles.container}>
      <Header
     	  left={<Icon name='bars' size={24} color='#FFFF' />}
     	  center={<Text style={styles.txtTitulo}>CATEGORIA</Text>}
     	  right={<Icon name='search' size={24} color='#FFFF' />}
     	 />

     	 {
		    list.map((item, i) => (
		      <ListItem
		        key={i}
		        title={item.title}
		        leftIcon={{ name: item.icon }}
		      />
		    ))
		  }
      </View>

    );
  }
}

