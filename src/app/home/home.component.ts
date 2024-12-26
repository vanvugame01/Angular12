import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Vũ Nguyễn';
  public age=15;
  public traiCay=['Táo','Nho','Cam','Bưởi','Mãn cầu', 'Ổi'];
  constructor() { }

  ngOnInit(): void {
    console.log('Trái cây =', this.traiCay);
  }

  public resetName(): void{
    console.log('resetName');
    this.name="";
  }

}
