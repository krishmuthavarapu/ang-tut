import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { OneDetailsComponent } from './one-details/one-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { ExformsComponent } from './exforms/exforms.component';

const routes : Routes=[
  // {path:'',redirectTo:"/one",pathMatch:'full'}, to set as active page
  {path:'',redirectTo:"",pathMatch:'full'},
  {path:'exforms',component:ExformsComponent},
  {path :'one',component:OneComponent},
  {path : 'one-details',component:OneDetailsComponent},
  {path:'one-details/:id',component:DepartmentDetailsComponent},
  { path: "**", component:PageNotFoundComponent}
];

@NgModule({
  exports: [
   RouterModule
  ],
  imports:[RouterModule.forRoot(routes)],

})
export class AppRoutingModule { }
export const routingComponents = [OneComponent,OneDetailsComponent,ExformsComponent, PageNotFoundComponent,DepartmentDetailsComponent] 
