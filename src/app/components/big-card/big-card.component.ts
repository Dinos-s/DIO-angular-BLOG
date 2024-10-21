import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  photoCover:string = "";
  
  @Input()
  cardTitle:string = "Eu Robô 2";
  
  @Input()
  cardDescription:string = "Eu Robô, ganhará um segundo filme...";

}
