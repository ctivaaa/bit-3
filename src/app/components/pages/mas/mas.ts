import { Component } from '@angular/core';
import { Serie } from '../../apis/serie/serie';
import { JitEvaluator } from '@angular/compiler';
import { Jokes } from '../../apis/jokes/jokes';

@Component({
  selector: 'app-mas',
  imports: [Serie],
  templateUrl: './mas.html',
  styleUrl: './mas.css'
})
export class Mas {

}
