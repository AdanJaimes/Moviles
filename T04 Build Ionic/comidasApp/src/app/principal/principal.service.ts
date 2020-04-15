import { Injectable } from '@angular/core';
import { Principal } from './principal.model';
@Injectable({
  providedIn: 'root'
})
export class PrincipalService {


  private principals:Principal[]=[
    {
    id:'c1',
    titulo:'devil',
    imageUrl:'./assets/devil.jpg',
    ingredientes:['action','aventura','hack']
    },
    {
      id:'c2',
      titulo:'prototype',
      imageUrl:'./assets/prototype.png',
      ingredientes:['hack and slash','aventura','action']
    },
    {
      id:'c3',
      titulo:'mario',
      imageUrl:'./assets/mario.png',
      ingredientes:['aventura','accion',]
    },
    {
      id:'c4',
      titulo:'kong',
      imageUrl:'./assets/kong.png',
      ingredientes:['action','aventura','estrategia']
      },
      ];
  constructor() { }

  getComida(){
    return [...this.principals];
  }

  getComidaDetail(comidaId:string){
    return {...this.principals.find(comida=>{
      return comida.id===comidaId;
    })};
  }

  deleteComida(comidaId:string){
    this.principals=this.principals.filter(comida=>{
      return comida.id!==comidaId;
    })
  }
}