import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
//import Tarefas from "../Mook/Tarefas"; 

import { tarefasService } from "../services/tarefasService";

function ListarTarefas({ navigation }) {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  async function carregarTarefas() {
    const dados = await tarefasService.listar();
    setTarefas(dados);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      {tarefas.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.itemTitulo}>{item.titulo}</Text>
          <Text style={styles.descricao}>{item.descricao}</Text>

          {/* Rodapé do Card */}
          <View style={styles.footerCard}>
            {/* Linha 1: Responsável e Data */}
            <View style={styles.linhaInfo}>
              <Text style={styles.responsavel}>👤 {item.responsavel.nome}</Text>
              <Text style={styles.data}>{item.data_criacao}</Text>
            </View>

            {/* Linha 2: Status */}
            <View style={styles.linhaStatus}>
              <Text style={styles.statusLabel}>Status:</Text>
              <Text style={styles.statusValor}> {item.status}</Text>
            </View>
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
    marginBottom: 12,
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
  footerCard: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
    marginTop: 5,
  },
  linhaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  linhaStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  responsavel: {
    color: '#555',
    fontSize: 12,
  },
  data: {
    color: '#888',
    fontSize: 12,
  },
  statusLabel: {
    color: '#777',
    fontSize: 12,
  },
  statusValor: {
    color: '#333',
    fontWeight: 'bold',
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