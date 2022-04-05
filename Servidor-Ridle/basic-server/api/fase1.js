inserirRota('/criar_fase1',
    function(dados, resposta) {
        console.log(dados);

        if (!dados.head) {
            return resposta({ erro: 'É necessario arrumar head' })
        }
        if (!dados.imagem) {
            return resposta({ erro: 'É necessario arrumar imagem' })
        }
        if (!dados.dica) {
            return resposta({ erro: 'É necessario arrumar dica' })
        }
        if (!dados.fase) {
            return resposta({ erro: 'É necessario arrumar fase' })
        }



        database(`INSERT INTO ENIGMAORIGINAL(
            HEAD, IMG, DICA, FASE
            )VALUES 
    ("${dados.head}","${dados.imagem}","${dados.dica}","${dados.fase}")`)
            .then(result => {
                console.log('Fase Inserida com Sucesso!');
                resposta({ message: 'Fase Inserida com Sucesso!' });
            }).catch(erro => {
                console.log('Erro ao inserir a Fase!');
                resposta({ erro: 'Erro ao inserir a Fase!' });
            });
    })

inserirRota('/buscar_fase1',
    function(dados, resposta) {
        console.log(dados);
        database('SELECT * FROM ENIGMAORIGINAL').then(result => {
            resposta({ list: result });
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar as fases!" });
        });
    });


inserirRota('/buscar_faseado',
    function(dados, resposta) {
        console.log(dados);
        database(`SELECT * FROM ENIGMAORIGINAL WHERE ID = "${dados.id}" LIMIT 1`).then(result => {
            resposta({ fases: result[0] });
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar as fases!" });
        });
    });

inserirRota('/fase01',
    function(dados, resposta) {
        console.log(dados);
        database(`SELECT * FROM ENIGMAORIGINAL WHERE FASE = "${dados.fase}" AND ID = "${dados.id}" LIMIT 1`)
            .then(result => {
                console.log('result:', result);
                resposta({ fases: result[0] });
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar os usuários' });
            });
    });