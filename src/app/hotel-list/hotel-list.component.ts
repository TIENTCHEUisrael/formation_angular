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
      imageUrl:'assets/img/hotel-room.jpg'
    },
    {
      hotelId:2,
      hotelName:'Buea sweet',
      description:'Belle vue sur la plage',
      price:210.5,
      imageUrl:'assets/img/hotel-room.jpg'
    },
    {
      hotelId:3,
      hotelName:'Buea  life',
      description:'Belle vue sur la plage',
      price:200.5,
      imageUrl:'assets/img/hotel-room.jpg'
    },
    {
      hotelId:4,
      hotelName:' sweet life',
      description:'Belle vue sur la plage',
      price:90.5,
      imageUrl:'assets/img/hotel-room.jpg'
    },
    {
      hotelId:5,
      hotelName:'Buea swe life',
      description:'Belle vue sur la plage',
      price:90.5,
      imageUrl:'assets/img/hotel-room.jpg'
    },
    {
      hotelId:6,
      hotelName:'Bu sweet life',
      description:'Belle vue sur la plage',
      price:330.5,
      imageUrl:'assets/img/hotel-room.jpg'
    },
    {
      hotelId:7,
      hotelName:'Bea sweet li',
      description:'Belle vue sur la plage',
      price:450.5,
      imageUrl:'assets/img/hotel-room.jpg'
    }
  ]
}
