import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RickAndMortyApi {

  constructor() { }
  httpClient = inject(HttpClient);

  getCharacter(){
    return this.httpClient.get("https://rickandmortyapi.com/api/character")
  }
}
