import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DatabaseMemory extends InMemoryDbService {
  createDb() {
    const categorias = [
      { id: 1, nome: 'Moradia', descricao: 'Pagamento de contas da casa' },
      { id: 2, nome: 'Saúde', descricao: 'Plano de saúde e remédios' },
      { id: 3, nome: 'Lazer', descricao: 'Cinema, parque, praia, etc' },
      { id: 4, nome: 'Salário', descricao: 'Recebimento de salário' },
      { id: 5, nome: 'Freelas', descricao: 'Trabalhos como freelancer' },
    ];

    return categorias;
  }
}
