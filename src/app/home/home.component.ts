import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Vũ Nguyễn';
  public age=15;
  constructor() { }

  ngOnInit(): void {
  }

  public resetName(): void{
    console.log('resetName');
    this.name="";
  }

}
