import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../heroes-list';
import { NoobsService } from '../noobs.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  @Output() public childEvent = new EventEmitter();  
public color="red";
  selectedHero:Hero;
  onSelect(hero:Hero):void{
    console.log("hi");
    this.selectedHero=hero;
  }
 
  public noobs=[];
  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Frau',
    place:'Hyd'
  };
  public errorMsg;
  public message="";

  constructor(private _noobsService : NoobsService) { }
  public date = new Date();

  ngOnInit() {
   this._noobsService.getNoobs()
   .subscribe(data => this.noobs = data,
             error => this.errorMsg = error);
  }
  getMessage(value){
      console.log(value);
  }
  fireEvent(){
    this.childEvent.emit("Auf weidersehen");
  }

}
