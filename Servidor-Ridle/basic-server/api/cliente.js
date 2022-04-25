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
        database(`UPDATE CLIENTE SET ENIGMAORIGINAL = "${dados.troca}" WHERE USER = "${dados.user}"`)
            .then(result => {
                console.log('Update Cliente En01 Inserida com Sucesso!');
                resposta({ message: 'Update Cliente En01 Inserida com Sucesso!' });
            }).catch(erro => {
                console.log('Erro ao inserir o Update Cliente En01!');
                resposta({ erro: erro });
            });
    });

inserirRota('/verificar_cliente2',
    function(dados, resposta) {
        console.log(dados);
        database(`UPDATE CLIENTE SET ENIGMAOLIMPIANO = "${dados.troca}" WHERE USER = "${dados.user}"`)
            .then(result => {
                console.log('Update Cliente En01 Inserida com Sucesso!');
                resposta({ message: 'Update Cliente En02 Inserida com Sucesso!' });
            }).catch(erro => {
                console.log('Erro ao inserir o Update Cliente En01!');
                resposta({ erro: erro });
            });
    });


inserirRota('/verificar_cliente3',
    function(dados, resposta) {
        console.log(dados);
        database(`UPDATE CLIENTE SET ENIGMACERIMONIAL = "${dados.troca}" WHERE USER = "${dados.user}"`)
            .then(result => {
                console.log('Update Cliente En01 Inserida com Sucesso!');
                resposta({ message: 'Update Cliente En03 Inserida com Sucesso!' });
            }).catch(erro => {
                console.log('Erro ao inserir o Update Cliente En01!');
                resposta({ erro: erro });
            });
    });


inserirRota('/buscando_cliente',
    function(dados, resposta) {
        console.log(dados);
        database(`SELECT * FROM CLIENTE WHERE USER = "${dados.user}" LIMIT 1`)
            .then(result => {
                console.log('result:', result);
                resposta({ cliente: result[0] });
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar os usuários' });
            });
    });