import { Component } from '@angular/core';

interface Certificate {
  name: string;
  issuer: string;
  issuedDate: string;
  link?: string;
}

interface Skills {
  languages: string[];
  backend: string[];
  frontend: string[];
  clouds: string[];
  databases: string[];
  developerTools: string[];
  additionalSkills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  technicalSkills: Skills = {
    languages: ['Python', 'JavaScript'],
    backend: ['Django', 'Chalice', 'Flask'],
    frontend: ['React', 'TailwindCSS', 'jQuery', 'Redux'],
    clouds: ['AWS'],
    databases: ['PostgreSQL', 'MySQL'],
    developerTools: ['Postman', 'VS Code', 'GitHub'],
    additionalSkills: ['API Development', 'Serverless Architecture', 'Scripting', 'Version Control (Git)']
  };

  certificates: Certificate[] = [
    {
      name: 'Amazon Web Services Developer - Associate',
      issuer: 'Amazon Web Services Training and Certification',
      issuedDate: 'December 2023',
      link: 'AWS Developer Associate Certificate'
    },
    {
      name: 'Amazon Web Services Cloud Practitioner',
      issuer: 'Amazon Web Services Training and Certification',
      issuedDate: 'January 2024',
      link: 'AWS Cloud Practitioner Certificate'
    }
  ];
} 