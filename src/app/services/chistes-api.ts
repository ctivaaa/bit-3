import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChistesApi {

  constructor() { }
  httpClient = inject(HttpClient);

  getJokes(){
    return this.httpClient.get("https://official-joke-api.appspot.com/random_joke")
  }
}
