import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class Enigma1Service {

  constructor() { }

  VerificarFase(fase, id) {
    return new Promise((resolve, reject) => {
      fetch('/api/fase01', {
        method: 'POST',
        body: JSON.stringify(
          {
            fase: fase, id: id

          }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  buscarFase(id) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/buscar_faseado', {
        method: 'POST',
        body: JSON.stringify(
          {
            id: id

          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  MontarFase(head, imagem, dica, fase, id) {
    return new Promise((resolve, reject) => {
      fetch('/api/criar_fase1', {
        method: 'POST',
        body: JSON.stringify(
          {
            head: head, imagem: imagem, dica: dica,
            fase: fase, id: id

          }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  RemoverFase(fase, id) {
    return new Promise((resolve, reject) => {
      fetch('/api/removerfase01', {
        method: 'POST',
        body: JSON.stringify(
          {
            fase: fase, id: id

          }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  UpdateFase(id) {
    return new Promise((resolve, reject) => {
      fetch('/api/updatefase01', {
        method: 'POST',
        body: JSON.stringify(
          {
            id: id

          }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  VerificarFaseUP(fase) {
    return new Promise((resolve, reject) => {
      fetch('/api/buscar_faseUP', {
        method: 'POST',
        body: JSON.stringify(
          {
            fase: fase

          }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  BuscarFases() {
    return new Promise((resolve, reject) => {
      fetch('/api/buscar_fase1', {
        method: 'POST',
        body: JSON.stringify(
          { }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  VerificarFase2(fase, id) {
    return new Promise((resolve, reject) => {
      fetch('/api/fase02', {
        method: 'POST',
        body: JSON.stringify(
          {
            fase: fase, id: id

          }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  buscarFase2(id) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/buscar_faseado2', {
        method: 'POST',
        body: JSON.stringify(
          {
            id: id

          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  MontarFase2(head, imagem, dica, fase, id) {
    return new Promise((resolve, reject) => {
      fetch('/api/criar_fase2', {
        method: 'POST',
        body: JSON.stringify(
          {
            head: head, imagem: imagem, dica: dica,
            fase: fase, id: id

          }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  RemoverFase2(fase, id) {
    return new Promise((resolve, reject) => {
      fetch('/api/removerfase02', {
        method: 'POST',
        body: JSON.stringify(
          {
            fase: fase, id: id

          }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  UpdateFase2(id) {
    return new Promise((resolve, reject) => {
      fetch('/api/updatefase02', {
        method: 'POST',
        body: JSON.stringify(
          {
            id: id

          }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  VerificarFaseUP2(fase) {
    return new Promise((resolve, reject) => {
      fetch('/api/buscar_faseUP2', {
        method: 'POST',
        body: JSON.stringify(
          {
            fase: fase

          }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  BuscarFases2() {
    return new Promise((resolve, reject) => {
      fetch('/api/buscar_fase2', {
        method: 'POST',
        body: JSON.stringify(
          { }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  VerificarFase3(fase, id) {
    return new Promise((resolve, reject) => {
      fetch('/api/fase02', {
        method: 'POST',
        body: JSON.stringify(
          {
            fase: fase, id: id

          }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  buscarFase3(id) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/buscar_faseado2', {
        method: 'POST',
        body: JSON.stringify(
          {
            id: id

          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  MontarFase3(head, imagem, dica, fase, id) {
    return new Promise((resolve, reject) => {
      fetch('/api/criar_fase2', {
        method: 'POST',
        body: JSON.stringify(
          {
            head: head, imagem: imagem, dica: dica,
            fase: fase, id: id

          }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  RemoverFase3(fase, id) {
    return new Promise((resolve, reject) => {
      fetch('/api/removerfase02', {
        method: 'POST',
        body: JSON.stringify(
          {
            fase: fase, id: id

          }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  UpdateFase3(id) {
    return new Promise((resolve, reject) => {
      fetch('/api/updatefase02', {
        method: 'POST',
        body: JSON.stringify(
          {
            id: id

          }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  VerificarFaseUP3(fase) {
    return new Promise((resolve, reject) => {
      fetch('/api/buscar_faseUP2', {
        method: 'POST',
        body: JSON.stringify(
          {
            fase: fase

          }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }

  BuscarFases3() {
    return new Promise((resolve, reject) => {
      fetch('/api/buscar_fase2', {
        method: 'POST',
        body: JSON.stringify(
          { }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        return result.json();
      }).then(resolve).catch(reject);

    });

  }



}


