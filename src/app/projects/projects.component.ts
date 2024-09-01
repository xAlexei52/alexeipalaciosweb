import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Sistema web PRACOFI',
      description: 'Plataforma web donde se tiene informacion de la empresa, asi como su historia , sus servicios, mision y visio, ademas de contar con un apartado de noticias, seccion de contacto, y apartado de adminsitrador para la carga actualizada noticias relevamentes al giro de la empresa.',
      image: 'assets/Pracofi.png',
      link: 'https://pracofi-remodel.vercel.app/landing',
      technologies: ['Angular', 'Node.js', 'MongoDB']
    },
    {
      name: 'App de Finanzas Personales',
      description: 'Aplicación móvil para gestión financiera personal con visualización de datos en tiempo real y planificación de metas financieras.',
      image: 'assets/project2.jpg',
      link: '',
      technologies: ['React Native', 'Firebase', 'D3.js']
    },
    {
      name: 'Sistema de Gestión de Salud',
      description: 'Plataforma integral para la gestión de clínicas y hospitales, incluyendo historiales médicos electrónicos y programación de citas.',
      image: 'assets/project3.jpg',
      link: '#',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Docker']
    }
  ];
}