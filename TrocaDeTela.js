import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaListagem from './Telas/TelaListagem';
import TelaCadastro from './Telas/TelaCadastro';
import TelaEditar from './Telas/TelaEditar';
import TelaBanda from './Telas/TelaBanda';

const Stack = createNativeStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Listagem" component={TelaListagem} options={{
        headerStyle:{
          backgroundColor: '#CBBFBB',
        },
      }}/>
      <Stack.Screen name="Cadastro" component={TelaCadastro} options={{
        headerStyle:{
          backgroundColor: '#CBBFBB',
        },
      }}/>
      <Stack.Screen name="Editar" component={TelaEditar} options={{
        headerStyle:{
          backgroundColor: '#CBBFBB',
        },
      }}/>
      <Stack.Screen name="Banda" component={TelaBanda} options={{
        headerStyle:{
          backgroundColor: '#CBBFBB',
        },
      }}/>
    </Stack.Navigator>
  );
}

export default MyStack;