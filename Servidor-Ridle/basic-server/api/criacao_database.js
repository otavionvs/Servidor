// database(`CREATE TABLE IF NOT EXISTS TESTE (
//     ID INTEGER PRIMARY KEY AUTOINCREMENT,
//     NOME varchar(30),
//     NUMERO int
//     )`).then(result => {
//     console.log('Tabela Criada com Sucesso');
//     //resposta({ resposta: 'TABELA CRIADA' });
// }).catch(erro => {
//     console.log('Tabela Com Erro');
//     //resposta({ resposta: erro });
// });

database(`CREATE TABLE IF NOT EXISTS USER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(100),
    EMAIL varchar(100),
    NICKNAME varchar(30),
    PASSWORD varchar(30)
    )`).then(result => {
    console.log('Tabela Criada com Sucesso');
    //resposta({ resposta: 'TABELA CRIADA' });
}).catch(erro => {
    console.log('Tabela Com Erro');
    //resposta({ resposta: erro });
});

// database(`CREATE TABLE IF NOT EXISTS CLIENTE (
//     ID INTEGER PRIMARY KEY AUTOINCREMENT,
//     NOME varchar(100),
//     EMAIL varchar(100),
//     USUARIO_NICKNAME varchar(30),
//     FOREIGN KEY(USUARIO_NICKNAME)
//     REFERENCES USUARIO(NICKNAME)
//     ON DELETE CASCADE
//     ON UPDATE CASCADE
//     )`).then(result => {
//     console.log('Tabela Cliente Criada com Sucesso');
//     //resposta({ resposta: 'TABELA CRIADA' });
// }).catch(erro => {
//     console.log('Tabela Com Erro');
//     //resposta({ resposta: erro });
// });