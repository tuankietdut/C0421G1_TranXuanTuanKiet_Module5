import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-pet',
  templateUrl: './info-pet.component.html',
  styleUrls: ['./info-pet.component.css']
})
export class InfoPetComponent implements OnInit {
  imageUrl = "https://th.bing.com/th/id/OIP.ZyDM5u_P2NBK3tc0-zoQqgHaK8?pid=ImgDet&rs=1";
  name = "Chihuahua";
  changeImage(value){
    this.imageUrl = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
