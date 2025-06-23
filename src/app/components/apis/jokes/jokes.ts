import { Component, inject } from '@angular/core';
import { ChistesApi } from '../../../services/chistes-api';
import { ChisteApi } from '../../../interfaces/chiste-api';

@Component({
  selector: 'app-jokes',
  imports: [],
  templateUrl: './jokes.html',
  styleUrl: './jokes.css'
})
export class Jokes {

serviceApi = inject(ChistesApi);

info: ChisteApi | null = null

handleClick(){
  this.serviceApi.getJokes().subscribe((res: any)=> {

this.info = res;

  }  )
}

}
