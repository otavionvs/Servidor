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

      buscarFase(id){
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

      // MontarFase(head, imagem, dica, fase, id){
      //   return new Promise((resolve, reject) => {
      //     fetch('/api/buscar_fase', {
      //       method: 'POST',
      //       body: JSON.stringify(
      //           {
      //             head:head, imagem: imagem, dica: dica,
      //             fase: fase, id: id
                  
      //           }
      //       ),
      //       headers: {
      //           "Content-Type": "application/json"
      //       }
      //   }).then(function (result) {
      //       return result.json();
      //   }).then(resolve).catch(reject);
        
      //   });
      
      //     }

}


