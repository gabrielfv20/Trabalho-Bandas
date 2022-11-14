import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import { listarBandas, selecionarBandas } from '../services/BandaService';
import ExcluirBanda from '../componentes/ExcluirBanda';



function Banda ({ banda }) {
    const navigation = useNavigation();

    return (
        <View style={styles.bandaContainer}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Banda', { ...banda});
                selecionarBandas({ id: banda.id });
            }} style={[styles.banda]}>
                <Text style={styles.titulo}>{ banda?.nome }</Text>
            </TouchableOpacity>
        <ExcluirBanda banda={banda}/>
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

    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Icon style={styles.icon} name='pluscircleo' size={35} 
                onPress={() => navigation.navigate('Cadastro')}/>
            </View>
    );
}

function ListaVazia() {
    return (
        <View style={styles.painel}>
            <Text>Não tem nenhum contato cadastrado.</Text>    
            <Text>Faça o cadastro utilizando o botão "Cadastrar"</Text>
        </View>
    );
}


const TelaListagem = ({navigation}) => {
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
        <SafeAreaView >
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
})