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

  // Multiple orbits, each with a subset of skills
  orbits = [
    [
      // JavaScript logo
      { svg: `<svg width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><path d="M19.6 23.2c.4.7.8 1.3 1.7 1.3.8 0 1.3-.3 1.3-1.6v-7.1h2.2v7.2c0 2.3-1.3 3.3-3.1 3.3-1.7 0-2.7-.9-3.2-2l1.1-.7zm-7.2.1c.3.6.6 1.1 1.4 1.1.7 0 1.1-.3 1.1-1.3v-7.2h2.2v7.2c0 2.2-1.3 3.2-3.1 3.2-1.7 0-2.7-.9-3.2-2l1.1-.7z" fill="#222"/></svg>` },
      // TypeScript logo
      { svg: `<svg width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#3178C6"/><path d="M10 14h12v2h-5v8h-2v-8h-5v-2z" fill="#fff"/></svg>` },
      // React logo
      { svg: `<svg width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#222"/><g stroke="#61DAFB" stroke-width="2" fill="none"><ellipse cx="16" cy="16" rx="10" ry="4"/><ellipse cx="16" cy="16" rx="10" ry="4" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="10" ry="4" transform="rotate(120 16 16)"/><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/></g></svg>` }
    ],
    [
      // Docker logo (whale)
      { svg: `<svg width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#222"/><g><rect x="8" y="18" width="16" height="6" rx="2" fill="#2496ED"/><rect x="10" y="14" width="4" height="4" rx="1" fill="#2496ED"/><rect x="16" y="14" width="4" height="4" rx="1" fill="#2496ED"/><circle cx="24" cy="22" r="2" fill="#2496ED"/></g></svg>` },
      // AWS logo (smile)
      { svg: `<svg width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#232F3E"/><path d="M10 20c2 2 10 2 12 0" stroke="#FF9900" stroke-width="2" fill="none"/><circle cx="12" cy="14" r="1" fill="#FF9900"/><circle cx="20" cy="14" r="1" fill="#FF9900"/></svg>` },
      // Python logo (minimal snake)
      { svg: `<svg width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#222"/><path d="M10 18c0-4 12-4 12 0 0 4-12 4-12 0z" fill="#FFD43B"/><circle cx="14" cy="18" r="1" fill="#222"/><circle cx="18" cy="18" r="1" fill="#222"/></svg>` },
      // PostgreSQL logo (elephant head)
      { svg: `<svg width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#336791"/><ellipse cx="16" cy="18" rx="6" ry="4" fill="#fff"/><rect x="14" y="10" width="4" height="8" rx="2" fill="#fff"/></svg>` }
    ],
    [
      // VS Code logo (angle)
      { svg: `<svg width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#222"/><polygon points="10,16 22,10 22,22" fill="#22A6F2"/></svg>` }
    ]
  ];

  getOrbitStyle(index: number, total: number, orbitIdx: number) {
    const angle = (index / total) * 2 * Math.PI;
    const radii = [90, 130, 170]; // px for each orbit
    const radius = radii[orbitIdx] || 90;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return {
      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
    };
  }
} 