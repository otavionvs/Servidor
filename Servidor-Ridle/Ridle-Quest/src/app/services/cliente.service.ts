import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  AtualizarEnigmaOlimpo(troca, user){
    return new Promise((resolve, reject) => {
      fetch('/api/verificar_cliente1', {
        method: 'POST',
        body: JSON.stringify(
            {
              troca: troca, user: user
              
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

      buscandoCliente(user){
        return new Promise((resolvido, rejeitado) => {
          fetch('/api/buscando_cliente', {
            method: 'POST',
            body: JSON.stringify(
              {
                 user: user
                
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

      cadastro(user){
        return new Promise((resolve, reject) => {
          fetch('/api/criar_cliente', {
            method: 'POST',
            body: JSON.stringify(
                {
                  user: user, enigmaOriginal: 1, enigmaOlimpiano: 1, enigmaCerimonial: 1
                  
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

}
