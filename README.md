# 🐳 Projetos de Especialização em Docker

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)](https://golang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)
[![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com/)

> 🎯 **Projetos avançados de containerização Docker demonstrando arquitetura de microsserviços, builds multi-estágio e orquestração para produção**

Este repositório demonstra domínio avançado em **Docker** através de projetos práticos que simulam cenários reais de desenvolvimento e produção. Cada projeto foi desenvolvido com foco em **otimização**, **segurança** e **boas práticas** de containerização.

---

## 🚀 Projetos Destacados

### 🏆 Desafio 1: Container Go Ultra-Leve
**Objetivo:** Criar uma imagem Docker otimizada pesando menos de 2MB

```bash
docker run hawerroth/fullcycle
```

**🔧 Técnicas Implementadas:**
- **Builds multi-estágio** para otimização extrema
- **Imagem base scratch** para tamanho mínimo
- **Vinculação estática** em Go para executável independente
- **Publicação no Docker Hub** com builds automatizados

**📊 Resultado:** Imagem final de ~1.2MB (redução de 99.9% comparada a imagens convencionais)

### 🌐 Desafio 2: Arquitetura Full-Stack de Microsserviços
**Objetivo:** Orquestração completa com Nginx, Node.js e MySQL

```bash
cd desafio-2
docker-compose up -d
# Acesse: http://localhost:8080
```

**🏗️ Arquitetura Implementada:**
- **Nginx** como proxy reverso e balanceador de carga
- **API Node.js** com Express.js
- **Banco MySQL** com volumes persistentes
- **Docker Compose** para orquestração multi-container
- **Isolamento de rede** e descoberta de serviços
- **Verificações de saúde** e políticas de reinicialização

---

## 🛠️ Stack Tecnológica

<table>
<tr>
<td align="center"><strong>Containerização</strong></td>
<td align="center"><strong>Backend</strong></td>
<td align="center"><strong>Frontend</strong></td>
<td align="center"><strong>Banco de Dados</strong></td>
</tr>
<tr>
<td align="center">
  Docker<br>
  Docker Compose<br>
  Builds multi-estágio<br>
  Orquestração de containers
</td>
<td align="center">
  Node.js + Express<br>
  Go (Golang)<br>
  Laravel + PHP<br>
  APIs RESTful
</td>
<td align="center">
  Nginx<br>
  HTML5<br>
  Proxy Reverso<br>
  Balanceamento de Carga
</td>
<td align="center">
  MySQL<br>
  Volumes Persistentes<br>
  Migrações de Banco<br>
  Pool de Conexões
</td>
</tr>
</table>

---

## 📋 Competências Demonstradas

### 🐳 **Especialização em Docker**
- ✅ **Builds multi-estágio** para otimização de imagens
- ✅ **Orquestração de containers** com Docker Compose
- ✅ **Configuração de redes** e descoberta de serviços
- ✅ **Gerenciamento de volumes** e persistência de dados
- ✅ **Melhores práticas de segurança** (usuários non-root, imagens base mínimas)
- ✅ **Deployments para produção**

### ⚡ **DevOps e Infraestrutura**
- ✅ **Design de arquitetura de microsserviços**
- ✅ **Configuração de proxy reverso**
- ✅ **Estratégias de balanceamento de carga**
- ✅ **Gerenciamento de ambientes** (dev/staging/prod)
- ✅ **Monitoramento de saúde** e desligamentos graciosos

### 💻 **Desenvolvimento Full-Stack**
- ✅ **APIs Backend** (Node.js, Go, Laravel)
- ✅ **Design de banco de dados** e otimização
- ✅ **Integração frontend** e design responsivo
- ✅ **Compatibilidade multi-plataforma**

---

## 🚀 Início Rápido

### Pré-requisitos
```bash
# Verificar instalações
docker --version
docker-compose --version
```

### Executar Projetos

#### Desafio 1 - Aplicação Go Ultra-Leve
```bash
# Executar imagem do Docker Hub
docker run hawerroth/fullcycle

# Ou fazer build local
cd desafio-1
docker build -t fullcycle-go .
docker run fullcycle-go
```

#### Desafio 2 - Aplicação Full-Stack
```bash
cd desafio-2
docker-compose up -d

# Verificar status
docker-compose ps

# Visualizar logs
docker-compose logs -f

# Parar serviços
docker-compose down
```

#### Ambiente Laravel
```bash
docker-compose -f docker-compose.laravel.yaml up -d
```

---

## 📊 Métricas de Performance

| Projeto | Imagem Base | Tamanho Final | Tempo de Build | Tempo de Inicialização |
|---------|-------------|---------------|----------------|----------------------|
| Aplicação Go | `scratch` | ~1.2MB | ~10s | ~50ms |
| API Node.js | `alpine` | ~85MB | ~45s | ~2s |
| Proxy Nginx | `alpine` | ~23MB | ~30s | ~1s |
| Aplicação Laravel | `php:fpm-alpine` | ~180MB | ~90s | ~5s |

---

## 📚 Recursos Adicionais

- 🐳 **Docker Hub:** [hawerroth](https://hub.docker.com/r/hawerroth)
- 📚 **Curso Full Cycle:** [Curso Docker](https://fullcycle.com.br)

## 🤝 Contribuições

Este é um projeto educacional, mas sugestões e melhorias são sempre bem-vindas!

## 📄 Licença

Este projeto é parte do curso Full Cycle e é usado para fins educacionais.

---

<div align="center">

**⭐ Se este repositório foi útil, considere deixar uma estrela!**

*Desenvolvido com ❤️ e muitos containers 🐳*

</div>
