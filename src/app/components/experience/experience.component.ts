import { Component } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Full Stack Developer',
      company: 'CEREBULB INDIA PVT. LTD',
      location: 'GIFT City, Gandhinagar',
      duration: 'January 2021 – Present',
      responsibilities: [
        'Designed and implemented the core logic for server-side web application development, ensuring robustness, security, and scalability.',
        'Scripted DOM manipulation tasks using JavaScript (jQuery) to enhance user interactivity and interface responsiveness.',
        'Crafted RESTful APIs with Django Rest Framework (DRF), focusing on standardization, flexibility, and efficiency in data communication.',
        'Formulated and implemented intricate business logic tailored to specific use cases.',
        'Wrote reusable, testable, and efficient code, ensuring modularity and code efficiency.',
        'Managed codebase versions effectively using Git, enabling collaborative development.',
        'Developed applications using React JS and Django Rest Framework, focusing on performance and responsiveness.',
        'Implemented serverless architecture on AWS, leveraging Lambda functions, API Gateway, CloudFront, Amazon RDS with PostgreSQL, and Route 53.',
        'Developed middleware to retrieve event frame data from various sources and integrate it into the PMP database.'
      ]
    },
    {
      title: 'Python Backend Developer Intern',
      company: 'My Campus Recruit',
      location: 'USA - Remote',
      duration: 'July 2020 – December 2020',
      responsibilities: [
        'Built API and back-end for front-end.',
        'Developed front-end UI using HTML/CSS according to requirements.',
        'Scripted logic using Python to automate tasks.',
        'Responsible for version controlling using Git.',
        'Ensured code cleanliness, reusability, testability, and efficiency.'
      ]
    }
  ];
} 