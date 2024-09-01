import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  profileImage = 'assets/perfil.jpg';
  description = [
    'Con más de 7 años de experiencia en el desarrollo web y móvil, me apasiona crear soluciones digitales que no solo cumplen con los requisitos técnicos, sino que también ofrecen una experiencia de usuario excepcional.',
    'Mi experiencia abarca desde startups ágiles hasta proyectos empresariales a gran escala, siempre enfocado en la entrega de código limpio, eficiente y escalable.',
    'Fuera del mundo del código, soy un ávido montañista y fotógrafo aficionado. Creo firmemente que estas actividades alimentan mi creatividad y perspectiva en el desarrollo de software.'
  ];
}