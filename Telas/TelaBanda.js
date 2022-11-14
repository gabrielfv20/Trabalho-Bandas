import React from "react";
import { StyleSheet, Text, SafeAreaView, Button, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import ExcluirBanda from "../componentes/ExcluirBanda";

function Integrantes({ integrantes }) {
    return (
      <>
      {
        integrantes.map(integrantes => {
          return (
              <Text key={integrantes}>
                - {integrantes}
              </Text>
          )
        })
      }
      </>
    )
  }

const TelaBanda = ({ route, navigation}) => {
    
    const { id, nome, integrantes, genero, descricao } = route.params;
    const banda = { id, nome, integrantes, genero, descricao };
    
    return (
        <SafeAreaView style={styles.painelPrincipal}>
            <Text style={styles.titulo}>{ nome }</Text>
            <Text style={styles.rotulo}>Integrantes:</Text>
            <Integrantes integrantes={integrantes}/>
            <Text style={styles.rotulo}>Gênero:</Text>
            <Text style={styles.campo}>{ genero }</Text>
            <Text style={styles.rotulo}>Descricao</Text>
            <Text style={styles.campo}>{ descricao }</Text>
            <View style={styles.painelBotoes}>
            <Icon style={styles.icon} name='edit' size={35} 
            onPress={() => navigation.navigate('Editar')}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    painelPrincipal: {
        paddingHorizontal: 10,
        backgroundColor: '#CBBFBB',
    },
    titulo: {
        fontSize: 32,
    },
    rotulo: {
        color: 'grey',
        paddingTop: 10,
    },
    campo: {
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: 'grey',
        paddingVertical: 10,
        paddingHorizontal: 6,
    },
    painelBotoes: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'space-between',
        marginTop: '5%'
    },
    icon: {
        position: 'absolute',
        right: 45,
        bottom: '5%',
    },
});

export default TelaBanda;