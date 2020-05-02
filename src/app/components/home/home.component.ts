import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imgPath: string;

  constructor() {
    this.imgPath = "https://i.pinimg.com/originals/2e/cd/81/2ecd819137c7d9891496e42de3a65348.png";
   }

  ngOnInit() {
  }

}
