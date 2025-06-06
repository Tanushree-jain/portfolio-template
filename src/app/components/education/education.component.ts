import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  education = {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Ganpat University',
    location: 'Ahmedabad, India',
    duration: '2017 - 2021',
    score: '8.3/10 CGPA'
  };
} 