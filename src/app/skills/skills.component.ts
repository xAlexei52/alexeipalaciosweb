import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skills = [
    { name: 'JavaScript', icon: 'fab fa-js', level: 90 },
    { name: 'Angular', icon: 'fab fa-angular', level: 85 },
    { name: 'React', icon: 'fab fa-react', level: 80 },
    { name: 'Node.js', icon: 'fab fa-node-js', level: 75 },
    { name: 'Python', icon: 'fab fa-python', level: 70 },
    { name: 'Git', icon: 'fab fa-git-alt', level: 85 }
  ];

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.animateProgressBars();
  }

  animateProgressBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    progressBars.forEach((bar) => {
      if (bar instanceof HTMLElement) {
        const width = bar.style.width;
        bar.style.width = '0';
        bar.style.setProperty('--progress-width', width);
      }
    });
  }
}