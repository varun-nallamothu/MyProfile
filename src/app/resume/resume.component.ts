import { Component } from '@angular/core';
import { SharedMaterialModule } from '../shared-module/shared-material/shared-material.module';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  standalone: true,
  imports: [SharedMaterialModule]
})
export class ResumeComponent {

}
