import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './components/shared/navigation/navigation';
import { Footer } from './components/shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navigation,RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'bit-3';
}
