import { Component, OnInit } from "@angular/core";
import { Ihotel } from "./hotel";

@Component({
  selector:'app-hotel-list',
  templateUrl:'./hotel-list.component.html',
  styleUrls:['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit{

  ngOnInit(): void {
    console.log('Mon niveau fonctionne');
    this.filteredHotels=this.hotels
  }

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
  public _hotelFilter="mot";
  public filteredHotels:Ihotel[]=[];

  public toggleIsNewBadge():void{
    this.showBadge=!this.showBadge;
  }

  public get hotelFilter():string{
    return this._hotelFilter;
  }

  public set hotelFilter(filter:string){
    this._hotelFilter=filter;
  }
}
