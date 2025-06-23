import { Component } from '@angular/core';
import { Home } from '../home/home';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-error404',
  imports: [Home, RouterLink],
  templateUrl: './error404.html',
  styleUrl: './error404.css'
})
export class Error404 {

}
