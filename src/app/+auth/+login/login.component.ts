import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  private loginData: any;
  switch_expression: number = 8;

  constructor() { }

  ngOnInit() {

    setInterval(() => {
      this.switch_expression = this.getRandomInt(1, 10);
    }, 2000);

  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}
