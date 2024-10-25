# Curso Docker - Full Cycle

### Desafio 2

Quando acessar localhost:8080, exiba um html com:

```
Full Cycle Rocks!
- Nome 1
- Nome 2
- ...
```

Regras:

- Utilizar o nginx como proxy reverso para uma aplicação node.js que irá adicionar alguns registros no banco de dados mysql e retornar a lista dos nomes inseridos
- Usar o docker-compose para apenas rodar o comando `docker-compose up -d` e tudo estar funcionando e disponível na porta `:8080`
