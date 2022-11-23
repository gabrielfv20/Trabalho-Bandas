import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Button, View, Text, TextInput} from 'react-native';

import { alterarBanda } from '../../services/BandaService';
import Informacoes from './Informacoes';

const TelaEditar = ({nome, integrantes, genero, descricao, navigation}) => {
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
      <View style={styles.painelBotoes}>
        
        <Button
          onPress={() => {
            const atualizarBanda = {
              nome: nome,
              integrantes: [integrantes],
              genero: genero,
              descricao: descricao,
            };
            alterarBanda({ atualizarBanda });
            navigation.navigate('Listagem');
          }}
          title="Salvar"
          color="#080357"
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
  icon: {
    position: 'absolute',
    right: 45,
    bottom: '5%',
  },
});

export default TelaEditar;
