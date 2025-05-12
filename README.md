# Beer Collection 🍺

Uma aplicação para gerenciar sua coleção de cervejas artesanais, desenvolvida com foco em arquitetura limpa, testabilidade e manutenibilidade.

## 🎯 Prioridades do Projeto

1. **Arquitetura Limpa e Escalável**

   - Separação clara de responsabilidades
   - Módulos independentes e coesos
   - Fácil manutenção e extensão
   - Baixo acoplamento entre componentes

2. **Qualidade de Código**

   - Cobertura de testes abrangente
   - Tipagem forte com TypeScript
   - Padrões de código consistentes

3. **Experiência do Usuário**

   - Interface intuitiva e responsiva

4. **Performance**
   - Gerenciamento eficiente de estado com Zustand

## 📦 Arquitetura do Projeto

### Visão Geral

O projeto implementa uma arquitetura baseada em features, inspirada em princípios de Domain-Driven Design (DDD) e Clean Architecture. Cada feature é um módulo independente que encapsula sua própria lógica de negócio, componentes e tipos.

### Estrutura de Diretórios

```
src/
├── api/                    # Camada de API
│   ├── config/            # Configurações do Axios
│   ├── services/          # Serviços de API
│   ├── types/             # Tipos compartilhados
│   └── useCases/          # Casos de uso da aplicação
│
├── features/              # Módulos de funcionalidades
│   ├── beer-list/         # Listagem e visualização de cervejas
│   │   ├── components/    # Componentes específicos
│   │   ├── hooks/         # Hooks personalizados
│   │   └── types/         # Tipos específicos
│   │
│   ├── beer-management/   # Gerenciamento de cervejas
│   │   ├── components/    # Componentes de formulário
│   │   ├── hooks/         # Hooks de gerenciamento
│   │   └── types/         # Tipos específicos
│   │
│   └── layout/           # Componentes de layout
│       ├── components/    # Componentes de UI
│       └── hooks/         # Hooks de layout
│
├── pages/                # Páginas da aplicação
├── routes/              # Configuração de rotas
├── shared/              # Componentes compartilhados
└── store/               # Gerenciamento de estado global (Zustand)
    ├── beerStore.ts     # Store para gerenciamento de cervejas
    └── index.ts         # Exportação das stores
```

### Decisões Arquiteturais

1. **Separação de Camadas**

   - **API Layer**: Isolamento da lógica de comunicação com backend
   - **Features**: Módulos independentes com responsabilidades específicas
   - **Pages**: Composição de features em rotas
   - **Shared**: Componentes reutilizáveis

2. **Gerenciamento de Estado**

   - Zustand para estado global
   - Estado local para componentes específicos
   - Hooks personalizados para lógica reutilizável

3. **Padrões de Projeto**
   - Componentes funcionais com hooks
   - Props tipadas com TypeScript
   - CSS Modules para estilização isolada
   - Testes unitários abrangentes

### Fluxo de Dados

1. **Requisições à API**

   ```
   Component -> Hook -> UseCase -> Service -> API
   ```

2. **Gerenciamento de Estado**

   ```
   Action -> Store -> Selector -> Component
   ```

3. **Navegação**
   ```
   Route -> Page -> Features -> Components
   ```

## 🛠️ Tecnologias e Ferramentas

### Frontend

- **React**: Biblioteca principal para construção da UI
- **TypeScript**: Tipagem estática e melhor DX
- **Vite**: Build tool rápida e moderna
- **React Router**: Gerenciamento de rotas
- **CSS Modules**: Estilização modular e isolada
- **Zustand**: Gerenciamento de estado global

### Testes

- **Vitest**: Framework de testes rápido
- **React Testing Library**: Testes de componentes
- **MSW**: Mock Service Worker para API

### Qualidade

- **ESLint**: Linting de código
- **Prettier**: Formatação de código
- **TypeScript**: Verificação de tipos
- **Husky**: Git hooks para garantir qualidade
- **lint-staged**: Linting apenas de arquivos alterados

## 🧪 Estratégia de Testes

1. **Testes Unitários**

   - Componentes isolados
   - Hooks personalizados
   - Funções utilitárias

## 📋 Pré-requisitos

### Versão do Node.js

- Node.js v20.19.1
- npm 10.8.2

### Variáveis de Ambiente

Renomear o arquivo .env.example para apenas .env

## 🚀 Instalação e Uso

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/beer-collection.git

# Entre no diretório
cd beer-collection

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 📝 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria a build de produção
- `npm run preview`: Visualiza a build de produção
- `npm test`: Executa os testes
- `npm run lint`: Executa o linter
- `npm run format`: Formata o código

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
