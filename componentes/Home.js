import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Home</Text>
      
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('ListarTarefas')}
      >
        <Text style={styles.textoBotao}>Listar Tarefas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;