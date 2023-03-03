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
    this.hotelFilter='';
  }

  public title='List hotels';

  public hotels:Ihotel[]=[
    {
      hotelId:1,
      hotelName:'Buea sweet life',
      description:'Belle vue sur la plage',
      price:220.5,
      imageUrl:'assets/img/h1.jpg',
      rating:4
    },
    {
      hotelId:2,
      hotelName:'Buea sweet',
      description:'Belle vue sur la plage',
      price:210.5,
      imageUrl:'assets/img/h2.jpeg',
      rating:2.5
    },
    {
      hotelId:3,
      hotelName:'Buea  life',
      description:'Belle vue sur la plage',
      price:200.5,
      imageUrl:'assets/img/h3.jpeg',
      rating:5
    },
    {
      hotelId:4,
      hotelName:' sweet life',
      description:'Belle vue sur la plage',
      price:90.5,
      imageUrl:'assets/img/h4.jpg',
      rating:1.5
    },
    {
      hotelId:5,
      hotelName:'Buea swe life',
      description:'Belle vue sur la plage',
      price:90.5,
      imageUrl:'assets/img/h5.jpg',
      rating:3.5
    },
    {
      hotelId:6,
      hotelName:'Bu sweet life',
      description:'Belle vue sur la plage',
      price:330.5,
      imageUrl:'assets/img/h6.jpeg',
      rating:1
    },
    {
      hotelId:7,
      hotelName:'Bea sweet li',
      description:'Belle vue sur la plage',
      price:450.5,
      imageUrl:'assets/img/h1.jpg',
      rating:2
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

    this.filteredHotels=this.hotelFilter ? this.filterHotel(this.hotelFilter):this.hotels;
  }

  /*Fonction pour filtrer*/
  private filterHotel(crictere:string):Ihotel[]{
    crictere=crictere.toLocaleLowerCase();

    const res=this.hotels.filter(
      (hotel:Ihotel)=>hotel.hotelName.toLocaleLowerCase().indexOf(crictere)!==-1
    );

    return res;
  }
}
