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
    USERNAME varchar(30) PRIMARY KEY,
    PASSWORD varchar(30),
    NOME varchar(100),
    EMAIL varchar(100)
    )`).then(result => {
    console.log('Tabela User Criada com Sucesso');
    //resposta({ resposta: 'TABELA CRIADA' });
}).catch(erro => {
    console.log('Tabela Com Erro');
    //resposta({ resposta: erro });
});

database(`CREATE TABLE IF NOT EXISTS CLIENTE (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    USER_USERNAME varchar(30),
    ID_ENIGMAORIGINAL INTEGER,
    FOREIGN KEY(USER_USERNAME)
    REFERENCES USER(USERNAME)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY(ID_ENIGMAORIGINAL)
    REFERENCES ID(ENIGMAORIGINAL)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    )`).then(result => {
    console.log('Tabela Cliente Criada com Sucesso');
    //resposta({ resposta: 'TABELA CRIADA' });
}).catch(erro => {
    console.log('Tabela Com Erro');
    //resposta({ resposta: erro });
});

database(`CREATE TABLE IF NOT EXISTS ENIGMAORIGINAL (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    HEAD varchar(100),
    IMG varchar(300),
    DICA varchar(100),
    FASE varchar(45),
    REALIZADA BOOLEAN
    )`).then(result => {
    console.log('Tabela ENIGMA01 Criada com Sucesso');
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
// FOREIGN KEY(USUARIO_NICKNAME)
// REFERENCES USUARIO(NICKNAME)
// ON DELETE CASCADE
// ON UPDATE CASCADE
//     )`).then(result => {
//     console.log('Tabela Cliente Criada com Sucesso');
//     //resposta({ resposta: 'TABELA CRIADA' });
// }).catch(erro => {
//     console.log('Tabela Com Erro');
//     //resposta({ resposta: erro });
// });