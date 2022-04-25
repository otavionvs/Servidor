import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { ClienteService } from 'src/app/services/cliente.service';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login-v2';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {

  username = '';
  password = '';
  

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private socialAuthService: AuthService,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
   localStorage.removeItem('USER');
   localStorage.removeItem('PASSWORD');
   localStorage.removeItem('Visualizer');
   localStorage.removeItem('ADM');
  }
  
  logar(){
    this.usuarioService.login(this.username, this.password)
    .then((resultado:any) => {
      
      if (resultado.user) {
        if(resultado.user.ADM == 1){
          localStorage.setItem('ADM', this.username);
        }
        localStorage.setItem('USER', this.username);
        localStorage.setItem('PASSWORD', this.password)
        this.router.navigate(['/principal']);
        console.log('Deu 2222');
        
      } else {
        alert('Usuário não cadastrado!');
        console.log('Não Deu 2222');
      }

    }).catch(erro => {
      console.log('Erro ao buscar usuarios', erro)
    })
   
      
    
  }


  cadastrar(){
    this.router.navigate(['/cadastro']);
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.usuarioService.verificarGoogle(userData.name)
      .then((resultado) => {

        if(!resultado){
          this.usuarioService.cadastro(userData.name, userData.email, userData.name, userData.id)
      .then((resultado) => {
        localStorage.setItem('USER', userData.name);
        localStorage.setItem('PASSWORD', userData.id)
        this.router.navigate(['/principal']);
  
      }).catch(erro => {
        console.log('Erro ao buscar usuarios', erro)
      })


      this.clienteService.cadastro(userData.name)
      .then((resultado) => {
  
      }).catch(erro => {
        console.log('Erro ao buscar usuarios', erro)
      })
        }else{
        localStorage.setItem('USER', userData.name);
        localStorage.setItem('PASSWORD', userData.id)
        this.router.navigate(['/principal']);
        }

      }).catch(erro => {
        console.log('Erro ao buscar usuarios', erro)
      })
            
      }
    );
  }

  
  
}


  
  

//   logar() {
//     console.log(this.username, this.password);
//     const users = [
//       { login: 'otavio', password: '123' },
//       { login: 'a', password: 'a' },
//     ];

//     const find = users.find(e => e.login == this.username && e.password == this.password);

//     if (find) {
//       localStorage.setItem('USER', this.username);
//       this.router.navigate(['/principal']);
//     } else {
//       alert('Usuário não cadastrado!');
//     }
//   }
// }

//   fetch('/api/login', {
//     method: 'POST',
//     body: JSON.stringify(
//         {
//           username: "Otavio", password: "Tavin"
//         }
//     ),
//     headers: {
//         "Content-Type": "application/json"
//     }
// }).then(function (result) {
//     return result.json();
// }).then(function (dados) {

//   if(dados.user)
//     console.log(dados);
// }).catch(function (erro) {
//     console.log(erro);
// });
// logar(item){
//   // this.usuarioService.buscarUsuarios()
//   //   .then(resultado => {
//   //     if(resultado.nickname = this.username){
//   //       this.router.navigate(['/principal']);
//   //     }
//   //     console.log('RESULTADO', resultado);
//   //   }).catch(erro => {
//   //     console.log('Erro ao buscar usuarios', erro)
//   //   })

    
// //   fetch('/api/login', {
// //     method: 'POST',
// //     body: JSON.stringify(
// //         {
// //           username: this.username, password: this.password
// //         }
// //     ),
// //     headers: {
// //         "Content-Type": "application/json"
// //     }
// // }).then(function (result) {
// //     return result.json();
// // }).then(function (dados) {

// //   if(dados.user)
// //     console.log(dados, "Deu Certo");
// // }).catch(function (erro) {
// //     console.log(erro);
// // });

// console.log("Deu", item[0].NICKNAME)

// }



