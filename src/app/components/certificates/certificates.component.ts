import { Component } from '@angular/core';

interface Certificate {
  name: string;
  issuer: string;
  issuedDate: string;
  link?: string;
}

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
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