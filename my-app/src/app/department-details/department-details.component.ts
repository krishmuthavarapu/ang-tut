import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Router,ParamMap } from '@angular/router'

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
public departmentId;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    // let id= parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departmentId=id;
    });
  }
goPrevious(){
  let previousId= this.departmentId-1;
  this.router.navigate(['/one-details',previousId]);
}
goNext(){
  let nextId= this.departmentId+1;
  this.router.navigate(['/one-details',nextId]);
}
gotoDepartments(){
  let selectedId=this.departmentId ? this.departmentId : null;
  this.router.navigate(['one-details',{id:selectedId}]);
}
}
