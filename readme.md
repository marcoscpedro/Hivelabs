# Hivelabs Teste

Para rodar a aplicação em sua máquina é necessário ter o nodejs, mariadb e depois rodar o comando a seguir para instalar as dependencias
```
$ npm install
```

Será necessario criar um arquivo .env com as variáves
```
DB_HOST= 
DB_USER= 
DB_PASSWORD=
DB_DATABASE=
```

- Todas as rotas precedem de /hivelabs
### User
-----------------
POST /user

cria um novo user

JSON:
    

    {
    "name":"teste",
    "lastname":"lastname",
    "nickname":"ased",
    "address":"adress",
    "bio":"bio"
    }

--------------------
GET /user/:id

Lê o registro do usuário pelo id

------------------------

PUT /user/:id

Altera apenas os campos lastname e address do user pelo id

JSON:

    {
    "lastname": "pereira",
    "address": "adress teste"
    }

-------------------

DELETE /user/:id

Deleta um usuário pelo id

------------------------

PUT /user/nickName/:id

Altera apenas o nickname do user pelo id

JSON:

    {
        "nickname":"nickname teste"
    }
-------------
GET /user?name="getParam1"&lastname="getParam2"

Buscar por users atraves dos parametros de busca na URL