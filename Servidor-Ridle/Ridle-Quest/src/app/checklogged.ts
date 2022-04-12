import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
// import { UsuarioService } from "./services/usuario.service";

@Injectable()
class CheckLogged implements CanActivate {
    constructor(
        // private usuarioService: UsuarioService,
        private router: Router

    ) { }



    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,

    ): boolean | Observable<boolean> | Promise<boolean> {
        console.log('Dentro')

       
        let username = localStorage.getItem('USER');
        let password = localStorage.getItem('PASSWORD');
        if (username != undefined && password != undefined) {
            console.log("entrou no if", username, password)
            return true;
        } else {
            alert("É necessário um login válido!")
            this.router.navigate([""]);
            return false;
        }


        // let contador = 0;
        // this.usuarioService.login(localStorage.getItem('USER'), localStorage.getItem('PASSWORD'))
        //     .then((resultado: any) => {

        //         console.log(resultado)
        //         if (resultado.user) {
        //             console.log('Não ta pulando bicho');
        //             // this.router.navigate(['/principal']);
        //             contador++;
        //             return true;
        //         } else {
        //             alert('Usuário não cadastrado!');
        //             console.log('Ta pulando bicho');
        //             this.router.navigate([''])
        //             return false;

        //         }

        //     }).catch(erro => {
        //         console.log('Erro ao buscar usuarios', erro)
        //     })

        // if (contador > 0) {
        //     return true;
        // } else {
        //     this.router.navigate([''])
        //     return false
        // }



    }

}
export default CheckLogged;

//     import { Injectable } from "@angular/core";
// import {
//     ActivatedRouteSnapshot,
//     CanActivate,
//     Router,
//     RouterStateSnapshot
// } from "@angular/router";
// import { Observable } from "rxjs";

// @Injectable()
// class CheckLogged implements CanActivate {
//     constructor(
//         private router: Router
//     ) { }

//     canActivate(
//         route: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot,
//     ): Observable<boolean> | Promise<boolean> | boolean {
//         let email = localStorage.getItem('EMAIL')
//         let senha = localStorage.getItem('SENHA')
//             if (email != undefined && senha != undefined) {
//                 console.log("entrou no if", email, senha)
//                 return true;
//             } else {
//                 alert("É necessário um login válido!")
//                 this.router.navigate([""]);
//                 return false;
//             }
//         }
//     }

// export default CheckLogged;