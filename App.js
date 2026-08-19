import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importação das telas
import Home from './componentes/Home';
import ListarTarefas from './componentes/ListarTarefas';
import Responsaveis from './componentes/Responsaveis';
import Perfil from './componentes/Perfil';
// Exemplo de uma tela que não tem aba (como uma tela de login ou form)
// import Login from './componentes/Login'; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Este componente encapsula o menu de abas
function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Tarefas" component={ListarTarefas} />
      <Tab.Screen name="Responsavel" component={Responsaveis} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Aqui definimos o TabNavigator como uma tela do Stack */}
        <Stack.Screen 
          name="Main" 
          component={MainTabs} 
          options={{ headerShown: false }} // Esconde o header duplicado
        />
        
        {/* Aqui você poderá adicionar outras telas que NÃO tem abas */}
        {/* <Stack.Screen name="Login" component={Login} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}