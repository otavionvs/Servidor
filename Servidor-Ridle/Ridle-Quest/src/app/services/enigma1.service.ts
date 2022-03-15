import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class Enigma1Service {

  constructor() { }

  VerificarFase(fase, id){
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

      buscarFase(){
        return new Promise((resolvido, rejeitado) => {
          fetch('/api/buscar_fase', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(resultado => resultado.json())
          .then(resolvido)
          .catch(rejeitado);
        })
      }

}


