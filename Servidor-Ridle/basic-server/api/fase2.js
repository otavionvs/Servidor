inserirRota('/criar_fase2',
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



        database(`INSERT INTO ENIGMAOLIMPIANO(
            HEAD, IMG, DICA, FASE, ID
            )VALUES 
    ("${dados.head}","${dados.imagem}","${dados.dica}","${dados.fase}", "${dados.id}")`)
            .then(result => {
                console.log('Fase Inserida com Sucesso!');
                resposta({ message: 'Fase Inserida com Sucesso!' });
            }).catch(erro => {
                console.log('Erro ao inserir a Fase!');
                resposta({ erro: 'Erro ao inserir a Fase!' });
            });
    })

inserirRota('/buscar_fase2',
    function(dados, resposta) {
        console.log(dados);
        database('SELECT * FROM ENIGMAOLIMPIANO').then(result => {
            resposta({ list: result });
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar as fases!" });
        });
    });


inserirRota('/buscar_faseado2',
    function(dados, resposta) {
        console.log(dados);
        database(`SELECT * FROM ENIGMAOLIMPIANO WHERE ID = "${dados.id}" LIMIT 1`).then(result => {
            resposta({ fases: result[0] });
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar as fases!" });
        });
    });

inserirRota('/fase02',
    function(dados, resposta) {
        console.log(dados);
        database(`SELECT * FROM ENIGMAOLIMPIANO WHERE FASE = "${dados.fase}" AND ID = "${dados.id}" LIMIT 1`)
            .then(result => {
                console.log('result:', result);
                resposta({ fases: result[0] });
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar os usuários' });
            });
    });

inserirRota('/removerfase02',
    function(dados, resposta) {
        console.log(dados);
        database(`DELETE FROM ENIGMAOLIMPIANO WHERE FASE = "${dados.fase}" OR ID = "${dados.id}"`)
            .then(result => {
                console.log('result:', result);
                resposta({ fases: result[0] });
            }).catch(erro => {
                resposta({ erro: 'Erro ao Remover os usuários' });
            });
    });

inserirRota('/updatefase02',
    function(dados, resposta) {
        console.log(dados);
        database(`UPDATE ENIGMAOLIMPIANO SET ID = "${Number(dados.id) - 1}" WHERE ID = "${dados.id}"`)
            .then(result => {
                console.log('result:', result);
                resposta({ fases: result[0] });
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar os usuários' });
            });
    });


inserirRota('/buscar_faseUP2',
    function(dados, resposta) {
        console.log(dados);
        database(`SELECT * FROM ENIGMAOLIMPIANO WHERE FASE = "${dados.fase}" LIMIT 1`).then(result => {
            resposta({ fases: result[0] });
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar as fases!" });
        });
    });