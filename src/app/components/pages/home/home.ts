import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Jokes } from '../../apis/jokes/jokes';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Jokes],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
