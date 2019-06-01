import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contain:{
    width: '100%',
    padding: 10,
    alignItems: "center"
  },
  boxLits:{
    width: "95%",
    backgroundColor: "#4444",
    borderRadius: 5,
    flexDirection: "row",
    padding: 10,
    flexWrap: "wrap"
  },
  boxImg:{
    width: 50,
    height: 50,
    borderRadius: 100,
    borderColor: "#C0392B",
    borderWidth: 2,
    overflow: "hidden",
  },
  img:{
    resizeMode: "contain",
    width: '100%',
    height:  '100%',
  },
  boxinfo:{
    marginLeft: 10,
    width: '80%'
  },
  descricao:{
    fontSize: 13,
    color: "#828282"
  }
  });

export default styles;