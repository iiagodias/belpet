import React, {Component} from 'react';
import { View } from 'react-native';
import styles from './styles';



export default class Header extends Component {

  render() {
    return (
      <View style={styles.container}>
     		<View>{this.props.left}</View>
     		<View>{this.props.center}</View>
     		<View>{this.props.right}</View>
      </View>

    );
  }
}

