import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Tarefas from "../Mook/Tarefas"; 

function ListarTarefas({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Minhas Tarefas</Text>

            {Tarefas.map((item) => (
                <View key={item.id} style={styles.card}>
                    <Text style={styles.itemTitulo}>{item.titulo}</Text>
                    <Text style={styles.descricao}>{item.descricao}</Text>
                    
                    <View style={styles.linhaInfo}>
                        <Text style={styles.status}>Status: {item.status}</Text>
                        <Text style={styles.data}>{item.dataatualizacao}</Text>
                    </View>
                </View>
            ))}

            <TouchableOpacity 
              style={styles.botaoVoltar} 
              onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descricao: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  linhaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
  },
  status: {
    color: '#555',
    fontWeight: 'bold',
    fontSize: 12,
  },
  data: {
    color: '#999',
    fontSize: 12,
  },
  botaoVoltar: {
    backgroundColor: '#6c757d',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ListarTarefas;