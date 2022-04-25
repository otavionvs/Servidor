import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enigma1Service } from 'src/app/services/enigma1.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  constructor(
    private router: Router,
    private enigma1Service: Enigma1Service
  ) { }

  contador = 1;
  contador2 = 1;
  contador3 = 1;
  fase = "";
  head = "";
  imagem = "";
  dica = "";
  id = "";
  id2;
  fase1 = "";
  qttd;

  ngOnInit() {
  }

  voltar() {
    this.router.navigate(['principal'])
  }

  home() {
    this.router.navigate(['principal']);
  }

  criar(contador) {
    if(contador == 1){
    this.enigma1Service.BuscarFases()
      .then((resultado: any) => {
        if (resultado.list.length == 0) {
          console.log("aaaa");
          this.id2 = 1;
          console.log("eeeee", this.id2);
        } else {
          console.log("bbbb");
          this.id2 = resultado.list[resultado.list.length - 1].ID + 1;
        }

        
          if (this.fase != "" && this.head != "" && this.imagem != "" && this.dica != "") {
            this.enigma1Service.BuscarFases()
              .then((resultado: any) => {
                for (let i = 0; i < resultado.list.length; i++) {
                  console.log(resultado.list[i].FASE)
                  if (resultado.list[i].FASE == this.fase) {
                    this.contador3 = 2;
                    alert("Fase já existente");
                  }
                }

                if (this.contador3 == 1) {
                  this.enigma1Service.MontarFase(this.head, this.imagem, this.dica, this.fase, Number(this.id2))
                    .then((resultado) => {
                      this.limpar();
                      alert("Fase criada com sucesso!")

                    }).catch(erro => {
                      console.log('Erro ao criar Fase 1', erro)
                    })
                }

              }).catch(erro => {
                console.log('Erro ao criar Fase 1', erro)
              })


          } else {
            alert("É necessario preencher todos os campos!")
          }


      }).catch(erro => {
        console.log('Erro ao criar Fase 1', erro)
      })
      }else if (contador == 2) {
        
        this.enigma1Service.BuscarFases2()
      .then((resultado: any) => {
        if (resultado.list.length == 0) {
          console.log("aaaa");
          this.id2 = 1;
          console.log("eeeee", this.id2);
        } else {
          console.log("bbbb");
          this.id2 = resultado.list[resultado.list.length - 1].ID + 1;
        }

        
          if (this.fase != "" && this.head != "" && this.imagem != "" && this.dica != "") {
            this.enigma1Service.BuscarFases2()
              .then((resultado: any) => {
                for (let i = 0; i < resultado.list.length; i++) {
                  console.log(resultado.list[i].FASE)
                  if (resultado.list[i].FASE == this.fase) {
                    this.contador3 = 2;
                    alert("Fase já existente");
                  }
                }

                if (this.contador3 == 1) {
                  this.enigma1Service.MontarFase2(this.head, this.imagem, this.dica, this.fase, Number(this.id2))
                    .then((resultado) => {
                      this.limpar();
                      alert("Fase criada com sucesso!")

                    }).catch(erro => {
                      console.log('Erro ao criar Fase 1', erro)
                    })
                }

              }).catch(erro => {
                console.log('Erro ao criar Fase 1', erro)
              })


          } else {
            alert("É necessario preencher todos os campos!")
          }


      }).catch(erro => {
        console.log('Erro ao criar Fase 1', erro)
      })
      } else if (contador == 3) {
        this.enigma1Service.BuscarFases3()
      .then((resultado: any) => {
        if (resultado.list.length == 0) {
          console.log("aaaa");
          this.id2 = 1;
          console.log("eeeee", this.id2);
        } else {
          console.log("bbbb");
          this.id2 = resultado.list[resultado.list.length - 1].ID + 1;
        }

        
          if (this.fase != "" && this.head != "" && this.imagem != "" && this.dica != "") {
            this.enigma1Service.BuscarFases3()
              .then((resultado: any) => {
                for (let i = 0; i < resultado.list.length; i++) {
                  console.log(resultado.list[i].FASE)
                  if (resultado.list[i].FASE == this.fase) {
                    this.contador3 = 2;
                    alert("Fase já existente");
                  }
                }

                if (this.contador3 == 1) {
                  this.enigma1Service.MontarFase3(this.head, this.imagem, this.dica, this.fase, Number(this.id2))
                    .then((resultado) => {
                      this.limpar();
                      alert("Fase criada com sucesso!")

                    }).catch(erro => {
                      console.log('Erro ao criar Fase 1', erro)
                    })
                }

              }).catch(erro => {
                console.log('Erro ao criar Fase 1', erro)
              })


          } else {
            alert("É necessario preencher todos os campos!")
          }


      }).catch(erro => {
        console.log('Erro ao criar Fase 1', erro)
      })
      }

  }



  limpar() {
    this.fase = "";
    this.head = "";
    this.imagem = "";
    this.dica = "";
    this.fase1 = "";
    this.id = "";
  }

  remover(contador) {
    if (contador == 1) {
      if (this.fase1 != "" || this.id != "") {
        if (this.id == "") {
          console.log("fase", this.fase1)
          this.enigma1Service.VerificarFaseUP(this.fase1)
            .then((resultado: any) => {
              this.id = resultado.fases.ID;
              alert("Fase criada com sucesso!")
            }).catch(erro => {
              console.log('Erro ao criar Fase 1', erro)
            })
        }
        this.enigma1Service.BuscarFases()
          .then((resultado: any) => {
            this.qttd = resultado.list.length;
          }).catch(erro => {
            console.log('Erro ao criar Fase 1', erro)
          })
        this.enigma1Service.RemoverFase(this.fase1, this.id)
          .then((resultado) => {
            this.limpar();
            for (let i = Number(this.id); i < this.qttd; i++) {
              this.enigma1Service.UpdateFase(Number(this.id) + 1)
                .then((resultado) => {
                }).catch(erro => {
                  console.log('Erro ao criar Fase 1', erro)
                })
              
            }
            console.log("1", resultado)
              alert("Fase removida com sucesso!")

          }).catch(erro => {
            console.log('Erro ao criar Fase 1', erro)
          })

      } else {
        alert("É necessario preencher todos os campos!")
      }
    } else if (contador == 2) {
      if (this.fase1 != "" || this.id != "") {
        if (this.id == "") {
          console.log("fase", this.fase1)
          this.enigma1Service.VerificarFaseUP2(this.fase1)
            .then((resultado: any) => {
              this.id = resultado.fases.ID;
              alert("Fase criada com sucesso!")
            }).catch(erro => {
              console.log('Erro ao criar Fase 1', erro)
            })
        }
        this.enigma1Service.BuscarFases2()
          .then((resultado: any) => {
            this.qttd = resultado.list.length;
          }).catch(erro => {
            console.log('Erro ao criar Fase 1', erro)
          })
        this.enigma1Service.RemoverFase2(this.fase1, this.id)
          .then((resultado) => {
            this.limpar();
            for (let i = Number(this.id); i < this.qttd; i++) {
              this.enigma1Service.UpdateFase2(Number(this.id) + 1)
                .then((resultado) => {
                }).catch(erro => {
                  console.log('Erro ao criar Fase 1', erro)
                })
              
            }
            console.log("1", resultado)
              alert("Fase removida com sucesso!")

          }).catch(erro => {
            console.log('Erro ao criar Fase 1', erro)
          })

      } else {
        alert("É necessario preencher todos os campos!")
      }
    } else if (contador == 3) {
      if (this.fase1 != "" || this.id != "") {
        if (this.id == "") {
          console.log("fase", this.fase1)
          this.enigma1Service.VerificarFaseUP3(this.fase1)
            .then((resultado: any) => {
              this.id = resultado.fases.ID;
              alert("Fase criada com sucesso!")
            }).catch(erro => {
              console.log('Erro ao criar Fase 1', erro)
            })
        }
        this.enigma1Service.BuscarFases3()
          .then((resultado: any) => {
            this.qttd = resultado.list.length;
          }).catch(erro => {
            console.log('Erro ao criar Fase 1', erro)
          })
        this.enigma1Service.RemoverFase3(this.fase1, this.id)
          .then((resultado) => {
            this.limpar();
            for (let i = Number(this.id); i < this.qttd; i++) {
              this.enigma1Service.UpdateFase3(Number(this.id) + 1)
                .then((resultado) => {
                }).catch(erro => {
                  console.log('Erro ao criar Fase 1', erro)
                })
              
            }
            console.log("1", resultado)
              alert("Fase removida com sucesso!")

          }).catch(erro => {
            console.log('Erro ao criar Fase 1', erro)
          })

      } else {
        alert("É necessario preencher todos os campos!")
      }
    }
  }


}
