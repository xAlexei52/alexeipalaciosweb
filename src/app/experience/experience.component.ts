import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Desarrollador Full Stack Senior',
      company: 'Tech Innovators Inc.',
      period: 'Enero 2020 - Presente',
      description: 'Lideré equipos en proyectos de alta prioridad, implementé arquitecturas escalables y optimicé el rendimiento de aplicaciones web de alto tráfico.',
      achievements: [
        'Aumenté la eficiencia del equipo en un 30% implementando nuevas metodologías ágiles',
        'Reduje el tiempo de carga de la aplicación principal en un 40% mediante optimizaciones de rendimiento',
        'Mentoré a 5 desarrolladores junior, mejorando sus habilidades técnicas y soft skills'
      ],
      technologies: ['Angular', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      icon: 'assets/icons/tech-innovators.svg'
    },
    {
      title: 'Desarrollador Front-end',
      company: 'Creative Web Solutions',
      period: 'Marzo 2018 - Diciembre 2019',
      description: 'Desarrollé interfaces de usuario responsivas y accesibles, colaborando estrechamente con diseñadores UX para implementar diseños pixel-perfect.',
      achievements: [
        'Implementé una nueva arquitectura de componentes que redujo el tiempo de desarrollo en un 25%',
        'Mejoré el puntaje de accesibilidad del sitio principal de 65 a 98',
        'Desarrollé una librería de componentes reutilizables que aceleró el desarrollo de nuevos proyectos'
      ],
      technologies: ['React', 'Redux', 'SASS', 'Webpack', 'Jest'],
      icon: 'assets/icons/creative-web.svg'
    },
    {
      title: 'Desarrollador Junior',
      company: 'StartUp Innovations',
      period: 'Junio 2017 - Febrero 2018',
      description: 'Colaboré en el desarrollo de nuevas características para aplicaciones web, participando activamente en code reviews y sesiones de pair programming.',
      achievements: [
        'Contribuí al desarrollo de una feature clave que aumentó la retención de usuarios en un 15%',
        'Optimicé consultas SQL que mejoraron el tiempo de respuesta de la API en un 30%',
        'Implementé pruebas automatizadas que aumentaron la cobertura de código del 60% al 85%'
      ],
      technologies: ['JavaScript', 'PHP', 'MySQL', 'Git', 'Laravel'],
      icon: 'assets/icons/startup-innovations.svg'
    }
  ];
}