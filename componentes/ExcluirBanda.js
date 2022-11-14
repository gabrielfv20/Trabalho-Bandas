import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { excluirBanda } from "../services/BandaService";
import Icon from 'react-native-vector-icons/AntDesign';


export default function ExcluirBanda({ banda }) {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity onPress={() => {
            excluirBanda({ id: banda.id });
        } }>
            <Icon style={styles.icon} name='close' size={35} 
            onPress={() => navigation.navigate('Listagem')}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    lixeira: {
        margin: 6,
        width: 20,
        height: 20,
    },
});