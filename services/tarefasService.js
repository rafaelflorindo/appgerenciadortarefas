// Importa o array de mock inicial
import TarefasIniciais from "../Mook/Tarefas";

// Mantemos uma cópia em memória para simular o banco de dados durante a execução
let listaTarefas = [...TarefasIniciais];

export const tarefasService = {
  // Simula o GET /tarefas
  async listar() {
    return Promise.resolve([...listaTarefas]);
  },

  // Simula o POST /tarefas (Cadastro)
  async criar(novaTarefa) {
    const tarefaComId = {
      ...novaTarefa,
      id: Date.now(), // Gera um ID único simples
      data_criacao: new Date().toISOString().split('T')[0],
    };
    listaTarefas.push(tarefaComId);
    return Promise.resolve(tarefaComId);
  },

  // Simula o PUT /tarefas/:id (Edição)
  async atualizar(id, dadosAtualizados) {
    listaTarefas = listaTarefas.map((tarefa) => 
      tarefa.id === id ? { ...tarefa, ...dadosAtualizados } : tarefa
    );
    const tarefaAtualizada = listaTarefas.find((t) => t.id === id);
    return Promise.resolve(tarefaAtualizada);
  },

  // Simula o DELETE /tarefas/:id (Exclusão)
  async deletar(id) {
    listaTarefas = listaTarefas.filter((tarefa) => tarefa.id !== id);
    return Promise.resolve({ sucesso: true, id });
  }
};