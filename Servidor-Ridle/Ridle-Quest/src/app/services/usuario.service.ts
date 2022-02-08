import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  // login(username, password){
  //   return new Promise((resolve, reject) => {
  //     fetch('/api/login', {
  //       method: 'POST',
  //       body: JSON.stringify(
  //           {
  //             username: username, password: password
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

  buscarUsuarios(){
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/buscar_usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }

  Login(Usuario, Senha){
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    })
  }
    
  }


