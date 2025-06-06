import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  title = 'Yash Kathrotiya';
  subtitle = 'Software Developer | AWS Certified Developer Associate';
  email = 'yashkathrotiya7048@gmail.com';
  linkedin = 'https://linkedin.com/in/your-profile';
  github = 'https://github.com/your-username';

  profileText = `Dedicated professional with 4 years of comprehensive experience in software development. 
    Specializing in crafting robust server-side web application logic, scripting DOM manipulation tasks, 
    and architecting RESTful APIs. Experienced in leading Python teams and implementing serverless solutions 
    in AWS and React. Proficient in version control using Git and building applications with React JS and 
    Django Rest Framework. Hold certifications as an AWS Certified Developer Associate, demonstrating 
    proficiency in AWS serverless architecture. Committed to delivering high-quality solutions, 
    collaborating effectively within teams, and ensuring project success.`;
} 