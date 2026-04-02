# 📱 Meu CRUD App com React Native

## 📖 Descrição do Projeto

Este projeto consiste em um aplicativo mobile desenvolvido em React Native que realiza operações de CRUD (Create, Read, Update, Delete) para o gerenciamento de pessoas.

A aplicação permite:

* Listar pessoas cadastradas
* Adicionar novas pessoas
* Editar informações existentes
* Excluir registros

Os dados são armazenados utilizando o JSON Server como API fake, com acesso externo via LocalTunnel.

---

## 🚀 Tecnologias Utilizadas

* React Native (com Expo)
* JavaScript
* JSON Server
* LocalTunnel
* React Navigation

---

## ⚙️ Instalação

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd meuCrudApp
```

### 2. Instalar dependências do projeto

```bash
npm install
```

### 3. Instalar dependências de navegação (caso necessário)

```bash
npx expo install @react-navigation/native
npx expo install @react-navigation/native-stack
npx expo install react-native-screens
npx expo install react-native-safe-area-context
npx expo install react-native-gesture-handler
```

---

## ▶️ Execução

### 1. Iniciar o JSON Server

Acesse a pasta onde está o arquivo `db.json`:

```bash
cd backend
npx json-server --watch db.json --port 3000
```

---

### 2. Iniciar o LocalTunnel

```bash
npx localtunnel --port 3000
```

Copie a URL gerada (exemplo):

```
https://abc123.loca.lt
```

E configure no arquivo `configApi.js`:

```js
export const API_URL = "https://abc123.loca.lt";
```

---

### 3. Iniciar o aplicativo

Volte para a pasta principal:

```bash
cd ..
npx expo start
```

Abra o aplicativo no celular utilizando o Expo Go.

---

## 🧠 Explicação da Solução

A aplicação foi estruturada em duas partes principais:

### 📌 Frontend (React Native)

* Utiliza React Native com Expo
* Navegação entre telas feita com React Navigation
* Tela principal (`HomeScreen`) lista os dados usando FlatList
* Tela secundária (`AddEditScreen`) permite criar e editar registros

### 📌 Backend (JSON Server)

* Simula uma API REST utilizando um arquivo `db.json`
* Permite operações GET, POST, PUT e DELETE

### 🌐 Integração

* A comunicação entre app e API é feita via `fetch`
* Como o app roda no celular, foi utilizado o LocalTunnel para expor a API local

### ➕ Campo adicional (phone)

Foi adicionado o campo `phone` em:

* Estrutura do `db.json`
* Formulário de cadastro
* Exibição na lista
* Envio para a API

### ⚠️ Problemas enfrentados

Durante o desenvolvimento, foram encontrados alguns desafios:

* Incompatibilidade de versões do Expo
* Problemas com navegação
* Erros de conexão com API (localhost vs celular)
* Instabilidade do LocalTunnel
* Erros de parsing de JSON

Todos foram resolvidos ajustando:

* Dependências
* URLs da API
* Estrutura do código

---

## ✅ Conclusão

O projeto atende todos os requisitos propostos, implementando corretamente um CRUD completo com integração entre frontend mobile e API simulada.
Link para acesso do vídeo no youtube: https://youtube.com/shorts/tNZGIXygd_M?feature=share

