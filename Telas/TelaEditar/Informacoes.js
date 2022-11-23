import React, { useState} from "react";
import { StyleSheet, Text, SafeAreaView, TextInput} from 'react-native';


export function Informacoes({}) {
    
  
    return (
      <SafeAreaView style={styles.painel}>
        
    </SafeAreaView>    
    );
}

const styles = StyleSheet.create({
  painel: {
    paddingHorizontal: 8,
    backgroundColor: '#CBBFBB',
  },
  
  
  titulo: {
    fontSize: 22,
    marginTop: 6,
    marginBottom: 10,
  },
  painelBotoes: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
});

export default Informacoes;
