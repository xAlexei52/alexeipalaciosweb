import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScrolled = false;

  navItems = [
    { href: '#about', text: 'Sobre mí' },
    { href: '#skills', text: 'Habilidades' },
    { href: '#projects', text: 'Proyectos' },
    { href: '#experience', text: 'Experiencia' },
    { href: '#contact', text: 'Contacto' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}