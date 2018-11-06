import { Component, OnInit } from '@angular/core';
import { Uder } from "../uder";
import { EnrollmentService} from '../enrollment.service';

@Component({
  selector: 'app-exforms',
  templateUrl: './exforms.component.html',
  styleUrls: ['./exforms.component.css']
})
export class ExformsComponent implements OnInit {
  topicHasError = true;
  topics = ['Angular', 'React' , 'Express'];
  userModel = new Uder ('sai','',8550732123,'default','morning',true);
  submitted=false;


  validateTopic(value){
        if(value==="default"){
          this.topicHasError=true;
        }else{
          this.topicHasError=false;
        }
  }

  constructor(private enrollservice:EnrollmentService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.submitted=true;
      this.enrollservice.enroll(this.userModel)
      .subscribe(
        data => console.log("Success",data),
        error => console.log("error",error)
      )
  }

}
