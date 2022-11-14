import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TelaEditar = ({navigation}) => {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Icon style={estilo.icon} name='pluscircleo' size={35} 
                onPress={() => navigation.navigate('Listagem')}/>
            </View>
    );
}

export default TelaEditar;

const estilo = StyleSheet.create({
    icon: {
        position: 'absolute',
        right: 45,
        bottom: '5%',
    },
})