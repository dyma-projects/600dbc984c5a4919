import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component implements OnInit {
  @Input() first!: string;
  name: string = 'Geoffrey';

  sayCoucou(): void {
    alert('coucou');
  }

  constructor() {}

  ngOnInit(): void {}
}
