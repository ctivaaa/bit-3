import { Component, inject, OnInit } from '@angular/core';
import { RickAndMortyApi } from '../../../services/rick-and-morty-api';
import { RickOrMortyApi } from '../../../interfaces/rick-or-morty-api';

@Component({
  selector: 'app-serie',
  imports: [],
  templateUrl: './serie.html',
  styleUrl: './serie.css'
})
export class Serie implements OnInit {

personaje = inject(RickAndMortyApi);
arreglo1: any=[]
arreglo2: any=[]
info!: any;
condicional: boolean = false
condicional2: boolean = true

ngOnInit(): void {
    this.personaje.getCharacter().subscribe((res: any) => {
      this.info = res.results;
    
      this.grupos();
     console.log("ACA", this.arreglo1)
     console.log("ARREGLO 2", this.arreglo2)
    });
  }
  
grupos(){
 let i: number = 0

  while (i < 10) {
  
 this.arreglo1.push(this.info[i])
 
    i++
  }

 while (i > 9 && i < 20) {
  
 this.arreglo2.push(this.info[i])
 
    i++
  }

  
}

showMore() {
this.condicional = true
this.condicional2 = false
}
show1() {
this.condicional = false
this.condicional2 = true
}

selectedCharacter: any = false;

handleCardEnter(id: number) {


  this.selectedCharacter = id;

}

handleCardLeave(){
this.selectedCharacter = false;
}

}  
