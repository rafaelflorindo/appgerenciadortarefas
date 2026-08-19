import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet, 
  Alert,
  SafeAreaView 
} from 'react-native';
import { tarefasService } from '../services/tarefasService';

export default function ListarTarefas() {
  const [tarefas, setTarefas] = useState([]);

  // Carrega as tarefas assim que a tela abre ou ganha foco
  useEffect(() => {
    carregarTarefas();
  }, []);

  async function carregarTarefas() {
    try {
      const dados = await tarefasService.listar();
      setTarefas(dados);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar as tarefas.");
    }
  }

  // Função para lidar com a exclusão
  async function handleExcluir(id) {
    Alert.alert(
      "Excluir Tarefa",
      "Tem certeza que deseja excluir esta tarefa?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Excluir", 
          style: "destructive", 
          onPress: async () => {
            await tarefasService.deletar(id);
            carregarTarefas(); // Atualiza a lista na tela
          }
        }
      ]
    );
  }

  // Função temporária para o botão de Editar
  function handleEditar(id) {
    Alert.alert("Editar", `Abrir tela de edição para a tarefa ID: ${id}`);
    // Futuramente aqui chamaremos: navigation.navigate('FormTarefa', { id })
  }

  // Função temporária para o botão de Cadastrar Nova Tarefa
  function handleNovaTarefa() {
    Alert.alert("Novo", "Abrir formulário de cadastro de nova tarefa.");
    // Futuramente aqui chamaremos: navigation.navigate('FormTarefa')
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Botão Superior para Cadastrar Nova Tarefa */}
      <View style={styles.headerContainer}>
        <Text style={styles.tituloHeader}>Gerenciamento de Tarefas</Text>
        <TouchableOpacity style={styles.botaoNovo} onPress={handleNovaTarefa}>
          <Text style={styles.textoBotaoNovo}>+ Novo</Text>
        </TouchableOpacity>
      </View>

      {/* Listagem das Tarefas usando FlatList */}
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.tituloTarefa}>{item.titulo}</Text>
            <Text style={styles.descricaoTarefa}>{item.descricao}</Text>
            
            <View style={styles.infoContainer}>
              <Text style={styles.textoInfo}>👤 {item.responsavel.nome}</Text>
              <Text style={styles.textoInfo}>📅 {item.data}</Text>
            </View>

            <View style={styles.statusContainer}>
              <Text style={styles.textoStatus}>Status: {item.status}</Text>
            </View>

            {/* Linha com os Botões de Ação (Editar e Excluir) */}
            <View style={styles.acoesContainer}>
              <TouchableOpacity 
                style={[styles.botaoAcao, styles.botaoEditar]} 
                onPress={() => handleEditar(item.id)}
              >
                <Text style={styles.textoAcao}>✏️ Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.botaoAcao, styles.botaoExcluir]} 
                onPress={() => handleExcluir(item.id)}
              >
                <Text style={styles.textoAcao}>🗑️ Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  tituloHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  botaoNovo: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  textoBotaoNovo: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    elevation: 2, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  tituloTarefa: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  descricaoTarefa: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  textoInfo: {
    fontSize: 12,
    color: '#555',
  },
  statusContainer: {
    marginBottom: 12,
  },
  textoStatus: {
    fontSize: 12,
    fontWeight: '600',
    color: '#007AFF',
  },
  acoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  botaoAcao: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  botaoEditar: {
    backgroundColor: '#f0ad4e',
  },
  botaoExcluir: {
    backgroundColor: '#d9534f',
  },
  textoAcao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});