import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Button, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { inserirBanda } from '../../services/BandaService';

const TelaCadastro = ({navigation, route}) => {
  const [nome, onChangeNome] = useState("");
  const [integrantes , onChangeIntegrantes] = useState(null);
  const [genero , onChangeGenero] = useState(null);
  const [descricao , onChangeDescricao] = useState(null);

  async function  salvar() {
    const banda = {
      nome, integrantes, genero, descricao
    }
    await AsyncStorage.mergeItem(JSON.stringify(banda.id), JSON.stringify(banda));
  }

  async function mostrarBanda(){
    const json = await AsyncStorage.getItem(banda.id);
    const banda = JSON.parse(json);

    Alert.alert('Informações da banda',
     `Nome: ${banda.nome}`
     );
    }

  return (
    <SafeAreaView style={styles.painel}>
      <Text style={styles.titulo}>Nome da Banda</Text>

      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNome}
        placeholder="informe o nome"
        value={nome}
      />

      <Text>Integrantes</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeIntegrantes}
        placeholder="informe os integrantes"
        value={integrantes}
      />

      <Text>Genero</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeGenero}
        placeholder="informe o gênero da Banda"
        value={genero}
      />

      <Text>Descricao</Text>
      
      <TextInput
        style={styles.descricao}
        onChangeText={onChangeDescricao}
        placeholder="informe a história da banda"
        value={descricao}
        multiline
        numberOfLines={5}
      />


      <View style={styles.painelBotoes}>
        <Button
          onPress={() => {
            const novaBanda = {
              nome: nome,
              integrantes: [integrantes],
              genero: genero,
              descricao: descricao,
            };
            if(nome.length === 0 ) {
              Alert.alert("Erro", "O nome da banda é obrigatória!");
              return;
            } else if(integrantes.length === 0) {
              Alert.alert("Erro","Tem que haver no mínimo um integrante");
              return;
            }
            inserirBanda({ novaBanda });
            navigation.navigate('Listagem');
          }}
          title="Salvar"
          color="#080357"
          style={styles.botao}
        />     

        <Button
          onPress={() => {
            navigation.goBack();
          }}
          title="Cancelar"
          color="#080357"
        />

      </View>
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

export default TelaCadastro;