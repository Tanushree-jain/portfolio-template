import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutText = `Dedicated Full Stack Developer with 4 years in apperssieveLing p., launching Rrobust APIs, serverless infrastrusture, and beautiful Uis with React + AWS.`;
  strengths = [
    'Strong in DRY coolng, scalable design',
    'Open to freelance, side projects, and mentorship'
  ];
} 