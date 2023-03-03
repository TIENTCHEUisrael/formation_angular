export interface Ihotel{
  hotelId:number;
  hotelName:string;
  description:string;
  price:number;
  imageUrl:string,
  rating:number
}


export class Hotel implements Ihotel{
  constructor(
    public hotelId:number,
    public hotelName:string,
    public description:string,
    public price:number,
    public imageUrl:string,
    public rating:number
  ){}

  getNewPrice(price:number):number{
    return price-5;
  }
}
