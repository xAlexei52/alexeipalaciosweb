import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  
  socialLinks = [
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/tu-perfil' },
    { icon: 'fab fa-github', url: 'https://github.com/tu-usuario' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/tu-usuario' }
  ];
}