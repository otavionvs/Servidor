import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  AtualizarEnigmaOlimpo(troca, id){
    return new Promise((resolve, reject) => {
      fetch('/api/verificar_cliente1', {
        method: 'POST',
        body: JSON.stringify(
            {
              troca: troca, id: id
              
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