import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Service/common.service';

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
  public districts: string[] = ['Quận/Huyện'];
  // https://cdn.jsdelivr.net/gh/vietblogdao/js/districts.min.js
  public vietNamData = [
    { city: 'Chọn thành phố', district: ['Quận/Huyện'] },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
  ];
  constructor(private common: CommonService) {}
  public counter = 0;
  public counterBinhPhuong = 0;
  ngOnInit(): void {
    console.log('vietNamData=', this.vietNamData);
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhphuong(this.counter);
    this.common.counter++;
  }
  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }
  public changeCity(event: any) {
    const city = event.target.value;
    console.log('event', city);
    //cách 1
    // const search = this.vietNamData.filter((data) => data.city === city);
    // console.log('search', search);
    // if (search.length > 0) {
    //   this.districts = search[0].district;
    // }
    // console.log('districts', this.districts);
    //cách 2
    this.districts =
      this.vietNamData.find((data) => data.city === city)?.district || [];
    console.log('districts', this.districts);
  }
}
