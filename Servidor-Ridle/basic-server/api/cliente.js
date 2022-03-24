inserirRota('/criar_cliente',
    function(dados, resposta) {
        console.log(dados);

        if (!dados.user) {
            return resposta({ erro: 'É necessario arrumar user_username' })
        }
        if (!dados.enigmaOriginal) {
            return resposta({ erro: 'É necessario arrumar enigma01' })
        }
        if (!dados.enigmaOlimpiano) {
            return resposta({ erro: 'É necessario arrumar enigma02' })
        }
        if (!dados.enigmaCerimonial) {
            return resposta({ erro: 'É necessario arrumar enigma03' })
        }


        database(`INSERT INTO CLIENTE(
            USER, ENIGMAORIGINAL, ENIGMAOLIMPIANO, ENIGMACERIMONIAL
            )VALUES 
    ("${dados.user}","${dados.enigmaOriginal}","${dados.enigmaOlimpiano}","${dados.enigmaCerimonial}")`)
            .then(result => {
                console.log('Cliente Inserida com Sucesso!');
                resposta({ message: 'Cliente Inserida com Sucesso!' });
            }).catch(erro => {
                console.log('Erro ao inserir a Cliente!');
                resposta({ erro: erro });
            });
    });


inserirRota('/buscar_cliente',
    function(dados, resposta) {
        console.log(dados);
        database('SELECT * FROM CLIENTE').then(result => {
            resposta({ list: result });
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar as fases!" });
        });
    });

inserirRota('/verificar_cliente1',
    function(dados, resposta) {
        console.log(dados);
        database(`UPDATE CLIENTE SET ENIGMAORIGINAL = "${dados.troca}" WHERE ID = "${dados.id}" LIMIT 1`).then(result => {
            resposta({ clientizinho: result[0] });
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar as fases!" });
        });
    });