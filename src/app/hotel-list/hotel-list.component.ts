import { Component } from "@angular/core";

@Component({
  selector:'app-hotel-list',
  templateUrl:'./hotel-list.component.html'
})
export class HotelListComponent{
  public title='List hotels';

  public hotels:any[]=[
    {
      hotelId:1,
      hotelName:'Buea sweet life',
      description:'Belle vue sur la plage',
      price:220.5,
      imageUrl:'assets/img/h1.jpg'
    },
    {
      hotelId:2,
      hotelName:'Buea sweet',
      description:'Belle vue sur la plage',
      price:210.5,
      imageUrl:'assets/img/h2.jpeg'
    },
    {
      hotelId:3,
      hotelName:'Buea  life',
      description:'Belle vue sur la plage',
      price:200.5,
      imageUrl:'assets/img/h3.jpeg'
    },
    {
      hotelId:4,
      hotelName:' sweet life',
      description:'Belle vue sur la plage',
      price:90.5,
      imageUrl:'assets/img/h4.jpg'
    },
    {
      hotelId:5,
      hotelName:'Buea swe life',
      description:'Belle vue sur la plage',
      price:90.5,
      imageUrl:'assets/img/h5.jpg'
    },
    {
      hotelId:6,
      hotelName:'Bu sweet life',
      description:'Belle vue sur la plage',
      price:330.5,
      imageUrl:'assets/img/h6.jpeg'
    },
    {
      hotelId:7,
      hotelName:'Bea sweet li',
      description:'Belle vue sur la plage',
      price:450.5,
      imageUrl:'assets/img/h1.jpg'
    }
  ]

  public showBadge:boolean=false;
  public hotelFilter="mot";

  public toggleIsNewBadge():void{
    this.showBadge=!this.showBadge;
  }
}
