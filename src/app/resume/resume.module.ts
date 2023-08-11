import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../shared-module/shared-material/shared-material.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    SharedMaterialModule,
    RouterModule.forChild([
      { path: 'resume', component:  ResumeComponent},
    ])
  ]
})
export class ResumeModule { }
