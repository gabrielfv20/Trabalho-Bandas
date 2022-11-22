import React, { useState} from "react";
import { StyleSheet, Text, SafeAreaView, TextInput} from 'react-native';


export function Informacoes({nome, integrantes, genero, descricao}) {
    const [nm, Nome] = useState();
    const [ig, Integrantes] = useState();
    const [gn, Genero] = useState();
    const [dc, Descricao] = useState();
  
    return (
      <SafeAreaView style={styles.painel}>
        <Text style={styles.titulo}>Nome da Banda</Text>
        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={Nome}
          value={nm}
          placeholder={nome}
        />
  
        <Text>Integrantes</Text>
        <TextInput
          style={styles.input}
          onChangeText={Integrantes}
          value={ig}
          placeholder={integrantes}
        />
  
        <Text>Genero</Text>
        <TextInput
          style={styles.input}
          onChangeText={Genero}
          value={gn}
          placeholder={genero}
        />
  
        <Text>Descricao</Text>
        
        <TextInput
          style={styles.descricao}
          onChangeText={Descricao}
          value={dc}
          placeholder={descricao}
          multiline
          numberOfLines={5}
        />
    </SafeAreaView>    
    );
}

const styles = StyleSheet.create({
  painel: {
    paddingHorizontal: 8,
    backgroundColor: '#CBBFBB',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  descricao: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding:10,
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
