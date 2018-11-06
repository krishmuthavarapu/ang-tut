import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { NoobsService } from '../noobs.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-one-details',
  templateUrl: './one-details.component.html',
  styleUrls: ['./one-details.component.css']
})
export class OneDetailsComponent implements OnInit {
  departments=[
    { id: 17, name: 'Dynama', place: 'Del' },
    { id: 18, name: 'Dr IQ', place: 'Gun' },
    { id: 19, name: 'Magma', place: 'Mum' },
    { id: 20, name: 'Tornado', place: 'hyd' }
  ]
  @Input() hero: Hero;
  public noobs=[];
  selectedNoob:NoobsService;
public selectedId;

  constructor(private _noobsService:NoobsService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.selectedId=id;
    });
    this._noobsService.getNoobs()
    .subscribe(data => this.noobs = data);
  }
  onSelec(department){
            this.router.navigate(['/one-details', department.id]);
  }
  onSelects(noobs:NoobsService):void{
    this.selectedNoob=noobs;
  }
isSelected(department){
  return department.id === this.selectedId;
}

}
