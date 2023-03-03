import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector:'app-star-rating',
  templateUrl:'./star-rating.component.html',
  styleUrls:['./star-rating.component.css']
})
export class StartRatingComponent implements OnChanges{

  public startWith:number | undefined;
  //Pour permettre la reception d'une nouvelle valeur ou soit la modification
  @Input()
  public rating:number=2;

  ngOnChanges(): void {
      this.startWith=(this.rating * 125)/5
  }
}
