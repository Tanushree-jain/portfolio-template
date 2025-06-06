import { Component } from '@angular/core';

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
} 