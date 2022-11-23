import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { listarBandas, selecionarBanda} from '../../services/BandaService';
import { Button } from '@rneui/base';


function Banda ({ banda }) {
    const navigation = useNavigation();

    return (
        <View style={styles.bandaContainer}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Banda', { ...banda});
                selecionarBanda({ id: banda.id });
            }} style={[styles.banda]}>
                <Text style={styles.titulo}>{ banda?.nome }</Text>
            </TouchableOpacity>
        </View>
    )
    
};

function Cabecalho() {
    return (
        <View style={styles.painel}>
            <Text style={styles.titulo}>Bandas</Text>    
        </View>
    );
}

function Rodape() {
    const navigation = useNavigation();

    async function mostrarBanda(){
        const json = await AsyncStorage.getItem("id");
        const banda = JSON.parse(json);

        console.log(banda)

        Alert.alert('Última banda salva',
         `Nome: ${banda.nome}`
         );
    } 

    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Icon style={styles.icon} name='pluscircleo' size={35} 
                onPress={() => navigation.navigate('Cadastro')}/>
                <Button onPress={mostrarBanda} 
                title="Última Banda"
                color="#080357"
                style={styles.botao} 
                />
            </View>
    );
}

function ListaVazia() {
    return (
        <View style={styles.painel}>
            <Text>Não tem nenhuma Banda cadastrado.</Text>    
            <Text>Cliquei no "+" para cadastrar uma banda</Text>
        </View>
    );
}


const TelaListagem = ({}) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderBanda = ({ item: banda }) => {
        const backgroundColor = banda?.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = banda?.id === selectedId ? 'white' : 'black';
        
        return (
            <Banda
                banda={banda}
                onPress={() => setSelectedId(banda.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }} 
            />
        );
    };

    const bandas = listarBandas();

    return (
        <SafeAreaView style={styles.painelPrincipal}>
                <FlatList
                    data={bandas}
                    renderItem={renderBanda}
                    keyExtractor={banda => banda.id}
                    ListHeaderComponent={Cabecalho}
                    ListFooterComponent={Rodape}
                    ListEmptyComponent={ListaVazia}
                />
        </SafeAreaView>            
    );
}

export default TelaListagem;

const styles = StyleSheet.create({
    painelPrincipal: {
        backgroundColor: '#CBBFBB',
    },
    icon: {
        right: '-40%',
        bottom: '50%',
    },
    banda: {
        backgroundColor: '#477998',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: '80%',
    },
    titulo: {
        fontSize: 20,
    },
    bandaContainer: {
        flexDirection: 'row',
    },
        painel: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    botao: {
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 12,
      },
})