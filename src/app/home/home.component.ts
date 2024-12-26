import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Vũ Nguyễn';
  public age = 15;
  public traiCay = ['Táo', 'Nho', 'Cam', 'Bưởi', 'Mãn cầu', 'Ổi'];
  public traiCay2 = [
    { ten: 'Táo', gia: 12, haGia: true },
    { ten: 'Nho', gia: -4.0045, haGia: false },
    { ten: 'Cam', gia: 14, haGia: false },
    { ten: 'Bưởi', gia: 20, haGia: true },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log('Trái cây =', this.traiCay2);
  }

  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }
}
