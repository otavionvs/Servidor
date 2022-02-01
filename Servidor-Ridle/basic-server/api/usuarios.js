inserirRota('/buscar_usuario',
    function(dados, resposta) {
        console.log(dados);

        resposta({ ok: "Requisição efetuada com sucesso!" });
    });

inserirRota('/criar_usuario',
    function(dados, resposta) {
        console.log(dados);

        if (!dados.name) {
            return resposta({ erro: 'É necessario' })
        }
        if (!dados.name) {
            return resposta({ erro: 'É necessario' })
        }


        database(`INSERT INTO USER(
         NOME, NICKNAME
            )VALUES 
    ("${dados.nome}", "${daos.nickname}")`)
            .then(result => {
                console.log('Usuario Inserido com Sucesso!');
                resposta({ message: 'Usuario Inserido com Sucesso!' });
            }).catch(erro => {
                console.log('Erro ao inserir o Usuario!');
                resposta({ erro: 'Erro ao inserir o Usuario!' });
            });
    })

//fetch('http://localhost:3000/api/buscar_usuario',{method: 'POST'})

/*fetch('http://localhost:3000/api/buscar_usuario',
{
    method: 'POST', 
    body: JSON.stringify(
        {
            produtoid:1,pessoa: 1
        }
    ),
    headers: {
        'Content-Type': 'application/json'
    }
    }) */