import * as React from 'react';
import { View, Button } from 'react-native';


const TelaCadastro = ({navigation}) => {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="bandas" onPress={() => navigation.goBack()} />
            </View>
    );
}

export default TelaCadastro;