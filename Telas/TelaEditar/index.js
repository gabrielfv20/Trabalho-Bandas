import React from 'react';
import { StyleSheet, SafeAreaView, Button, View} from 'react-native';

import { inserirBanda } from '../../services/BandaService';
import Informacoes from './Informacoes';

const TelaEditar = ({navigation}) => {

  return (
    <SafeAreaView style={styles.painel}>
      <Informacoes/>
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
            navigation.navigate('Banda');
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
