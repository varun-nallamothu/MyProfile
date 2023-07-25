import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    RouterModule.forChild([
      { path: 'resume', component:  ResumeComponent},
    ])
  ]
})
export class ResumeModule { }
