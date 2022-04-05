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
    USERNAME varchar(30),
    PASSWORD varchar(30),
    NOME varchar(100),
    EMAIL varchar(100),
    ADM INTEGER
    )`).then(result => {
    console.log('Tabela User Criada com Sucesso');
    //resposta({ resposta: 'TABELA CRIADA' });
}).catch(erro => {
    console.log('Tabela Com Erro');
    //resposta({ resposta: erro });
});

database(`CREATE TABLE IF NOT EXISTS CLIENTE (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    USER varchar(30),
    ENIGMAORIGINAL INTEGER,
    ENIGMAOLIMPIANO INTEGER,
    ENIGMACERIMONIAL INTEGER,
    FOREIGN KEY(USER)
    REFERENCES USER(USERNAME)
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
    FASE varchar(45)
    )`).then(result => {
    console.log('Tabela ENIGMA01 Criada com Sucesso');
    //resposta({ resposta: 'TABELA CRIADA' });
}).catch(erro => {
    console.log('Tabela Com Erro');
    //resposta({ resposta: erro });
});

database(`CREATE TABLE IF NOT EXISTS ENIGMAOLIMPIANO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    HEAD varchar(100),
    IMG varchar(300),
    DICA varchar(100),
    FASE varchar(45)
    )`).then(result => {
    console.log('Tabela ENIGMA02 Criada com Sucesso');
    //resposta({ resposta: 'TABELA CRIADA' });
}).catch(erro => {
    console.log('Tabela Com Erro');
    //resposta({ resposta: erro });
});

database(`CREATE TABLE IF NOT EXISTS ENIGMACERIMONIAL (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    HEAD varchar(100),
    IMG varchar(300),
    DICA varchar(100),
    FASE varchar(45)
    )`).then(result => {
    console.log('Tabela ENIGMA03 Criada com Sucesso');
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