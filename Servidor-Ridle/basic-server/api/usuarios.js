inserirRota('/criar_usuario',
    function(dados, resposta) {
        console.log(dados);

        if (!dados.nome) {
            return resposta({ erro: 'É necessario arrumar nome' })
        }
        if (!dados.email) {
            return resposta({ erro: 'É necessario arrumar email' })
        }
        if (!dados.username) {
            return resposta({ erro: 'É necessario arrumar user' })
        }
        if (!dados.password) {
            return resposta({ erro: 'É necessario arrumar password' })
        }


        database(`INSERT INTO USER(
            NOME, EMAIL, USERNAME, PASSWORD
            )VALUES 
    ("${dados.nome}","${dados.email}","${dados.username}", "${dados.password}")`)
            .then(result => {
                console.log('Usuario Inserido com Sucesso!');
                resposta({ message: 'Usuario Inserido com Sucesso!' });
            }).catch(erro => {
                console.log('Erro ao inserir o Usuario!');
                resposta({ erro: 'Erro ao inserir o Usuario!' });
            });
    })

inserirRota('/buscar_usuario',
    function(dados, resposta) {
        console.log(dados);
        database('SELECT * FROM USER').then(result => {
            resposta({ list: result });
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar os usuários!" });
        });
    });

inserirRota('/login',
    function(dados, resposta) {
        console.log(dados);
        database(`SELECT * FROM USER WHERE USERNAME = "${dados.username}"  
        AND PASSWORD = "${dados.password}" LIMIT 1`)
            .then(result => {
                console.log('result:', result);
                resposta({ user: result[0] });
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar os usuários' });
            });
    });



// inserirRota('/criar_cliente',
//     function(dados, resposta) {
//         console.log(dados);

//         if (!dados.nome) {
//             return resposta({ erro: 'É necessario arrumar nome' })
//         }
//         if (!dados.email) {
//             return resposta({ erro: 'É necessario arrumar email' })
//         }
//         if (!dados.usuario_nickname) {
//             return resposta({ erro: 'É necessario arrumar nick de usu' })
//         }


//         database(`INSERT INTO CLIENTE(
//             NOME, EMAIL, USUARIO_NICKNAME
//             )VALUES 
//     ("${dados.nome}", "${dados.email}", "${dados.usuario_nickname}")`)
//             .then(result => {
//                 console.log('Cliente Inserido com Sucesso!');
//                 resposta({ message: 'Cliente Inserido com Sucesso!' });
//             }).catch(erro => {
//                 console.log('Erro ao inserir o Cliente!');
//                 resposta({ erro: 'Erro ao inserir o Cliente!' });
//             });
//     })

// inserirRota('/buscar_cliente',
//     function(dados, resposta) {
//         console.log(dados);
//         database('SELECT * FROM CLIENTE').then(result => {
//             resposta({ list: result });
//         }).catch(erro => {
//             resposta({ erro: "Erro ao buscar os usuários!" });
//         });
//     });



// fetch('/api/buscar_usuario', {
//     method: 'POST',
//     body: JSON.stringify(
//         {
//             nome: "Otavio", nickname: "Tavin"
//         }
//     ),
//     headers: {
//         "Content-Type": "application/json"
//     }
// }).then(function (result) {
//     return result.json();
// }).then(function (dados) {
//     console.log(dados);
// }).catch(function (erro) {
//     console.log(erro);
// });

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

//select, fetch(pegar lista), proxy


// inserirRota('/buscar_usuario',
//     function(dados, resposta) {
//         console.log(dados);

//         resposta({ ok: dados });
//     });